"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "You've forgotten how to build",
    description: "You used to ship code every day. Now you watch tutorials, prompt ChatGPT, and wonder where your builder identity went.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "API dependency isn't a moat",
    description: "Your competitors have access to the same OpenAI endpoints. When the pricing changes or the service goes down, so does your business.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Surface knowledge isn't enough",
    description: "Knowing how to use LangChain doesn't mean you understand transformers. When things break—and they will—you're helpless.",
  },
];

export default function ProblemNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            The Hard Truth
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            The AI revolution is leaving
            <br />
            <span className="text-red-500">builders behind</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
            Everyone&apos;s consuming AI. Few are building it. That&apos;s why the gap between
            API users and AI architects is becoming a chasm.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10">
            <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              &quot;What if you could understand AI so deeply
              <br />
              that you could <span className="text-blue-600 dark:text-blue-400">build it yourself?</span>&quot;
            </p>
            <p className="text-slate-500 dark:text-white/50">
              That&apos;s not a rhetorical question. That&apos;s what we teach.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
