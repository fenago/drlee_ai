"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import VoiceInput from "./VoiceInput";
import ProgressBar from "./ProgressBar";
import { UnifiedQuestion } from "@/lib/assessment-questions";

interface QuestionStepProps {
  question: UnifiedQuestion;
  answer: string;
  onAnswer: (value: string) => void;
  questionNumber: number;
  totalQuestions: number;
  phaseName?: string;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  respondentName?: string;
}

export default function QuestionStep({
  question,
  answer,
  onAnswer,
  questionNumber,
  totalQuestions,
  phaseName,
  onNext,
  onPrev,
  isFirst,
  isLast,
  respondentName,
}: QuestionStepProps) {
  const answerRef = useRef(answer);
  useEffect(() => {
    answerRef.current = answer;
  }, [answer]);

  const handleVoiceTranscript = useCallback(
    (text: string) => {
      const current = answerRef.current;
      onAnswer(current ? `${current} ${text}` : text);
    },
    [onAnswer]
  );

  // Interpolate {name} in question text
  const questionText = question.questionText.replace(
    /\{name\}/g,
    respondentName || "there"
  );

  // Render based on question type
  if (question.type === "single-choice") {
    return (
      <SingleChoiceQuestion
        question={question}
        questionText={questionText}
        answer={answer}
        onAnswer={onAnswer}
        onNext={onNext}
        onPrev={onPrev}
        isFirst={isFirst}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        phaseName={phaseName}
      />
    );
  }

  if (question.type === "multi-choice") {
    return (
      <MultiChoiceQuestion
        question={question}
        questionText={questionText}
        answer={answer}
        onAnswer={onAnswer}
        onNext={onNext}
        onPrev={onPrev}
        isFirst={isFirst}
        isLast={isLast}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        phaseName={phaseName}
      />
    );
  }

  // Text question (default)
  const canProceed = answer.trim().length > 10;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <ProgressBar
        currentQuestion={questionNumber}
        totalQuestions={totalQuestions}
        phaseName={phaseName}
      />

      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
          {questionText}
        </h3>
        {question.subtitle && (
          <p className="mt-2 text-slate-500 dark:text-white/50 italic">
            {question.subtitle}
          </p>
        )}
      </div>

      <div className="max-w-2xl mx-auto">
        <textarea
          value={answer}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={question.placeholder}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors resize-none text-base"
        />

        <div className="mt-3 flex justify-center">
          <VoiceInput onTranscript={handleVoiceTranscript} />
        </div>

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

      <div className="mt-8 flex justify-between items-center max-w-2xl mx-auto">
        {!isFirst ? (
          <button
            onClick={onPrev}
            className="text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/70 text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
          {isLast ? "Submit" : "Next"}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

// ── Single-Choice Question ──
function SingleChoiceQuestion({
  question,
  questionText,
  answer,
  onAnswer,
  onNext,
  onPrev,
  isFirst,
  questionNumber,
  totalQuestions,
  phaseName,
}: {
  question: UnifiedQuestion;
  questionText: string;
  answer: string;
  onAnswer: (value: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  questionNumber: number;
  totalQuestions: number;
  phaseName: string;
}) {
  const handleSelect = (value: string) => {
    onAnswer(value);
    // Auto-advance after short delay
    setTimeout(onNext, 350);
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <ProgressBar
        currentQuestion={questionNumber}
        totalQuestions={totalQuestions}
        phaseName={phaseName}
      />

      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
          {questionText}
        </h3>
        {question.subtitle && (
          <p className="mt-2 text-slate-500 dark:text-white/50">
            {question.subtitle}
          </p>
        )}
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {question.options?.map((option, i) => {
          const isSelected = answer === option.value;
          return (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleSelect(option.value)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-indigo-300 dark:hover:border-indigo-500/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-500"
                      : "border-slate-300 dark:border-slate-600"
                  }`}
                >
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`font-medium ${
                    isSelected
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {option.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {!isFirst && (
        <div className="mt-6 max-w-2xl mx-auto">
          <button
            onClick={onPrev}
            className="text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/70 text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
        </div>
      )}
    </motion.div>
  );
}

// ── Multi-Choice Question ──
function MultiChoiceQuestion({
  question,
  questionText,
  answer,
  onAnswer,
  onNext,
  onPrev,
  isFirst,
  isLast,
  questionNumber,
  totalQuestions,
  phaseName,
}: {
  question: UnifiedQuestion;
  questionText: string;
  answer: string;
  onAnswer: (value: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  questionNumber: number;
  totalQuestions: number;
  phaseName: string;
}) {
  // Store selected values as comma-separated string
  const selectedValues = answer ? answer.split(",").filter(Boolean) : [];
  const maxSelections = question.maxSelections || Infinity;

  const toggleOption = (value: string) => {
    let updated: string[];
    if (selectedValues.includes(value)) {
      updated = selectedValues.filter((v) => v !== value);
    } else {
      if (selectedValues.length >= maxSelections) return;
      updated = [...selectedValues, value];
    }
    onAnswer(updated.join(","));
  };

  const canProceed = selectedValues.length > 0;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <ProgressBar
        currentQuestion={questionNumber}
        totalQuestions={totalQuestions}
        phaseName={phaseName}
      />

      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
          {questionText}
        </h3>
        {question.subtitle && (
          <p className="mt-2 text-slate-500 dark:text-white/50">
            {question.subtitle}
          </p>
        )}
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {question.options?.map((option, i) => {
          const isSelected = selectedValues.includes(option.value);
          const isDisabled =
            !isSelected && selectedValues.length >= maxSelections;
          return (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => toggleOption(option.value)}
              disabled={isDisabled}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
                  : isDisabled
                    ? "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 opacity-50 cursor-not-allowed"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-indigo-300 dark:hover:border-indigo-500/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-500"
                      : "border-slate-300 dark:border-slate-600"
                  }`}
                >
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`font-medium ${
                    isSelected
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {option.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-between items-center max-w-2xl mx-auto">
        {!isFirst ? (
          <button
            onClick={onPrev}
            className="text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/70 text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
          {isLast ? "Submit" : `Continue (${selectedValues.length} selected)`}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
