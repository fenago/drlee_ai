"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Text scramble effect
function useScramble(text: string, isActive: boolean) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [text, isActive]);

  return displayText;
}

// Split text animation component
function SplitText({
  children,
  className = "",
  delay = 0
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroNew() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrambledBuilder = useScramble("BUILDER", mounted);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 dark:to-black/40 z-[1]" />

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center"
      >
        {/* Pre-headline - Executive Education Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Executive AI Education for Tech Leaders
          </span>
        </motion.div>

        {/* Main Headline - MasterClass Typography */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white"
        >
          <span className="block mb-2">
            <SplitText delay={0.5}>Stop Consuming.</SplitText>
          </span>
          <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-500 bg-clip-text text-transparent">
            <SplitText delay={0.8}>Start Building.</SplitText>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          The <span className="text-slate-900 dark:text-white font-semibold">only platform</span> teaching{" "}
          <span className="text-slate-900 dark:text-white font-semibold">founders</span> and{" "}
          <span className="text-slate-900 dark:text-white font-semibold">engineers</span>{" "}
          to build frontier AI from scratch. Own your technology. Stop renting from OpenAI.
        </motion.p>

        {/* Value Props - Technological Sovereignty */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-500 dark:text-white/50"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No API Dependency
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Own Your Model Weights
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Build Defensible Moats
          </span>
        </motion.div>

        {/* Dual CTA - For both avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="#intrapreneurs"
            className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              I Want to Advance My Career
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="#entrepreneurs"
            className="group relative px-8 py-4 rounded-full bg-transparent border-2 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-semibold text-lg transition-all duration-300 hover:border-slate-900 dark:hover:border-white hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              I Want to Build My Company
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Social Proof - Executive Ed Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="pt-8 border-t border-slate-200 dark:border-white/10"
        >
          <p className="text-sm text-slate-500 dark:text-white/40 mb-6 uppercase tracking-wider font-medium">
            Trusted by leaders from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {["Google", "Meta", "Amazon", "Microsoft", "Apple", "Netflix"].map((company) => (
              <span
                key={company}
                className="text-slate-400 dark:text-white/30 text-lg md:text-xl font-semibold tracking-tight hover:text-slate-600 dark:hover:text-white/50 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
