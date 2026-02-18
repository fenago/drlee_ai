"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const blurSlide = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const springTransition = {
  type: "spring" as const,
  bounce: 0.3,
  duration: 1.5,
};

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="consultation"
      className="relative py-20 md:py-28 bg-slate-50 dark:bg-[#0f1329] overflow-hidden"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent" />

      {/* === Rich Premium Background Layers === */}

      {/* Large Gradient Mesh (blue / purple / red atmosphere) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4a6cf7]/12 dark:bg-[#4a6cf7]/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/18 blur-[120px]" />
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-[#ef4444]/8 dark:bg-[#ef4444]/12 blur-[130px]" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#4a6cf7]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-tl from-[#8b5cf6]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#ff4444]/10 to-[#4a6cf7]/10 blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* === Content === */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={springTransition}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Stop Guessing.{" "}
            <span className="bg-gradient-to-r from-[#4a6cf7] to-[#8b5cf6] bg-clip-text text-transparent">
              Start Leading.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#a0aec0] mb-10">
            Get your personalized AI Readiness Report in 24 hours.
          </p>
        </motion.div>

        {/* Body paragraphs */}
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 0.15 }}
          className="max-w-2xl mx-auto mb-12 space-y-5 text-base md:text-lg leading-relaxed text-slate-600 dark:text-[#a0aec0]"
        >
          <p>
            The AI revolution isn&rsquo;t slowing down. Your competitors
            aren&rsquo;t waiting. Your board isn&rsquo;t getting less demanding.
            Your team needs guidance, not more confusion.
          </p>
          <p className="text-slate-900 dark:text-white font-medium">
            But you don&rsquo;t have to navigate this alone.
          </p>
          <p>
            Take the first step: complete the AI Readiness Assessment and get
            the{" "}
            <span className="text-[#4a6cf7] font-medium">clarity</span> you
            need to lead with{" "}
            <span className="text-[#4a6cf7] font-medium">confidence</span>.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 0.3 }}
          className="flex flex-col items-center gap-5"
        >
          {/* Primary CTA */}
          <Link
            href="/assessment"
            className="relative inline-flex items-center gap-2.5 rounded-xl bg-[#ff4444] px-10 md:px-14 py-4 md:py-5 text-lg md:text-xl font-semibold text-white shadow-lg shadow-[#ff4444]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#ff4444]/30"
          >
            {/* Subtle pulse overlay */}
            <span className="absolute inset-0 rounded-xl bg-[#ff4444] animate-pulse-subtle" />
            <span className="relative">Start Your Free Assessment Now</span>
            <svg
              className="relative h-5 w-5"
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

          {/* Secondary CTA */}
          <Link
            href="#consultation"
            className="text-slate-500 dark:text-[#a0aec0]/70 hover:text-slate-900 dark:hover:text-white hover:underline transition-colors text-sm"
          >
            Prefer to talk first? Schedule a consultation &rarr;
          </Link>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 0.45 }}
          className="mt-14 text-slate-400 dark:text-[#a0aec0]/40 text-xs tracking-wide"
        >
          Join leaders from JPMC, Cisco, Federal Government, and dozens of other
          organizations.
        </motion.p>
      </div>
    </section>
  );
}
