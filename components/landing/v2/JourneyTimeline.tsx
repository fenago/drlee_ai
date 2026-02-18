"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    headline: "Complete Your AI Readiness Assessment",
    duration: "15 minutes",
    durationColor: "bg-[#4a6cf7]/10 text-[#4a6cf7]",
    costLabel: "Free",
    costColor: "bg-[#10b981]/10 text-[#10b981]",
    description:
      "Answer questions about your AI maturity, organizational readiness, pain points, and high-value workflows. Use voice, multiple choice, or text input.",
    bullets: [
      "AI analyzes ~50 data points from your responses",
      "Scrape your company website for business context",
      "Analyze your LinkedIn profile for leadership insights",
    ],
    deliverable: "Comprehensive AI Readiness Report",
    cta: { text: "Start Your Assessment", href: "/assessment" },
    accentBorder: "border-[#4a6cf7]",
  },
  {
    number: "02",
    headline: "Receive Your Personalized Roadmap",
    duration: "24 hours",
    durationColor: "bg-[#4a6cf7]/10 text-[#4a6cf7]",
    costLabel: "Included",
    costColor: "bg-[#10b981]/10 text-[#10b981]",
    description:
      "Get a data-driven analysis of your AI readiness with specific, actionable recommendations.",
    bullets: [
      "Personal & Org AI Maturity Scores (0-10)",
      "Pain point analysis with AI solution mapping",
      "Prioritized workflow recommendations",
      "12-18 month phased implementation roadmap",
      "Industry benchmarking against peers",
    ],
    deliverable: "AI Readiness Report + Implementation Roadmap",
    cta: null,
    accentBorder: "border-[#6d5cf7]",
  },
  {
    number: "03",
    headline: "Join a Personalized Mastermind Class",
    duration: "4 hours (small group)",
    durationColor: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
    costLabel: null,
    costColor: null,
    description:
      "A customized, intensive workshop tailored to your assessment results.",
    bullets: [
      "Hour 1: Theory (customized to your maturity level)",
      "Hour 2: Demos (industry-specific use cases)",
      "Hour 3: Hands-on practice (build something with AI)",
      "Hour 4: Workflow development (your actual business processes)",
    ],
    deliverable: "Enhanced AI Roadmap + Working AI Prototype",
    cta: null,
    accentBorder: "border-[#8b5cf6]",
  },
  {
    number: "04",
    headline: "Scale Knowledge Across Your Organization",
    duration: "Customized program",
    durationColor: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
    costLabel: null,
    costColor: null,
    description:
      "We design and deliver corporate training programs that meet your team where they are.",
    bullets: [
      "Executive AI strategy workshops",
      "Technical team training",
      "Department-specific enablement",
      "Change management",
    ],
    deliverable: "Organization-Wide AI Competency + Adoption Framework",
    cta: null,
    accentBorder: "border-[#a855f7]",
  },
  {
    number: "05",
    headline: "Build Your AI Solutions",
    duration: "Project-based",
    durationColor: "bg-[#10b981]/10 text-[#10b981]",
    costLabel: null,
    costColor: null,
    description:
      "Turn your roadmap into reality. Custom AI solutions, workflow automation.",
    bullets: [
      "Workflow automation",
      "Custom AI development",
      "Data infrastructure",
      "Production deployment",
    ],
    deliverable: "Production AI Systems Delivering Measurable ROI",
    cta: null,
    accentBorder: "border-[#10b981]",
  },
  {
    number: "06",
    headline: "Fractional CTO & Strategic Partnership",
    duration: "Ongoing",
    durationColor: "bg-[#10b981]/10 text-[#10b981]",
    costLabel: null,
    costColor: null,
    description: "Continuous strategic technical leadership.",
    bullets: [
      "Architecture decisions",
      "Team mentorship",
      "Tech stack evaluation",
      "Board-level reporting",
    ],
    deliverable: "Continuous AI Innovation + Strategic Technical Leadership",
    cta: null,
    accentBorder: "border-[#10b981]",
  },
];

const blurSlide = {
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
};

export default function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0f1329] py-20 md:py-28">
      {/* === Background layers === */}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient mesh — blue top, purple mid, green bottom (journey progression) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#4a6cf7]/10 dark:bg-[#4a6cf7]/15 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/8 dark:bg-[#8b5cf6]/12 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#10b981]/8 dark:bg-[#10b981]/12 blur-[120px]" />
      </div>

      {/* Green glow orb at bottom — journey/progress metaphor */}
      <div className="absolute -bottom-32 right-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-[#10b981]/20 to-transparent blur-3xl pointer-events-none" />

      {/* Floating glow orb — top-right accent */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#4a6cf7]/20 to-transparent blur-3xl pointer-events-none" />

      {/* === Content === */}
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={blurSlide.initial}
          animate={isInView ? blurSlide.animate : blurSlide.initial}
          transition={blurSlide.transition}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            From Assessment to Implementation:{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#4a6cf7] to-[#8b5cf6] bg-clip-text text-transparent">
              Your Path Forward
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-[#a0aec0] max-w-2xl mx-auto">
            A clear, proven process to move from confusion to confident AI
            leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#4a6cf7] via-[#8b5cf6] to-[#10b981]" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative pl-16 md:pl-20"
                initial={blurSlide.initial}
                animate={isInView ? blurSlide.animate : blurSlide.initial}
                transition={{
                  ...blurSlide.transition,
                  delay: i * 0.08,
                }}
              >
                {/* Step circle */}
                <div
                  className={`absolute left-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-white dark:bg-[#1a1f3a] border-2 ${step.accentBorder} flex items-center justify-center shadow-sm`}
                >
                  <span className="text-[#4a6cf7] font-bold text-sm md:text-base">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-slate-50 dark:bg-[#1a1f3a] border border-slate-200/80 dark:border-[#2d3748] rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  {/* Headline */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.headline}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${step.durationColor}`}
                    >
                      {step.duration}
                    </span>
                    {step.costLabel && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${step.costColor}`}
                      >
                        {step.costLabel}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-[#a0aec0] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-[#4a6cf7] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12.75L11.25 15 15 9.75"
                          />
                        </svg>
                        <span className="text-slate-500 dark:text-[#a0aec0]/80">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Deliverable */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60 dark:border-[#2d3748]">
                    <span className="text-[#10b981] text-sm font-medium">
                      Deliverable:
                    </span>
                    <span className="text-slate-600 dark:text-[#a0aec0] text-sm">
                      {step.deliverable}
                    </span>
                  </div>

                  {/* CTA */}
                  {step.cta && (
                    <div className="mt-4">
                      <Link
                        href={step.cta.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff4444] text-white font-semibold text-sm hover:bg-[#ff5555] hover:scale-105 transition-all shadow-lg shadow-[#ff4444]/25"
                      >
                        {step.cta.text}
                        <svg
                          className="w-4 h-4"
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
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.div
          className="text-center mt-16"
          initial={blurSlide.initial}
          animate={isInView ? blurSlide.animate : blurSlide.initial}
          transition={{ ...blurSlide.transition, delay: 0.6 }}
        >
          <p className="text-slate-600 dark:text-[#a0aec0] text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            Most organizations start with Step 1 and progress based on their
            needs.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff4444] text-white font-semibold rounded-lg hover:bg-[#ff5555] hover:scale-105 transition-all shadow-lg shadow-[#ff4444]/25"
          >
            Start with Your Free Assessment
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
