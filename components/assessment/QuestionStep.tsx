"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import VoiceInput from "./VoiceInput";
import { AssessmentQuestion } from "@/lib/assessment-questions";

interface QuestionStepProps {
  question: AssessmentQuestion;
  answer: string;
  onAnswer: (value: string) => void;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function QuestionStep({
  question,
  answer,
  onAnswer,
  questionNumber,
  totalQuestions,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: QuestionStepProps) {
  const answerRef = useRef(answer);
  useEffect(() => {
    answerRef.current = answer;
  }, [answer]);

  const handleVoiceTranscript = useCallback((text: string) => {
    const current = answerRef.current;
    onAnswer(current ? `${current} ${text}` : text);
  }, [onAnswer]);

  const canProceed = answer.trim().length > 10;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-500 dark:text-white/50 mb-2">
          <span>
            Question {questionNumber} of {totalQuestions}
          </span>
          <span>
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-500"
            initial={{
              width: `${((questionNumber - 1) / totalQuestions) * 100}%`,
            }}
            animate={{
              width: `${(questionNumber / totalQuestions) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Category badge */}
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium uppercase tracking-wider">
          {question.category}
        </span>
      </div>

      {/* Question */}
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
          {question.questionText}
        </h3>
        {question.subtitle && (
          <p className="mt-2 text-slate-500 dark:text-white/50 italic">
            {question.subtitle}
          </p>
        )}
      </div>

      {/* Text input + voice */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <textarea
            value={answer}
            onChange={(e) => onAnswer(e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors resize-none text-base"
          />
        </div>

        {/* Voice input below textarea */}
        <div className="mt-3 flex justify-center">
          <VoiceInput onTranscript={handleVoiceTranscript} />
        </div>

        {/* Probes */}
        {question.probes && question.probes.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {question.probes.map((probe, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-white/50 text-xs"
              >
                {probe}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center max-w-2xl mx-auto">
        {!isFirst ? (
          <button
            onClick={onPrev}
            className="text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/70 text-sm flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
            canProceed
              ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
              : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
          }`}
        >
          {isLast ? "Review & Submit" : "Next"}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
