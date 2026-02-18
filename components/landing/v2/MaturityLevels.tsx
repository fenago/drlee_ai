"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface Level {
  level: number;
  name: string;
  description: string;
}

interface Tier {
  name: string;
  range: string;
  color: string;
  glowColor: string;
  borderColor: string;
  bgLight: string;
  bgDark: string;
  badgeLight: string;
  badgeDark: string;
  textColor: string;
  levels: Level[];
}

const tiers: Tier[] = [
  {
    name: "Visionary",
    range: "9–10",
    color: "#10b981",
    glowColor: "#10b981",
    borderColor: "border-emerald-400/30 dark:border-emerald-500/30",
    bgLight: "bg-emerald-50/80",
    bgDark: "dark:bg-emerald-950/30",
    badgeLight: "bg-emerald-100 text-emerald-700",
    badgeDark: "dark:bg-emerald-900/40 dark:text-emerald-400",
    textColor: "text-emerald-600 dark:text-emerald-400",
    levels: [
      {
        level: 9,
        name: "Innovating",
        description: "Pushing boundaries, developing novel applications",
      },
      {
        level: 10,
        name: "Transforming",
        description: "AI-native business model with self-improving systems",
      },
    ],
  },
  {
    name: "Strategic",
    range: "7–8",
    color: "#8b5cf6",
    glowColor: "#8b5cf6",
    borderColor: "border-purple-400/30 dark:border-purple-500/30",
    bgLight: "bg-purple-50/80",
    bgDark: "dark:bg-purple-950/30",
    badgeLight: "bg-purple-100 text-purple-700",
    badgeDark: "dark:bg-purple-900/40 dark:text-purple-400",
    textColor: "text-purple-600 dark:text-purple-400",
    levels: [
      {
        level: 7,
        name: "Scaling",
        description:
          "AI is core part of business strategy, org-wide adoption",
      },
      {
        level: 8,
        name: "Leading",
        description:
          "Industry-leading AI capabilities, competitive moats through AI",
      },
    ],
  },
  {
    name: "Operational",
    range: "4–6",
    color: "#4a6cf7",
    glowColor: "#4a6cf7",
    borderColor: "border-blue-400/30 dark:border-blue-500/30",
    bgLight: "bg-blue-50/80",
    bgDark: "dark:bg-blue-950/30",
    badgeLight: "bg-blue-100 text-blue-700",
    badgeDark: "dark:bg-blue-900/40 dark:text-blue-400",
    textColor: "text-blue-600 dark:text-blue-400",
    levels: [
      {
        level: 4,
        name: "Implementing",
        description:
          "Deploying AI in specific departments, formal budget allocated",
      },
      {
        level: 5,
        name: "Integrating",
        description:
          "AI embedded into multiple workflows, cross-functional initiatives",
      },
      {
        level: 6,
        name: "Optimizing",
        description:
          "Continuously improving AI systems, governance policies in place",
      },
    ],
  },
  {
    name: "Foundational",
    range: "0–3",
    color: "#f59e0b",
    glowColor: "#f59e0b",
    borderColor: "border-amber-400/30 dark:border-amber-500/30",
    bgLight: "bg-amber-50/80",
    bgDark: "dark:bg-amber-950/30",
    badgeLight: "bg-amber-100 text-amber-700",
    badgeDark: "dark:bg-amber-900/40 dark:text-amber-400",
    textColor: "text-amber-600 dark:text-amber-400",
    levels: [
      {
        level: 0,
        name: "Unaware",
        description: "No understanding of AI concepts or applications",
      },
      {
        level: 1,
        name: "Aware",
        description:
          "Basic awareness, discussed AI conceptually but no concrete steps",
      },
      {
        level: 2,
        name: "Exploring",
        description:
          "Actively researching, some experimenting with consumer AI tools",
      },
      {
        level: 3,
        name: "Experimenting",
        description:
          "Running initial AI pilots, small teams testing specific use cases",
      },
    ],
  },
];

const blurSlide = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const springTransition = {
  type: "spring" as const,
  bounce: 0.3,
  duration: 1.5,
};

