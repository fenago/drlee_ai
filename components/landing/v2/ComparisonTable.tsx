"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-emerald-500 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5 text-red-500 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-500 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

type CellStatus = "good" | "bad" | "mid";

interface RowData {
  feature: string;
  generic: { status: CellStatus; text: string };
  traditional: { status: CellStatus; text: string };
  drlee: { status: CellStatus; text: string };
}

const rows: RowData[] = [
  {
    feature: "Personalization",
    generic: { status: "bad", text: "One-size-fits-all" },
    traditional: { status: "good", text: "Highly customized" },
    drlee: { status: "good", text: "AI-powered personalization at scale" },
  },
  {
    feature: "Speed",
    generic: { status: "good", text: "Instant results" },
    traditional: { status: "bad", text: "Weeks to months" },
    drlee: { status: "good", text: "24-hour turnaround" },
  },
  {
    feature: "Depth",
    generic: { status: "bad", text: "Surface-level scores" },
    traditional: { status: "good", text: "Deep analysis" },
    drlee: { status: "good", text: "Deep analysis + benchmarking" },
  },
  {
    feature: "Actionability",
    generic: { status: "bad", text: "Generic recommendations" },
    traditional: { status: "good", text: "Specific guidance" },
    drlee: { status: "good", text: "Phased roadmap + education path" },
  },
  {
    feature: "Cost",
    generic: { status: "good", text: "Free or cheap" },
    traditional: { status: "bad", text: "$50K\u2013$500K+" },
    drlee: { status: "good", text: "Free assessment, scalable engagement" },
  },
  {
    feature: "Education",
    generic: { status: "bad", text: "None" },
    traditional: { status: "mid", text: "Limited" },
    drlee: { status: "good", text: "Mastermind + corporate training" },
  },
  {
    feature: "Implementation",
    generic: { status: "bad", text: "None" },
    traditional: { status: "mid", text: "Depends on firm" },
    drlee: { status: "good", text: "Full development + Fractional CTO" },
  },
];

function StatusIcon({ status }: { status: CellStatus }) {
  switch (status) {
    case "good":
      return <CheckIcon />;
    case "bad":
      return <XIcon />;
    case "mid":
      return <WarningIcon />;
  }
}

const blurSlide = {
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
  },
};

export default function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-white dark:bg-[#0f1329] py-20 md:py-28 overflow-hidden">
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Gradient mesh — blue glow top-right, purple glow bottom-left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-[10%] w-[550px] h-[550px] rounded-full bg-[#4a6cf7]/8 dark:bg-[#4a6cf7]/15 blur-[130px]" />
        <div className="absolute -bottom-32 left-[10%] w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/8 dark:bg-[#8b5cf6]/15 blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ===== CONTENT ===== */}
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={blurSlide}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="text-[#4a6cf7] font-medium">Personalized</span>.{" "}
            <span className="text-[#4a6cf7] font-medium">Data-Driven</span>.{" "}
            <span className="text-[#4a6cf7] font-medium">Actionable</span>.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#a0aec0] max-w-3xl mx-auto">
            Unlike generic surveys or expensive consultants, our approach
            combines the best of both worlds.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-[#2d3748]"
          variants={blurSlide}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <table className="w-full min-w-[700px] text-left">
            {/* Table Header */}
            <thead>
              <tr className="bg-slate-100 dark:bg-[#1a1f3a]">
                <th className="px-5 py-4 text-sm font-semibold text-slate-900 dark:text-white w-[18%]">
                  Feature
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-900 dark:text-white w-[22%]">
                  Generic Surveys
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-900 dark:text-white w-[22%]">
                  Traditional Consultants
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-900 dark:text-white w-[38%] bg-[#4a6cf7]/5 dark:bg-[#4a6cf7]/5 border-l-2 border-[#4a6cf7]">
                  DrLee.ai Approach
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  className={`${
                    i % 2 === 0
                      ? "bg-white dark:bg-[#0f1329]"
                      : "bg-slate-50 dark:bg-[#141833]"
                  } border-t border-slate-200/60 dark:border-[#2d3748]/60`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.2 + i * 0.07,
                            duration: 0.5,
                          },
                        }
                      : {}
                  }
                >
                  <td className="px-5 py-4 text-sm font-medium text-slate-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.generic.status} />
                      <span className="text-sm text-slate-600 dark:text-[#a0aec0]">
                        {row.generic.text}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.traditional.status} />
                      <span className="text-sm text-slate-600 dark:text-[#a0aec0]">
                        {row.traditional.text}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 bg-[#4a6cf7]/5 dark:bg-[#4a6cf7]/5 border-l-2 border-[#4a6cf7]">
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.drlee.status} />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        {row.drlee.text}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Callout */}
        <motion.div
          className="mt-10 bg-white dark:bg-[#1a1f3a] border border-slate-200/80 dark:border-[#2d3748] rounded-xl p-8 text-center"
          variants={blurSlide}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#a0aec0] max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just tell you what to do. We help you{" "}
            <span className="text-[#4a6cf7] font-medium">understand why</span>,
            teach you{" "}
            <span className="text-[#4a6cf7] font-medium">how</span>, and{" "}
            <span className="text-[#4a6cf7] font-medium">
              build it with you
            </span>{" "}
            if needed. That&apos;s the DrLee.ai difference.
          </p>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent mt-20 md:mt-28" />
    </section>
  );
}
