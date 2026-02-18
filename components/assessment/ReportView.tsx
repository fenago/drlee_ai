"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { maturityTiers } from "@/lib/assessment-questions";

// Support both v1 (legacy) and v2 (unified) report data
interface ReportData {
  overallScore: number;
  // v1 fields
  maturityLevel?: string;
  // v2 fields
  personalMaturityScore?: number;
  orgMaturityScore?: number;
  painSeverityScore?: number;
  businessReadinessScore?: number;
  workflowOpportunityScore?: number;
  personalMaturityLevel?: string;
  orgMaturityLevel?: string;
  personalTier?: string;
  orgTier?: string;
  personalAnalysis?: { currentState: string; gaps: string[]; quickWins: string[] };
  orgAnalysis?: { currentState: string; gaps: string[]; quickWins: string[] };
  painPointAnalysis?: { currentState: string; topPains: string[]; aiSolutions: string[] };
  businessContextAnalysis?: { currentState: string; opportunities: string[]; risks: string[] };
  workflowAnalysis?: { currentState: string; topWorkflows: string[]; estimatedImpact: string };
  ninetyDayPlan?: { week: string; action: string; outcome: string }[];
  // Shared fields
  executiveSummary: string;
  topGaps: string[];
  quickWins: string[];
  bigOpportunity: string;
  recommendedPath: string;
  detailedAnalysis: { title: string; content: string }[];
}

interface ReportViewProps {
  report: ReportData;
  assessmentType: "individual" | "organizational" | "unified";
  respondentName?: string;
}

function ScoreCircle({ score, label, max = 100 }: { score: number; label: string; max?: number }) {
  const circumference = 2 * Math.PI * 40;
  const pct = (score / max) * 100;
  const strokeDashoffset = circumference - (pct / 100) * circumference;
  const color =
    pct >= 75 ? "#10b981" : pct >= 50 ? "#6366f1" : pct >= 25 ? "#f59e0b" : "#ef4444";

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="40" fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-200 dark:text-slate-700" />
          <motion.circle
            cx="45" cy="45" r="40" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-xl font-bold text-slate-900 dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {score}
          </motion.span>
          <span className="text-[10px] text-slate-500 dark:text-white/50">/ {max}</span>
        </div>
      </div>
      <span className="mt-2 text-xs font-medium text-slate-600 dark:text-white/60 text-center leading-tight">{label}</span>
    </div>
  );
}

