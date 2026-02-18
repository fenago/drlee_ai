"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  phaseName: string;
}

export default function ProgressBar({
  currentQuestion,
  totalQuestions,
  phaseName,
}: ProgressBarProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
          {phaseName}
        </span>
        <span className="text-slate-500 dark:text-white/50">
          Question {currentQuestion} of {totalQuestions}
        </span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-500"
          initial={{ width: `${((currentQuestion - 1) / totalQuestions) * 100}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
