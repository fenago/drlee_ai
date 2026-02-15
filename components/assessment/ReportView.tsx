"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ReportData {
  overallScore: number;
  maturityLevel: string;
  executiveSummary: string;
  topGaps: string[];
  quickWins: string[];
  bigOpportunity: string;
  recommendedPath: string;
  detailedAnalysis: { title: string; content: string }[];
}

interface ReportViewProps {
  report: ReportData;
  assessmentType: "individual" | "organizational";
  respondentName?: string;
}

const maturityColors: Record<string, string> = {
  Unaware: "from-red-500 to-red-600",
  Exploring: "from-orange-500 to-amber-500",
  Experimenting: "from-yellow-500 to-orange-500",
  Implementing: "from-blue-500 to-indigo-500",
  Scaling: "from-indigo-500 to-purple-500",
  Leading: "from-emerald-500 to-teal-500",
};

function ScoreCircle({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const color =
    score >= 75
      ? "#10b981"
      : score >= 50
        ? "#6366f1"
        : score >= 25
          ? "#f59e0b"
          : "#ef4444";

  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-slate-200 dark:text-slate-700"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-3xl font-bold text-slate-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {score}
        </motion.span>
        <span className="text-xs text-slate-500 dark:text-white/50">
          / 100
        </span>
      </div>
    </div>
  );
}

export default function ReportView({
  report,
  assessmentType,
  respondentName,
}: ReportViewProps) {
  const gradientClass =
    maturityColors[report.maturityLevel] || "from-slate-500 to-slate-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-medium mb-6 bg-gradient-to-r ${gradientClass}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {report.maturityLevel} Level
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          {respondentName ? `${respondentName}'s ` : "Your "}
          AI Reality Gap Report
        </h2>
        <p className="text-slate-500 dark:text-white/50">
          {assessmentType === "individual"
            ? "Individual Assessment"
            : "Organizational Assessment"}
        </p>
      </div>

      {/* Score + Summary */}
      <div className="grid md:grid-cols-[auto_1fr] gap-8 mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
        <div className="flex justify-center">
          <ScoreCircle score={report.overallScore} />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
            Executive Summary
          </h3>
          <p className="text-slate-600 dark:text-white/70 leading-relaxed whitespace-pre-line">
            {report.executiveSummary}
          </p>
        </div>
      </div>

      {/* Top Gaps + Quick Wins */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Top Gaps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/5"
        >
          <h3 className="font-semibold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            Top Gaps
          </h3>
          <ul className="space-y-3">
            {report.topGaps.map((gap, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-slate-700 dark:text-white/70"
              >
                <span className="w-5 h-5 rounded-full bg-red-200 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {gap}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Wins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/5"
        >
          <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Quick Wins (Next 30 Days)
          </h3>
          <ul className="space-y-3">
            {report.quickWins.map((win, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-slate-700 dark:text-white/70"
              >
                <svg
                  className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {win}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Big Opportunity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      >
        <h3 className="font-semibold text-white/90 mb-2 flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          Your Biggest Opportunity
        </h3>
        <p className="text-white/90 text-lg leading-relaxed">
          {report.bigOpportunity}
        </p>
      </motion.div>

      {/* Detailed Analysis */}
      {report.detailedAnalysis && report.detailedAnalysis.length > 0 && (
        <div className="space-y-6 mb-10">
          {report.detailedAnalysis.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                {section.title}
              </h3>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Recommended Path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/5 mb-10"
      >
        <h3 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-3">
          Recommended Learning Path
        </h3>
        <p className="text-slate-700 dark:text-white/70 leading-relaxed">
          {report.recommendedPath}
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center space-y-4"
      >
        <p className="text-slate-500 dark:text-white/50">
          Ready to close the gap?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/corporate-training"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:scale-105 transition-all"
          >
            Explore Training Options
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            href="/#catalog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
