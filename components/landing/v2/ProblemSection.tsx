"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const blurSlide = (delay: number = 0) => ({
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { type: "spring" as const, bounce: 0.3, duration: 1.5, delay },
});

const cards = [
  {
    title: "Your Team Doesn\u2019t Know Where to Start",
    body: "Your staff is overwhelmed by the pace of AI change. They hear about new tools every week but have no framework for deciding what matters, what to adopt, or how to integrate it into their work.",
    accent: "#4a6cf7",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    title: "AI Feels Abstract\u2014Not Practical",
    body: "Your team doesn\u2019t see how AI applies to their specific roles and workflows. Generic demos and hype articles aren\u2019t translating into real productivity gains or competitive advantage.",
    accent: "#8b5cf6",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    title: "You\u2019re Stuck in Pilot Purgatory",
    body: "You\u2019ve launched AI pilots that showed promise but never scaled. Projects stall after the proof-of-concept phase because there\u2019s no clear path from experiment to enterprise-wide adoption.",
    accent: "#ff4444",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
  },
  {
    title: "Resources Are Being Wasted",
    body: "Teams are buying AI tools without coordination, creating redundant subscriptions, shadow IT risks, and zero measurable ROI. Budget is disappearing into tools nobody fully uses.",
    accent: "#10b981",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "You Don\u2019t Know How to Empower Your People",
    body: "You want to enable your team to use AI effectively, but you lack a structured approach to upskilling. One-size-fits-all training doesn\u2019t address the unique needs of different roles and departments.",
    accent: "#f59e0b",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    title: "The Board is Asking for Your AI Strategy",
    body: "Leadership wants answers about your AI roadmap, and you need more than buzzwords. You need a defensible, data-backed strategy that shows clear timelines, priorities, and expected outcomes.",
    accent: "#ec4899",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#0a0e27] overflow-hidden"
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Gradient mesh — warm red/amber tones for pain points */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ff4444]/8 dark:bg-[#ff4444]/12 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#f59e0b]/8 dark:bg-[#f59e0b]/12 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ec4899]/5 dark:bg-[#ec4899]/8 blur-[140px]" />
      </div>

      {/* Corner glow orb — top-left (blue/red blend) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#4a6cf7]/15 to-[#ff4444]/10 blur-3xl animate-pulse pointer-events-none" />

      {/* Corner glow orb — bottom-right (amber/purple blend) */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-tl from-[#f59e0b]/15 to-[#8b5cf6]/10 blur-3xl animate-pulse pointer-events-none" />

      {/* Corner glow orb — top-right (red accent) */}
      <div className="absolute -top-10 right-[15%] w-48 h-48 rounded-full bg-[#ff4444]/10 dark:bg-[#ff4444]/15 blur-[80px] pointer-events-none" />

      {/* Corner glow orb — bottom-left (amber accent) */}
      <div className="absolute bottom-[10%] -left-10 w-48 h-48 rounded-full bg-[#f59e0b]/8 dark:bg-[#f59e0b]/12 blur-[80px] pointer-events-none" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(74,108,247,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
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
              Sound Familiar?
            </h2>
            <p className="text-lg text-slate-600 dark:text-[#a0aec0] max-w-2xl mx-auto">
              These are the challenges we hear from{" "}
              <span className="text-[#4a6cf7] font-medium">
                business leaders
              </span>{" "}
              every single day.
            </p>
          </motion.div>
        )}

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) =>
            isInView ? (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  type: "spring" as const,
                  bounce: 0.3,
                  duration: 1.5,
                  delay: i * 0.08,
                }}
                className="group bg-white/80 dark:bg-[#1a1f3a]/80 backdrop-blur-sm border border-slate-200/80 dark:border-[#2d3748] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${card.accent}15`,
                    color: card.accent,
                  }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-slate-600 dark:text-[#a0aec0] leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ) : (
              <div key={card.title} className="opacity-0" />
            )
          )}
        </div>

        {/* Closing statement */}
        {isInView && (
          <motion.div {...blurSlide(0.56)} className="text-center">
            <p className="text-lg md:text-xl italic text-slate-600 dark:text-[#a0aec0] max-w-3xl mx-auto mb-8 leading-relaxed">
              If any of this sounds familiar, you need more than another AI
              tool. You need{" "}
              <span className="text-[#4a6cf7] font-medium not-italic">
                clarity
              </span>
              . You need a{" "}
              <span className="text-[#4a6cf7] font-medium not-italic">
                roadmap
              </span>
              . You need to start with a{" "}
              <span className="text-[#4a6cf7] font-medium not-italic">
                diagnosis
              </span>
              .
            </p>

            <Link
              href="/assessment"
              className="inline-flex items-center px-8 py-4 bg-[#ff4444] text-white font-semibold rounded-xl shadow-lg shadow-[#ff4444]/25 hover:scale-105 transition-transform duration-300 text-lg"
            >
              Get Your AI Readiness Assessment
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
