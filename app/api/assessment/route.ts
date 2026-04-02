import { NextResponse, NextRequest } from "next/server";
import supabase from "@/libs/supabase";
import { generateRealityGapReport } from "@/libs/gemini";
import { sendEmail } from "@/libs/resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type, respondent, answers } = body;

  if (!type || !["individual", "organizational"].includes(type)) {
    return NextResponse.json(
      { error: "Valid assessment type required (individual or organizational)" },
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
        answers,
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

    const geminiResponse = await generateRealityGapReport(type, answers);

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

    // Update with completed report
    await supabase
      .from("web_assessments")
      .update({
        status: "complete",
        overall_score: report.overallScore,
        maturity_level: report.maturityLevel,
        executive_summary: report.executiveSummary,
        top_gaps: report.topGaps,
        quick_wins: report.quickWins,
        big_opportunity: report.bigOpportunity,
        recommended_path: report.recommendedPath,
        detailed_analysis: report.detailedAnalysis,
        raw_gemini_response: geminiResponse,
      })
      .eq("id", assessment.id);

    // Send report email if respondent provided email
    if (respondent?.email) {
      try {
        const reportUrl = `${process.env.NEXTAUTH_URL || "https://drlee.ai"}/assessment/report/${assessment.id}`;
        await sendEmail({
          to: respondent.email,
          subject: `Your AI Reality Gap Report — DrLee.ai`,
          text: `Hi ${respondent.name || "there"},\n\nYour AI Reality Gap Report is ready.\n\nOverall Score: ${report.overallScore}/100\nMaturity Level: ${report.maturityLevel}\n\nView your full report: ${reportUrl}\n\n— Dr. Lee`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a1a2e;">Your AI Reality Gap Report</h2>
              <p>Hi ${respondent.name || "there"},</p>
              <p>Your assessment is complete. Here's a snapshot:</p>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
                <p style="margin: 0;"><strong>Overall Score:</strong> ${report.overallScore}/100</p>
                <p style="margin: 8px 0 0;"><strong>Maturity Level:</strong> ${report.maturityLevel}</p>
              </div>
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
