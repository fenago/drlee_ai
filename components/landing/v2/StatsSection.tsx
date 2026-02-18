"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Leaders Assessed",
    description: "Across 15+ industries",
  },
  {
    number: "50+",
    label: "Data Points Analyzed",
    description: "Per assessment for deep insights",
  },
  {
    number: "15+",
    label: "Industries Covered",
    description: "Healthcare, Finance, Manufacturing, Tech, and more",
  },
  {
    number: "24 hrs",
    label: "Report Delivery",
    description: "Comprehensive, actionable roadmap",
  },
];

const blurSlide = {
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
};

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0a0e27] py-20 md:py-28">
      {/* === Background layers === */}

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(74,108,247,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gradient mesh — blue top-right, purple bottom-left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] rounded-full bg-[#4a6cf7]/10 dark:bg-[#4a6cf7]/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/15 blur-[100px]" />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating glow orb — top-left accent */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#4a6cf7]/20 to-transparent blur-3xl pointer-events-none" />

      {/* === Content === */}
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={blurSlide.initial}
          animate={isInView ? blurSlide.animate : blurSlide.initial}
          transition={blurSlide.transition}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Grounded in{" "}
            <span className="text-[#4a6cf7] font-medium">
              Real-World Experience
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-[#a0aec0]">
            Our approach is built on years of working with leaders navigating AI
            transformation.
          </p>
        </motion.div>

        {/* Stats Grid — 2x2 on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative bg-white dark:bg-[#1a1f3a] border border-slate-200/80 dark:border-[#2d3748] rounded-2xl p-6 md:p-8 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              initial={blurSlide.initial}
              animate={isInView ? blurSlide.animate : blurSlide.initial}
              transition={{
                ...blurSlide.transition,
                delay: i * 0.08,
              }}
            >
              {/* Subtle inner glow behind each stat number */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#4a6cf7]/5 dark:bg-[#4a6cf7]/10 blur-2xl" />
              </div>
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#4a6cf7] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600 dark:text-[#a0aec0]">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Context */}
        <motion.p
          className="text-center text-slate-600 dark:text-[#a0aec0] max-w-2xl mx-auto text-base md:text-lg"
          initial={blurSlide.initial}
          animate={isInView ? blurSlide.animate : blurSlide.initial}
          transition={{ ...blurSlide.transition, delay: 0.4 }}
        >
          Unlike generic surveys or slow consultants, our{" "}
          <span className="text-[#4a6cf7] font-medium">
            AI-powered assessment
          </span>{" "}
          delivers personalized insights at scale.
        </motion.p>
      </div>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent mt-20 md:mt-28" />
    </section>
  );
}
