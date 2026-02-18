"use client";

import { motion } from "framer-motion";

interface AdvisorWelcomeProps {
  onStart: () => void;
}

const stats = [
  { value: "90%", label: "of leaders overestimate their AI readiness" },
  { value: "73%", label: "of organizations lack a formal AI strategy" },
  { value: "3x", label: "faster — the pace AI-ready competitors move" },
];

export default function AdvisorWelcome({ onStart }: AdvisorWelcomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto"
    >
      {/* AI Advisor Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-8 shadow-lg shadow-indigo-500/20"
      >
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6"
      >
        AI Reality Gap Assessment
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
      >
        Discover Your{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          AI Reality Gap
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-slate-600 dark:text-white/60 max-w-2xl mx-auto mb-10"
      >
        A 12-minute assessment that reveals exactly where you stand with AI —
        personally and organizationally — and gives you a specific action plan to
        close the gap.
      </motion.p>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          >
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {stat.value}
            </span>
            <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300"
        >
          Start My Assessment
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
        </button>
        <p className="mt-4 text-sm text-slate-400 dark:text-white/30">
          Free. Takes ~12 minutes. Get your personalized report by email.
        </p>
      </motion.div>
    </motion.div>
  );
}
