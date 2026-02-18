import { NextResponse, NextRequest } from "next/server";
import supabase from "@/libs/supabase";
import { generateRealityGapReport, generateUnifiedReport } from "@/libs/gemini";
import { sendEmail } from "@/libs/resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type, respondent, answers } = body;

  if (!type || !["individual", "organizational", "unified"].includes(type)) {
    return NextResponse.json(
      { error: "Valid assessment type required" },
      { status: 400 }
    );
  }

  if (!answers || !Array.isArray(answers) || answers.length === 0) {
    return NextResponse.json(
      { error: "Assessment answers are required" },
      { status: 400 }
    );
  }

  try {
    // Insert assessment row
    const { data: assessment, error: insertError } = await supabase
      .from("web_assessments")
      .insert({
        type,
        status: "analyzing",
        respondent_name: respondent?.name || null,
        respondent_email: respondent?.email || null,
        respondent_company: respondent?.company || null,
        respondent_role: respondent?.role || null,
        respondent_website: respondent?.website || null,
        respondent_linkedin: respondent?.linkedin || null,
        answers,
        assessment_version: type === "unified" ? 2 : 1,
      })
      .select()
      .single();

    if (insertError || !assessment) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to create assessment" },
        { status: 500 }
      );
    }

    // Generate report based on type
    let geminiResponse: string | null;

    if (type === "unified") {
      geminiResponse = await generateUnifiedReport(answers, respondent);
    } else {
      geminiResponse = await generateRealityGapReport(type, answers);
    }

    if (!geminiResponse) {
      await supabase
        .from("web_assessments")
        .update({ status: "error" })
        .eq("id", assessment.id);
      return NextResponse.json(
        { error: "Failed to generate report" },
        { status: 500 }
      );
    }

    let report;
    try {
      const cleaned = geminiResponse
        .replace(/```json\s*/g, "")
        .replace(/```\s*/g, "")
        .trim();
      report = JSON.parse(cleaned);
    } catch {
      await supabase
        .from("web_assessments")
        .update({
          status: "error",
          raw_gemini_response: geminiResponse,
        })
        .eq("id", assessment.id);
      return NextResponse.json(
        { error: "Failed to parse report" },
        { status: 500 }
      );
    }

    // Build update object based on type
    const updateData: Record<string, any> = {
      status: "complete",
      overall_score: report.overallScore,
      maturity_level: report.maturityLevel || report.personalMaturityLevel,
      executive_summary: report.executiveSummary,
      top_gaps: report.topGaps,
      quick_wins: report.quickWins,
      big_opportunity: report.bigOpportunity,
      recommended_path: report.recommendedPath,
      detailed_analysis: report.detailedAnalysis,
      raw_gemini_response: geminiResponse,
    };

    // Add unified-specific fields
    if (type === "unified") {
      updateData.personal_maturity_score = report.personalMaturityScore;
      updateData.org_maturity_score = report.orgMaturityScore;
      updateData.pain_severity_score = report.painSeverityScore;
      updateData.business_readiness_score = report.businessReadinessScore;
      updateData.workflow_opportunity_score = report.workflowOpportunityScore;
      updateData.personal_maturity_level = report.personalMaturityLevel;
      updateData.org_maturity_level = report.orgMaturityLevel;
      updateData.personal_analysis = report.personalAnalysis;
      updateData.org_analysis = report.orgAnalysis;
      updateData.pain_point_analysis = report.painPointAnalysis;
      updateData.business_context_analysis = report.businessContextAnalysis;
      updateData.workflow_analysis = report.workflowAnalysis;
      updateData.ninety_day_plan = report.ninetyDayPlan;
    }

    await supabase
      .from("web_assessments")
      .update(updateData)
      .eq("id", assessment.id);

    // Send report email
    if (respondent?.email) {
      try {
        const reportUrl = `${process.env.NEXTAUTH_URL || "https://drlee.ai"}/assessment/report/${assessment.id}`;

        const isUnified = type === "unified";
        const personalLevel = report.personalMaturityLevel || report.maturityLevel;
        const orgLevel = report.orgMaturityLevel || "";

        const scoresSummary = isUnified
          ? `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
              <p style="margin: 0; font-size: 18px;"><strong>Overall Score:</strong> ${report.overallScore}/100</p>
              <p style="margin: 8px 0 0;"><strong>Personal AI Maturity:</strong> Level ${report.personalMaturityScore}/10 (${personalLevel})</p>
              <p style="margin: 8px 0 0;"><strong>Organizational Maturity:</strong> Level ${report.orgMaturityScore}/10 (${orgLevel})</p>
              <p style="margin: 8px 0 0;"><strong>Pain Severity:</strong> ${report.painSeverityScore}/100</p>
              <p style="margin: 8px 0 0;"><strong>Workflow Opportunity:</strong> ${report.workflowOpportunityScore}/100</p>
            </div>`
          : `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
              <p style="margin: 0;"><strong>Overall Score:</strong> ${report.overallScore}/100</p>
              <p style="margin: 8px 0 0;"><strong>Maturity Level:</strong> ${report.maturityLevel}</p>
            </div>`;

        await sendEmail({
          to: respondent.email,
          subject: `Your AI Reality Gap Report — DrLee.ai`,
          text: `Hi ${respondent.name || "there"},\n\nYour AI Reality Gap Report is ready.\n\nOverall Score: ${report.overallScore}/100\nPersonal Maturity: ${personalLevel}\n\nView your full report: ${reportUrl}\n\n— Dr. Lee`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a1a2e;">Your AI Reality Gap Report</h2>
              <p>Hi ${respondent.name || "there"},</p>
              <p>Your assessment is complete. Here's a snapshot:</p>
              ${scoresSummary}
              <p>${report.executiveSummary?.substring(0, 300)}...</p>
              <a href="${reportUrl}" style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin-top: 12px;">View Full Report</a>
              <p style="color: #666; font-size: 14px; margin-top: 24px;">— Dr. Lee<br>DrLee.ai</p>
            </div>
          `,
        });

        await supabase
          .from("web_assessments")
          .update({
            report_email_sent: true,
            report_email_sent_at: new Date().toISOString(),
          })
          .eq("id", assessment.id);
      } catch (emailError: any) {
        console.error("Failed to send report email:", emailError?.message);
      }
    }

    return NextResponse.json({
      assessmentId: assessment.id,
      report,
    });
  } catch (e: any) {
    console.error("Assessment error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Assessment ID is required" },
      { status: 400 }
    );
  }

  try {
    const { data: assessment, error } = await supabase
      .from("web_assessments")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !assessment) {
      return NextResponse.json(
        { error: "Assessment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(assessment);
  } catch (e: any) {
    console.error("Assessment fetch error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