function TierCard({
  tier,
  index,
  inView,
  showIndicator,
}: {
  tier: Tier;
  index: number;
  inView: boolean;
  showIndicator: boolean;
}) {
  return (
    <div className="relative">
      {/* "Most leaders land here" indicator between Foundational and Operational */}
      {showIndicator && (
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 0.6 }}
          className="relative flex items-center gap-3 mb-3 -mt-1"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff4444]/40 to-[#ff4444]/40" />
          <span className="flex-shrink-0 text-xs font-semibold text-[#ff4444] bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-full border border-red-200/50 dark:border-red-800/40">
            Most leaders land here
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff4444]/40 via-[#ff4444]/40 to-transparent" />
        </motion.div>
      )}

      <motion.div
        variants={blurSlide}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ ...springTransition, delay: 0.2 + index * 0.15 }}
        className={`relative rounded-2xl border ${tier.borderColor} ${tier.bgLight} ${tier.bgDark} backdrop-blur-sm p-5 md:p-6 shadow-sm`}
      >
        {/* Subtle glow inset */}
        <div
          className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${tier.color}08, transparent, ${tier.color}05)`,
          }}
        />

        <div className="relative">
          {/* Tier header */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full ${tier.badgeLight} ${tier.badgeDark}`}
            >
              {tier.name}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Levels {tier.range}
            </span>
          </div>

          {/* Level list */}
          <div className="space-y-2.5">
            {tier.levels.map((level) => (
              <div key={level.level} className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${tier.badgeLight} ${tier.badgeDark}`}
                >
                  {level.level}
                </span>
                <div className="min-w-0">
                  <span
                    className={`text-sm font-semibold ${tier.textColor}`}
                  >
                    {level.name}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-[#a0aec0] leading-relaxed mt-0.5">
                    {level.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function MaturityLevels() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white dark:bg-[#0f1329] overflow-hidden"
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Gradient mesh — vertical flow from amber to emerald */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Amber glow — bottom */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[500px] rounded-full bg-[#f59e0b]/8 dark:bg-[#f59e0b]/12 blur-[140px]" />
        {/* Blue glow — center */}
        <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4a6cf7]/8 dark:bg-[#4a6cf7]/12 blur-[120px]" />
        {/* Purple glow — upper center */}
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-[#8b5cf6]/8 dark:bg-[#8b5cf6]/12 blur-[120px]" />
        {/* Emerald glow — top */}
        <div className="absolute -top-20 right-1/3 w-[500px] h-[400px] rounded-full bg-[#10b981]/8 dark:bg-[#10b981]/12 blur-[130px]" />
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
            Where Do You Stand?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#a0aec0] max-w-3xl mx-auto">
            Our assessment measures your maturity across a proven{" "}
            <span className="text-[#4a6cf7] font-medium">
              11-level framework
            </span>
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-14">
          {/* Left — Individual Maturity */}
          <div>
            <motion.h3
              variants={blurSlide}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ ...springTransition, delay: 0.1 }}
              className="text-center mb-6"
            >
              <span className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#4a6cf7]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                Individual Maturity
              </span>
            </motion.h3>
            <div className="space-y-4">
              {tiers.map((tier, i) => (
                <TierCard
                  key={`individual-${tier.name}`}
                  tier={tier}
                  index={i}
                  inView={inView}
                  showIndicator={tier.name === "Operational"}
                />
              ))}
            </div>
          </div>

          {/* Right — Organizational Maturity */}
          <div>
            <motion.h3
              variants={blurSlide}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ ...springTransition, delay: 0.1 }}
              className="text-center mb-6"
            >
              <span className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#8b5cf6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                Organizational Maturity
              </span>
            </motion.h3>
            <div className="space-y-4">
              {tiers.map((tier, i) => (
                <TierCard
                  key={`org-${tier.name}`}
                  tier={tier}
                  index={i}
                  inView={inView}
                  showIndicator={tier.name === "Operational"}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <p className="text-base md:text-lg text-slate-600 dark:text-[#a0aec0] leading-relaxed">
            Take the assessment to discover exactly where you and your
            organization fall&mdash;and get a{" "}
            <span className="text-[#4a6cf7] font-medium">
              personalized roadmap
            </span>{" "}
            to advance.
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
            Discover Your Level
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

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent mt-20 md:mt-28" />
    </section>
  );
}
