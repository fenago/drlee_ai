"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blurSlide = (delay: number = 0) => ({
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { type: "spring" as const, bounce: 0.3, duration: 1.5, delay },
});

const pillars = [
  {
    number: "01",
    label: "DIAGNOSE",
    title: "AI Readiness Assessment",
    subtitle: "Understand Where You Stand",
    gradientFrom: "#4a6cf7",
    gradientTo: "#6b8cff",
    description:
      "Before you can lead an AI transformation, you need to know where you are. Our proprietary assessment analyzes your organization across multiple dimensions to give you a clear, honest picture of your AI readiness.",
    features: [
      "Analyze ~50 data points across leadership, culture, infrastructure, and skills",
      "Benchmark your readiness against industry peers",
      "Identify critical gaps and highest-impact opportunities",
      "Receive a personalized, actionable report within 24 hours",
    ],
  },
  {
    number: "02",
    label: "EDUCATE",
    title: "Personalized Mastermind & Training",
    subtitle: "Build Knowledge That Scales",
    gradientFrom: "#8b5cf6",
    gradientTo: "#a78bfa",
    description:
      "Generic AI training wastes time. Our education programs are built on your assessment results, ensuring every session addresses your specific gaps, goals, and industry context.",
    features: [
      "Theory and curriculum customized to your assessment results",
      "Industry-specific AI demos and real-world case studies",
      "Hands-on practice with tools relevant to your workflows",
      "Collaborative workflow development with your team",
    ],
  },
  {
    number: "03",
    label: "IMPLEMENT",
    title: "Custom Development, Training & Fractional CTO",
    subtitle: "Turn Strategy Into Reality",
    gradientFrom: "#10b981",
    gradientTo: "#34d399",
    description:
      "Move from planning to execution with our implementation services. From personalized training programs in any format\u2014virtual, in-person, or hybrid\u2014to workflow automation, custom AI solutions, and ongoing strategic guidance as a Fractional CTO, we help you build what matters.",
    features: [
      "Personalized corporate training (flexible modality)",
      "Workflow automation and custom AI development",
      "Fractional CTO services",
      "Continuous optimization and scaling",
    ],
  },
];

export default function ThreePillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-white dark:bg-[#0f1329] overflow-hidden"
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Three colored glow orbs matching each pillar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue orb — matches Diagnose pillar (left) */}
        <div className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#4a6cf7]/8 dark:bg-[#4a6cf7]/12 blur-[120px]" />
        {/* Purple orb — matches Educate pillar (center) */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/8 dark:bg-[#8b5cf6]/12 blur-[120px]" />
        {/* Green orb — matches Implement pillar (right) */}
        <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#10b981]/8 dark:bg-[#10b981]/12 blur-[120px]" />
      </div>

      {/* Floating accent orb — top-left corner */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#4a6cf7]/15 to-[#8b5cf6]/10 blur-3xl animate-pulse pointer-events-none" />

      {/* Floating accent orb — bottom-right corner */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-tl from-[#10b981]/15 to-[#8b5cf6]/10 blur-3xl animate-pulse pointer-events-none" />

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
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        {isInView && (
          <motion.div {...blurSlide(0)} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Our Approach:{" "}
              <span className="bg-gradient-to-r from-[#4a6cf7] via-[#8b5cf6] to-[#10b981] bg-clip-text text-transparent">
                Diagnose, Educate, Implement
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-[#a0aec0] max-w-2xl mx-auto leading-relaxed">
              We combine{" "}
              <span className="text-[#4a6cf7] font-medium">
                data-driven diagnostics
              </span>{" "}
              with personalized education to deliver AI strategies you can
              actually execute.
            </p>
          </motion.div>
        )}

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) =>
            isInView ? (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  type: "spring" as const,
                  bounce: 0.3,
                  duration: 1.5,
                  delay: i * 0.08,
                }}
                className="group relative bg-white/80 dark:bg-[#1a1f3a]/80 backdrop-blur-sm border border-slate-200/80 dark:border-[#2d3748] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent border */}
                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(to right, ${pillar.gradientFrom}, ${pillar.gradientTo})`,
                  }}
                />

                <div className="p-8">
                  {/* Number + Label */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-5xl font-black bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${pillar.gradientFrom}, ${pillar.gradientTo})`,
                      }}
                    >
                      {pillar.number}
                    </span>
                    <span
                      className="text-xs tracking-widest uppercase font-bold"
                      style={{ color: pillar.gradientFrom }}
                    >
                      {pillar.label}
                    </span>
                  </div>

                  {/* Title + Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: pillar.gradientFrom }}
                  >
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-[#a0aec0] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="#10b981"
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-slate-600 dark:text-[#a0aec0]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <div key={pillar.number} className="opacity-0" />
            )
          )}
        </div>
      </div>
    </section>
  );
}
