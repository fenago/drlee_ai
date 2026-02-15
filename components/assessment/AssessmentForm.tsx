"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionStep from "./QuestionStep";
import ReportView from "./ReportView";
import {
  AssessmentQuestion,
  individualQuestions,
  organizationalQuestions,
} from "@/lib/assessment-questions";

type AssessmentType = "individual" | "organizational";
type Step = "intro" | "questions" | "contact" | "analyzing" | "report";

interface Respondent {
  name: string;
  email: string;
  company: string;
  role: string;
}

export default function AssessmentForm() {
  const [step, setStep] = useState<Step>("intro");
  const [assessmentType, setAssessmentType] =
    useState<AssessmentType>("individual");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [respondent, setRespondent] = useState<Respondent>({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [report, setReport] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const questions: AssessmentQuestion[] =
    assessmentType === "individual"
      ? individualQuestions
      : organizationalQuestions;

  const currentQ = questions[currentQuestion];

  const handleStartAssessment = (type: AssessmentType) => {
    setAssessmentType(type);
    setAnswers({});
    setCurrentQuestion(0);
    setStep("questions");
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQ.id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("contact");
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setStep("analyzing");
    setError(null);

    const formattedAnswers = questions.map((q) => ({
      questionId: q.id,
      questionText: q.questionText,
      answer: answers[q.id] || "",
    }));

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: assessmentType,
          respondent,
          answers: formattedAnswers,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate report");
      }

      const data = await res.json();
      setReport(data.report);
      setStep("report");
    } catch (e: any) {
      setError(e.message);
      setStep("contact");
    }
  };

  const resetAssessment = () => {
    setStep("intro");
    setCurrentQuestion(0);
    setAnswers({});
    setRespondent({ name: "", email: "", company: "", role: "" });
    setReport(null);
    setError(null);
  };

  return (
    <div className="min-h-[60vh]">
      <AnimatePresence mode="wait">
        {/* INTRO — Choose assessment type */}
        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              AI Reality Gap Assessment
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              How Ready Are You{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                Really?
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/60 max-w-2xl mx-auto mb-12">
              Answer 8 honest questions. Get a brutally honest AI Readiness
              Report with your score, gaps, and a specific action plan. No
              fluff. No generic advice.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Individual */}
              <button
                onClick={() => handleStartAssessment("individual")}
                className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Individual Assessment
                </h3>
                <p className="text-slate-500 dark:text-white/50 text-sm">
                  For executives, leaders, and professionals who want to
                  understand their personal AI readiness and get a tailored
                  action plan.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm group-hover:gap-3 transition-all">
                  Start Assessment
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>

              {/* Organizational */}
              <button
                onClick={() => handleStartAssessment("organizational")}
                className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-purple-500 dark:hover:border-purple-500 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Organizational Assessment
                </h3>
                <p className="text-slate-500 dark:text-white/50 text-sm">
                  For organizations evaluating team AI readiness, identifying
                  automation opportunities, and planning enterprise AI
                  transformation.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium text-sm group-hover:gap-3 transition-all">
                  Start Assessment
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>
            </div>

            <p className="mt-8 text-sm text-slate-400 dark:text-white/30">
              8 questions. Voice or text. Takes 5-10 minutes. Results powered by
              AI analysis.
            </p>
          </motion.div>
        )}

        {/* QUESTIONS */}
        {step === "questions" && currentQ && (
          <QuestionStep
            key={currentQ.id}
            question={currentQ}
            answer={answers[currentQ.id] || ""}
            onAnswer={handleAnswer}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={currentQuestion === 0}
            isLast={currentQuestion === questions.length - 1}
          />
        )}

        {/* CONTACT INFO */}
        {step === "contact" && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium uppercase tracking-wider mb-4">
                Almost Done
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Where Should We Send Your Report?
              </h3>
              <p className="text-slate-500 dark:text-white/50">
                We&apos;ll email you a copy of your full Reality Gap Report.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  value={respondent.name}
                  onChange={(e) =>
                    setRespondent({ ...respondent, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={respondent.email}
                  onChange={(e) =>
                    setRespondent({ ...respondent, email: e.target.value })
                  }
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={respondent.company}
                  onChange={(e) =>
                    setRespondent({ ...respondent, company: e.target.value })
                  }
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                  Role / Title
                </label>
                <input
                  type="text"
                  value={respondent.role}
                  onChange={(e) =>
                    setRespondent({ ...respondent, role: e.target.value })
                  }
                  placeholder="e.g., VP of Operations, CEO, Director of Engineering"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => {
                  setCurrentQuestion(questions.length - 1);
                  setStep("questions");
                }}
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
                Back to questions
              </button>
              <button
                onClick={handleSubmit}
                disabled={!respondent.name.trim() || !respondent.email.trim()}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
                  respondent.name.trim() && respondent.email.trim()
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                }`}
              >
                Generate My Report
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* ANALYZING */}
        {step === "analyzing" && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-500/20 mb-6">
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Analyzing Your Responses
            </h3>
            <p className="text-slate-500 dark:text-white/50 max-w-md mx-auto mb-6">
              Our AI is performing a deep analysis of your answers to produce
              your personalized Reality Gap Report. This takes about 15-30
              seconds.
            </p>
            <div className="flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-indigo-500"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* REPORT */}
        {step === "report" && report && (
          <motion.div
            key="report"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ReportView
              report={report}
              assessmentType={assessmentType}
              respondentName={respondent.name}
            />

            <div className="text-center mt-10">
              <button
                onClick={resetAssessment}
                className="text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/70 text-sm"
              >
                Take another assessment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
