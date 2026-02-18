"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReportView from "@/components/assessment/ReportView";

export default function ReportPage() {
  const params = useParams();
  const [assessment, setAssessment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await fetch(`/api/assessment?id=${params.id}`);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to load report");
        }
        const data = await res.json();
        setAssessment(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchReport();
    }
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-500/20 mb-4">
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <p className="text-slate-500 dark:text-white/50">Loading your report...</p>
        </div>
      </main>
    );
  }

  if (error || !assessment) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-500/20 mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Report Not Found</h2>
          <p className="text-slate-500 dark:text-white/50 mb-6">{error || "This assessment report could not be found."}</p>
          <a href="/assessment" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
            Take an Assessment
          </a>
        </div>
      </main>
    );
  }

  // Determine version and build report object
  const isV2 = assessment.assessment_version === 2 || assessment.type === "unified";

  const report: any = {
    overallScore: assessment.overall_score,
    executiveSummary: assessment.executive_summary,
    topGaps: assessment.top_gaps || [],
    quickWins: assessment.quick_wins || [],
    bigOpportunity: assessment.big_opportunity,
    recommendedPath: assessment.recommended_path,
    detailedAnalysis: assessment.detailed_analysis || [],
  };

  if (isV2) {
    report.personalMaturityScore = assessment.personal_maturity_score;
    report.orgMaturityScore = assessment.org_maturity_score;
    report.painSeverityScore = assessment.pain_severity_score;
    report.businessReadinessScore = assessment.business_readiness_score;
    report.workflowOpportunityScore = assessment.workflow_opportunity_score;
    report.personalMaturityLevel = assessment.personal_maturity_level;
    report.orgMaturityLevel = assessment.org_maturity_level;
    report.personalTier = assessment.personal_analysis?.personalTier;
    report.orgTier = assessment.org_analysis?.orgTier;
    report.personalAnalysis = assessment.personal_analysis;
    report.orgAnalysis = assessment.org_analysis;
    report.painPointAnalysis = assessment.pain_point_analysis;
    report.businessContextAnalysis = assessment.business_context_analysis;
    report.workflowAnalysis = assessment.workflow_analysis;
    report.ninetyDayPlan = assessment.ninety_day_plan;
  } else {
    report.maturityLevel = assessment.maturity_level;
  }

  const assessmentType = isV2 ? "unified" : assessment.type;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <ReportView
          report={report}
          assessmentType={assessmentType}
          respondentName={assessment.respondent_name}
        />
      </div>
    </main>
  );
}
