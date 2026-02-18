"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const traditionalItems = [
  "One-size-fits-all curriculum",
  "Generic case studies from other industries",
  "Lecture-heavy, theory-focused",
  "No assessment of where you actually are",
  "Same training whether you're a beginner or advanced",
  "No follow-up, no accountability",
  "Completion certificate is the end goal",
];

const mastermindItems = [
  "Data-driven curriculum curated from your assessment",
  "Your industry, your workflows, your pain points",
  "60% hands-on practice, 40% targeted theory",
  "Starts with a deep diagnostic of your AI maturity",
  "Content calibrated to your exact readiness level",
  "90-day action plan with measurable milestones",
  "Working AI prototype you leave with",
];

const blurSlide = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const springTransition = { type: "spring" as const, bounce: 0.3, duration: 1.5 };

export default function TrainingComparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-slate-50 dark:bg-[#0a0e27] overflow-hidden"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent" />

      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Gradient mesh — red/warm on left (traditional), green/cool on right (DrLee.ai) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Red/warm glow — left side */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[600px] rounded-full bg-[#ff4444]/6 dark:bg-[#ff4444]/10 blur-[140px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] rounded-full bg-[#f59e0b]/5 dark:bg-[#f59e0b]/8 blur-[100px]" />
        {/* Green/cool glow — right side */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[600px] rounded-full bg-[#10b981]/6 dark:bg-[#10b981]/10 blur-[140px]" />
        <div className="absolute bottom-1/3 right-[5%] w-[350px] h-[350px] rounded-full bg-[#4a6cf7]/5 dark:bg-[#4a6cf7]/8 blur-[100px]" />
      </div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={springTransition}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            This Isn&rsquo;t Corporate Training
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#a0aec0] max-w-2xl mx-auto">
            Traditional programs are built for the average. Ours are built for{" "}
            <span className="text-[#4a6cf7] font-medium">you</span>.
          </p>
        </motion.div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {/* LEFT — Traditional */}
          <motion.div
            variants={blurSlide}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ ...springTransition, delay: 0.15 }}
            className="relative rounded-2xl border border-[#ff4444]/20 bg-white/60 dark:bg-[#1a1f3a]/60 p-6 md:p-8 opacity-90"
          >
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 text-sm font-bold">
                ✕
              </span>
              Traditional Corporate Training
            </h3>
            <ul className="space-y-4">
              {traditionalItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={blurSlide}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ ...springTransition, delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                    <svg
                      className="h-3 w-3 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-slate-600 dark:text-[#a0aec0] text-sm md:text-base">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — DrLee.ai Mastermind */}
          <motion.div
            variants={blurSlide}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ ...springTransition, delay: 0.25 }}
            className="relative rounded-2xl border border-[#10b981]/30 bg-white dark:bg-[#1a1f3a] p-6 md:p-8 shadow-lg shadow-[#10b981]/5 dark:shadow-[#10b981]/10"
          >
            {/* Subtle glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#10b981]/10 via-transparent to-[#4a6cf7]/10 pointer-events-none" />

            <h3 className="relative text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 text-sm font-bold">
                ✓
              </span>
              The DrLee.ai Mastermind
            </h3>
            <ul className="relative space-y-4">
              {mastermindItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={blurSlide}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ ...springTransition, delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <svg
                      className="h-3 w-3 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-slate-900 dark:text-white text-sm md:text-base">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Summary callout */}
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <p className="text-base md:text-lg text-slate-600 dark:text-[#a0aec0] leading-relaxed">
            We use a{" "}
            <span className="text-[#4a6cf7] font-medium">
              data-driven approach
            </span>{" "}
            to curate a training plan that is{" "}
            <span className="text-[#4a6cf7] font-medium">
              specific and personalized
            </span>{" "}
            to you and your organization. Your assessment results don&rsquo;t
            just generate a report&mdash;they shape every minute of your
            Mastermind experience.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 1.05 }}
          className="text-center"
        >
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 rounded-full bg-[#4a6cf7] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#4a6cf7]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#4a6cf7]/30"
          >
            Start with Your Assessment
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
