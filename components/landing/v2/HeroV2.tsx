"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const blurSlide = (delay: number = 0) => ({
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { type: "spring" as const, bounce: 0.3, duration: 1.5, delay },
});

const trustLogos = ["JPMC", "Cisco", "Federal Government", "Local Government"];

export default function HeroV2() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0e27]"
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Base radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4a6cf7]/5 via-transparent to-transparent dark:from-[#4a6cf7]/20 dark:via-transparent dark:to-transparent pointer-events-none" />

      {/* Gradient mesh — multiple overlapping radial glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4a6cf7]/10 dark:bg-[#4a6cf7]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#10b981]/5 dark:bg-[#10b981]/8 blur-[140px]" />
      </div>

      {/* Large floating glow orb — blue, top-left */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#4a6cf7]/20 to-[#6b8cff]/10 blur-3xl animate-pulse pointer-events-none" />

      {/* Large floating glow orb — purple, bottom-right */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-tl from-[#8b5cf6]/20 to-[#a78bfa]/10 blur-3xl animate-pulse pointer-events-none" />

      {/* Small accent orb — warm, center-right */}
      <div className="absolute top-1/3 right-[10%] w-48 h-48 rounded-full bg-[#ff4444]/8 dark:bg-[#ff4444]/10 blur-[80px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        {/* Eyebrow */}
        {isInView && (
          <motion.p
            {...blurSlide(0)}
            className="text-xs tracking-widest uppercase text-[#4a6cf7] font-semibold mb-6"
          >
            AI Strategy &amp; Implementation for Business Leaders
          </motion.p>
        )}

        {/* H1 */}
        {isInView && (
          <motion.h1
            {...blurSlide(0.08)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8"
          >
            Your Team is Using AI.
            <br />
            <span className="bg-gradient-to-r from-[#4a6cf7] to-[#8b5cf6] bg-clip-text text-transparent">
              Do You Have a Strategy?
            </span>
          </motion.h1>
        )}

        {/* Subheadline */}
        {isInView && (
          <motion.p
            {...blurSlide(0.16)}
            className="text-lg md:text-xl text-slate-600 dark:text-[#a0aec0] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Stop guessing. Stop wasting resources on AI pilots that go nowhere.
            Get a{" "}
            <span className="text-[#4a6cf7] font-medium">
              data-driven AI Readiness Assessment
            </span>{" "}
            that shows you exactly where to start&mdash;and a{" "}
            <span className="text-[#4a6cf7] font-medium">
              personalized roadmap
            </span>{" "}
            to lead your organization through transformation with confidence.
          </motion.p>
        )}

        {/* CTAs */}
        {isInView && (
          <motion.div
            {...blurSlide(0.24)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/assessment"
              className="inline-flex items-center px-8 py-4 bg-[#ff4444] text-white font-semibold rounded-xl shadow-lg shadow-[#ff4444]/25 hover:scale-105 transition-transform duration-300 text-lg"
            >
              Start Your Free AI Readiness Assessment
            </Link>
            <Link
              href="/consultation"
              className="text-slate-600 dark:text-[#a0aec0] hover:text-[#4a6cf7] dark:hover:text-[#4a6cf7] transition-colors duration-300 font-medium"
            >
              Or schedule a 1-on-1 consultation &rarr;
            </Link>
          </motion.div>
        )}

        {/* Trust logos */}
        {isInView && (
          <motion.div {...blurSlide(0.32)}>
            <p className="text-sm text-slate-400 dark:text-[#a0aec0]/60 uppercase tracking-wider mb-4">
              Trusted by leaders from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {trustLogos.map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    type: "spring" as const,
                    bounce: 0.3,
                    duration: 1.5,
                    delay: 0.32 + i * 0.08,
                  }}
                  className="text-sm md:text-base font-semibold text-slate-400 dark:text-[#a0aec0]/60 grayscale"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-[#2d3748] flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
                className="w-1.5 h-1.5 rounded-full bg-[#4a6cf7]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
