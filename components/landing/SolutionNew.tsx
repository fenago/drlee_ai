"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "First Principles",
    description: "We don't teach you to use libraries. We teach you to understand the math, the architecture, the intuition. So you can build anything.",
    color: "blue",
  },
  {
    number: "02",
    title: "Build From Scratch",
    description: "Every course includes building the system from zero. Not tutorials. Not copy-paste. Real engineering that stays with you forever.",
    color: "violet",
  },
  {
    number: "03",
    title: "The Feynman Method",
    description: "If you can't build it, you don't understand it. Our courses are designed around this truth. Understanding comes from doing.",
    color: "emerald",
  },
];

export default function SolutionNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Executive education meets
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-500 bg-clip-text text-transparent">
              builder culture
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
            Inspired by MasterClass production quality. Grounded in MIT/Stanford rigor.
            Designed for people who ship.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="relative"
            >
              <div className="relative p-8 h-full">
                <div
                  className={`text-7xl font-black mb-4 bg-gradient-to-b ${
                    principle.color === "blue"
                      ? "from-blue-500/20 to-transparent"
                      : principle.color === "violet"
                        ? "from-violet-500/20 to-transparent"
                        : "from-emerald-500/20 to-transparent"
                  } bg-clip-text text-transparent`}
                >
                  {principle.number}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10"
        >
          <div className="grid md:grid-cols-2">
            {/* Others */}
            <div className="p-8 md:p-12 bg-slate-100 dark:bg-slate-900/50">
              <h3 className="text-xl font-bold text-slate-500 dark:text-white/50 mb-6">
                What others teach
              </h3>
              <ul className="space-y-4">
                {[
                  "Use LangChain to call APIs",
                  "Copy-paste from tutorials",
                  "Prompt engineering tricks",
                  "Surface-level integrations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 dark:text-white/50">
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* DrLee.ai */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-emerald-500">
              <h3 className="text-xl font-bold text-white mb-6">
                What we teach
              </h3>
              <ul className="space-y-4">
                {[
                  "Build transformers from scratch",
                  "Understand attention mechanisms deeply",
                  "Train and deploy your own models",
                  "Create defensible technical moats",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
