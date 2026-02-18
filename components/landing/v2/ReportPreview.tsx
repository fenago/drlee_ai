"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const reportComponents = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Personal AI Maturity Score (0-10)",
    description:
      "Understand your own readiness to lead AI initiatives, benchmarked against peers in your role and industry.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
    title: "Organizational AI Maturity Score (0-10)",
    description:
      "A breakdown of your company's readiness across data infrastructure, talent, culture, and governance.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
    title: "Pain Point Analysis",
    description:
      "Your challenges, categorized and prioritized, with AI-driven recommendations for how to address each one.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
    title: "Prioritized Workflow Recommendations",
    description:
      "A ranked list of your workflows with feasibility assessment, impact projection, and recommended implementation approach.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
    ),
    title: "12-18 Month AI Implementation Roadmap",
    description:
      'A phased plan with "Quick Wins" (0-3 months), "Strategic Initiatives" (3-9 months), and "Transformational Projects" (9-18 months).',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
    title: "Industry Benchmarking",
    description:
      "See how your maturity scores compare to peers in your industry and company size.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Next Steps & Personalized Recommendations",
    description:
      "Clear guidance on how to move from insight to action, including tailored recommendations for next steps.",
  },
];

const progressBars = [
  { label: "Pain Severity", percent: 75, color: "#ff4444" },
  { label: "Business Readiness", percent: 60, color: "#4a6cf7" },
  { label: "Workflow Opportunity", percent: 85, color: "#10b981" },
];

const blurSlide = {
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
};

export default function ReportPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0a0e27] py-20 md:py-28">
      {/* === Background layers === */}

      {/* Gradient mesh — blue/purple/green matching the 3 report scores */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4a6cf7]/10 dark:bg-[#4a6cf7]/15 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] rounded-full bg-[#10b981]/8 dark:bg-[#10b981]/12 blur-[110px]" />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(74,108,247,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating glow behind the report mockup card area (right side) */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-[#4a6cf7]/15 via-[#8b5cf6]/10 to-[#10b981]/10 blur-3xl pointer-events-none" />

      {/* === Content === */}
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={blurSlide.initial}
          animate={isInView ? blurSlide.animate : blurSlide.initial}
          transition={blurSlide.transition}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Your AI Readiness Report:{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#4a6cf7] to-[#8b5cf6] bg-clip-text text-transparent">
              A Strategic Diagnostic
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-[#a0aec0] max-w-2xl mx-auto">
            A comprehensive, data-driven analysis delivered to your inbox within
            24 hours.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left column — 7 report components */}
          <div className="space-y-3">
            {reportComponents.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-4 p-4 rounded-xl bg-white dark:bg-[#1a1f3a]/50 border border-slate-200/80 dark:border-[#2d3748]/50 hover:border-[#4a6cf7]/40 dark:hover:border-[#4a6cf7]/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                initial={blurSlide.initial}
                animate={isInView ? blurSlide.animate : blurSlide.initial}
                transition={{
                  ...blurSlide.transition,
                  delay: 0.1 + i * 0.08,
                }}
              >
                {/* Icon circle */}
                <div className="w-10 h-10 rounded-full bg-[#4a6cf7]/10 flex items-center justify-center flex-shrink-0 text-[#4a6cf7]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-[#a0aec0] text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column — Report mockup card */}
          <motion.div
            className="relative"
            initial={blurSlide.initial}
            animate={isInView ? blurSlide.animate : blurSlide.initial}
            transition={{ ...blurSlide.transition, delay: 0.3 }}
          >
            {/* Glow aura behind the card for premium floating feel */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#4a6cf7]/10 via-[#8b5cf6]/5 to-[#10b981]/10 blur-2xl pointer-events-none" />

            <div className="relative bg-white dark:bg-[#1a1f3a] border border-slate-200/80 dark:border-[#2d3748] rounded-2xl p-8 shadow-2xl">
              {/* Report header */}
              <div className="border-b border-slate-200/60 dark:border-[#2d3748] pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4a6cf7] to-[#8b5cf6] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DL</span>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-sm">
                      DrLee.ai
                    </p>
                    <p className="text-slate-500 dark:text-[#a0aec0] text-xs">
                      AI Readiness Report
                    </p>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-[#a0aec0] text-xs">
                  Prepared for:{" "}
                  <span className="text-slate-900 dark:text-white font-medium">
                    [Your Name]
                  </span>
                </p>
                <p className="text-slate-400 dark:text-[#a0aec0]/70 text-xs">
                  Confidential
                </p>
              </div>

              {/* Score boxes */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-[#0a0e27]/50">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#4a6cf7] to-[#8b5cf6] bg-clip-text text-transparent">
                    7/10
                  </p>
                  <p className="text-slate-500 dark:text-[#a0aec0] text-xs mt-1">
                    Personal Maturity
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-[#0a0e27]/50">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                    4/10
                  </p>
                  <p className="text-slate-500 dark:text-[#a0aec0] text-xs mt-1">
                    Org Maturity
                  </p>
                </div>
              </div>

              {/* Animated progress bars */}
              <div className="space-y-3">
                {progressBars.map((bar, i) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500 dark:text-[#a0aec0]">
                        {bar.label}
                      </span>
                      <span className="text-slate-900 dark:text-white font-medium">
                        {bar.percent}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 dark:bg-[#0a0e27]/50 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: bar.color }}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${bar.percent}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: 0.8 + i * 0.15,
                          ease: "easeOut" as const,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FREE floating badge */}
            <motion.div
              className="absolute -top-3 -right-3 px-4 py-1.5 rounded-full bg-[#10b981] text-white text-xs font-bold shadow-lg shadow-[#10b981]/30 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                type: "spring" as const,
                bounce: 0.4,
                duration: 1,
                delay: 1,
              }}
            >
              FREE
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={blurSlide.initial}
          animate={isInView ? blurSlide.animate : blurSlide.initial}
          transition={{ ...blurSlide.transition, delay: 0.6 }}
        >
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff4444] text-white font-semibold rounded-lg hover:bg-[#ff5555] hover:scale-105 transition-all shadow-lg shadow-[#ff4444]/25"
          >
            Get Your Free Report Now
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
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent mt-20 md:mt-28" />
    </section>
  );
}