function TierBadge({ tier }: { tier: string }) {
  const tierData = maturityTiers[tier as keyof typeof maturityTiers];
  if (!tierData) return null;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${tierData.color}`}>
      {tier}
    </span>
  );
}

function AnalysisCard({
  title,
  currentState,
  items,
  itemsLabel,
  color,
  delay,
}: {
  title: string;
  currentState: string;
  items: string[];
  itemsLabel: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`p-6 rounded-2xl border ${color} bg-white dark:bg-slate-800/50`}
    >
      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{title}</h4>
      <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed mb-4">{currentState}</p>
      {items.length > 0 && (
        <>
          <p className="text-xs font-medium text-slate-500 dark:text-white/40 uppercase tracking-wider mb-2">{itemsLabel}</p>
          <ul className="space-y-1.5">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-white/70">
                <span className="text-indigo-500 mt-0.5">-</span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </motion.div>
  );
}

export default function ReportView({ report, assessmentType, respondentName }: ReportViewProps) {
  const isUnified = assessmentType === "unified" && report.personalMaturityScore !== undefined;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        {isUnified && report.personalTier && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="mb-4">
            <TierBadge tier={report.personalTier} />
          </motion.div>
        )}
        {!isUnified && report.maturityLevel && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-medium mb-4 bg-gradient-to-r from-indigo-500 to-purple-500">
            {report.maturityLevel} Level
          </motion.div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          {respondentName ? `${respondentName}'s ` : "Your "}AI Reality Gap Report
        </h2>
        <p className="text-slate-500 dark:text-white/50">
          {isUnified ? "Unified 5-Area Assessment" : assessmentType === "individual" ? "Individual Assessment" : "Organizational Assessment"}
        </p>
      </div>

      {/* 5-Score Dashboard (unified only) */}
      {isUnified && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
            <ScoreCircle score={report.personalMaturityScore!} label="Personal AI Maturity" max={10} />
            <ScoreCircle score={report.orgMaturityScore!} label="Org Maturity" max={10} />
            <ScoreCircle score={report.painSeverityScore!} label="Pain Severity" />
            <ScoreCircle score={report.businessReadinessScore!} label="Business Readiness" />
            <ScoreCircle score={report.workflowOpportunityScore!} label="Workflow Opportunity" />
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 text-center">
            <span className="text-sm text-slate-500 dark:text-white/50">Overall Score: </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{report.overallScore}</span>
            <span className="text-sm text-slate-500 dark:text-white/50">/100</span>
          </div>
          {(report.personalMaturityLevel || report.orgMaturityLevel) && (
            <div className="mt-3 flex flex-wrap gap-3 justify-center text-sm">
              {report.personalMaturityLevel && (
                <span className="text-slate-600 dark:text-white/60">
                  Personal: <strong>{report.personalMaturityLevel}</strong>
                  {report.personalTier && <> ({report.personalTier})</>}
                </span>
              )}
              {report.orgMaturityLevel && (
                <span className="text-slate-600 dark:text-white/60">
                  Organization: <strong>{report.orgMaturityLevel}</strong>
                  {report.orgTier && <> ({report.orgTier})</>}
                </span>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* Legacy single score (v1) */}
      {!isUnified && (
        <div className="grid md:grid-cols-[auto_1fr] gap-8 mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
          <div className="flex justify-center">
            <ScoreCircle score={report.overallScore} label="Overall Score" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Executive Summary</h3>
            <p className="text-slate-600 dark:text-white/70 leading-relaxed whitespace-pre-line">{report.executiveSummary}</p>
          </div>
        </div>
      )}

      {/* Executive Summary (unified) */}
      {isUnified && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Executive Summary</h3>
          <p className="text-slate-600 dark:text-white/70 leading-relaxed whitespace-pre-line">{report.executiveSummary}</p>
        </motion.div>
      )}

      {/* 5-Area Analysis Cards (unified) */}
      {isUnified && (
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {report.personalAnalysis && (
            <AnalysisCard
              title="Personal AI Maturity"
              currentState={report.personalAnalysis.currentState}
              items={report.personalAnalysis.gaps}
              itemsLabel="Key Gaps"
              color="border-blue-200 dark:border-blue-500/20"
              delay={0.5}
            />
          )}
          {report.orgAnalysis && (
            <AnalysisCard
              title="Organizational Readiness"
              currentState={report.orgAnalysis.currentState}
              items={report.orgAnalysis.gaps}
              itemsLabel="Key Gaps"
              color="border-purple-200 dark:border-purple-500/20"
              delay={0.55}
            />
          )}
          {report.painPointAnalysis && (
            <AnalysisCard
              title="Pain Points & Urgency"
              currentState={report.painPointAnalysis.currentState}
              items={report.painPointAnalysis.aiSolutions}
              itemsLabel="AI Solutions"
              color="border-amber-200 dark:border-amber-500/20"
              delay={0.6}
            />
          )}
          {report.businessContextAnalysis && (
            <AnalysisCard
              title="Business Context"
              currentState={report.businessContextAnalysis.currentState}
              items={report.businessContextAnalysis.opportunities}
              itemsLabel="Opportunities"
              color="border-emerald-200 dark:border-emerald-500/20"
              delay={0.65}
            />
          )}
          {report.workflowAnalysis && (
            <AnalysisCard
              title="Workflow Opportunities"
              currentState={report.workflowAnalysis.currentState}
              items={report.workflowAnalysis.topWorkflows}
              itemsLabel="Top Workflows to Automate"
              color="border-cyan-200 dark:border-cyan-500/20"
              delay={0.7}
            />
          )}
        </div>
      )}

      {/* Top Gaps + Quick Wins */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="p-6 rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/5">
          <h3 className="font-semibold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Top Gaps
          </h3>
          <ul className="space-y-3">
            {report.topGaps.map((gap, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-white/70">
                <span className="w-5 h-5 rounded-full bg-red-200 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                {gap}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/5">
          <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Wins (Next 30 Days)
          </h3>
          <ul className="space-y-3">
            {report.quickWins.map((win, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-white/70">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {win}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Big Opportunity */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h3 className="font-semibold text-white/90 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Your Biggest Opportunity
        </h3>
        <p className="text-white/90 text-lg leading-relaxed">{report.bigOpportunity}</p>
      </motion.div>

      {/* 90-Day Plan (unified) */}
      {isUnified && report.ninetyDayPlan && report.ninetyDayPlan.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4">90-Day Action Plan</h3>
          <div className="space-y-4">
            {report.ninetyDayPlan.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-20">
                  <span className="inline-block px-2 py-1 rounded bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">{step.week}</span>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-medium text-sm">{step.action}</p>
                  <p className="text-slate-500 dark:text-white/50 text-xs mt-0.5">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Detailed Analysis */}
      {report.detailedAnalysis && report.detailedAnalysis.length > 0 && (
        <div className="space-y-6 mb-10">
          {report.detailedAnalysis.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 + i * 0.1 }} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{section.title}</h3>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Recommended Path */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/5 mb-10">
        <h3 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Recommended Next Step</h3>
        <p className="text-slate-700 dark:text-white/70 leading-relaxed">{report.recommendedPath}</p>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-center space-y-4">
        <p className="text-slate-500 dark:text-white/50">Ready to close the gap?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:scale-105 transition-all">
            See How It Works
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link href="/#catalog" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Browse Courses
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
