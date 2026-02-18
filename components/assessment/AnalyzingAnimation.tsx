"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const analysisPhases = [
  { label: "Analyzing your personal AI maturity...", icon: "user" },
  { label: "Mapping organizational readiness...", icon: "building" },
  { label: "Identifying pain points and opportunities...", icon: "alert" },
  { label: "Evaluating business context...", icon: "briefcase" },
  { label: "Mapping workflow opportunities...", icon: "workflow" },
  { label: "Generating your personalized Reality Gap Report...", icon: "report" },
];

export default function AnalyzingAnimation() {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => {
        if (prev < analysisPhases.length - 1) return prev + 1;
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-20 max-w-lg mx-auto"
    >
      {/* Pulsing brain icon */}
      <div className="relative inline-flex items-center justify-center mb-10">
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-indigo-500/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-indigo-500/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
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
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
        Analyzing Your Responses
      </h3>

      {/* Phase progress list */}
      <div className="space-y-3 text-left">
        {analysisPhases.map((phase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: i <= currentPhase ? 1 : 0.3,
              x: 0,
            }}
            transition={{ delay: i * 0.15, duration: 0.3 }}
            className="flex items-center gap-3"
          >
            {i < currentPhase ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
            ) : i === currentPhase ? (
              <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0" />
            )}
            <span
              className={`text-sm ${
                i <= currentPhase
                  ? "text-slate-700 dark:text-white/80"
                  : "text-slate-400 dark:text-white/30"
              }`}
            >
              {phase.label}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-400 dark:text-white/40">
        This takes about 15-30 seconds
      </p>
    </motion.div>
  );
}
