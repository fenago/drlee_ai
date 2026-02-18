"use client";

import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import AdvisorWelcome from "./AdvisorWelcome";
import ContactStep from "./ContactStep";
import PhaseIntro from "./PhaseIntro";
import QuestionStep from "./QuestionStep";
import AnalyzingAnimation from "./AnalyzingAnimation";
import ReportView from "./ReportView";
import { unifiedQuestions, phases, getQuestionsForPhase } from "@/lib/assessment-questions";

type FlowStep =
  | "welcome"
  | "contact-name"
  | "contact-email"
  | "phase-intro"
  | "question"
  | "analyzing"
  | "report";

interface Respondent {
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  linkedin: string;
}

export default function UnifiedAssessment() {
  const [flowStep, setFlowStep] = useState<FlowStep>("welcome");
  const [currentPhase, setCurrentPhase] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [respondent, setRespondent] = useState<Respondent>({
    name: "",
    email: "",
    company: "",
    role: "",
    website: "",
    linkedin: "",
  });
  const [report, setReport] = useState<any>(null);
  const [assessmentId, setAssessmentId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalQuestions = unifiedQuestions.length;
  const currentQuestion = unifiedQuestions[currentQuestionIndex];
  const currentPhaseData = phases.find((p) => p.number === currentPhase);

  // Calculate the global question number (1-based)
  const questionNumber = currentQuestionIndex + 1;

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── Flow handlers ──

  const handleStart = () => {
    setFlowStep("contact-name");
    scrollToTop();
  };

  const handleNameDone = () => {
    setFlowStep("contact-email");
  };

  const handleContactDone = () => {
    setCurrentPhase(1);
    setFlowStep("phase-intro");
    scrollToTop();
  };

  const handlePhaseIntroDone = () => {
    setFlowStep("question");
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const nextQuestion = unifiedQuestions[nextIndex];

      // Check if we're entering a new phase
      if (nextQuestion.phase !== currentPhase) {
        setCurrentPhase(nextQuestion.phase);
        setCurrentQuestionIndex(nextIndex);
        setFlowStep("phase-intro");
        scrollToTop();
      } else {
        setCurrentQuestionIndex(nextIndex);
        scrollToTop();
      }
    } else {
      // Last question — submit
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      const prevQuestion = unifiedQuestions[prevIndex];
      if (prevQuestion.phase !== currentPhase) {
        setCurrentPhase(prevQuestion.phase);
      }
      setCurrentQuestionIndex(prevIndex);
      scrollToTop();
    }
  };

  const handleSubmit = async () => {
    setFlowStep("analyzing");
    setError(null);
    scrollToTop();

    const formattedAnswers = unifiedQuestions.map((q) => ({
      questionId: q.id,
      questionText: q.questionText,
      category: q.category,
      type: q.type,
      answer: answers[q.id] || "",
    }));

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "unified",
          respondent,
          answers: formattedAnswers,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate report");
      }

      const data = await res.json();
      setAssessmentId(data.assessmentId);
      setReport(data.report);
      setFlowStep("report");
      scrollToTop();
    } catch (e: any) {
      setError(e.message);
      // Go back to last question so user can retry
      setCurrentQuestionIndex(totalQuestions - 1);
      setFlowStep("question");
    }
  };

  const resetAssessment = () => {
    setFlowStep("welcome");
    setCurrentPhase(1);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setRespondent({ name: "", email: "", company: "", role: "", website: "", linkedin: "" });
    setReport(null);
    setAssessmentId(null);
    setError(null);
  };

  return (
    <section
      ref={sectionRef}
      id="assessment"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {/* WELCOME */}
          {flowStep === "welcome" && (
            <AdvisorWelcome key="welcome" onStart={handleStart} />
          )}

          {/* CONTACT — Name */}
          {flowStep === "contact-name" && (
            <ContactStep
              key="contact-name"
              step="name"
              name={respondent.name}
              email={respondent.email}
              company={respondent.company}
              role={respondent.role}
              website={respondent.website}
              linkedin={respondent.linkedin}
              onUpdateName={(name) => setRespondent({ ...respondent, name })}
              onUpdateEmail={(email) => setRespondent({ ...respondent, email })}
              onUpdateCompany={(company) =>
                setRespondent({ ...respondent, company })
              }
              onUpdateRole={(role) => setRespondent({ ...respondent, role })}
              onUpdateWebsite={(website) =>
                setRespondent({ ...respondent, website })
              }
              onUpdateLinkedin={(linkedin) =>
                setRespondent({ ...respondent, linkedin })
              }
              onNext={handleNameDone}
            />
          )}

          {/* CONTACT — Email */}
          {flowStep === "contact-email" && (
            <ContactStep
              key="contact-email"
              step="email"
              name={respondent.name}
              email={respondent.email}
              company={respondent.company}
              role={respondent.role}
              website={respondent.website}
              linkedin={respondent.linkedin}
              onUpdateName={(name) => setRespondent({ ...respondent, name })}
              onUpdateEmail={(email) => setRespondent({ ...respondent, email })}
              onUpdateCompany={(company) =>
                setRespondent({ ...respondent, company })
              }
              onUpdateRole={(role) => setRespondent({ ...respondent, role })}
              onUpdateWebsite={(website) =>
                setRespondent({ ...respondent, website })
              }
              onUpdateLinkedin={(linkedin) =>
                setRespondent({ ...respondent, linkedin })
              }
              onNext={handleContactDone}
            />
          )}

          {/* PHASE INTRO */}
          {flowStep === "phase-intro" && currentPhaseData && (
            <PhaseIntro
              key={`phase-intro-${currentPhase}`}
              phase={currentPhaseData}
              totalPhases={phases.length}
              onComplete={handlePhaseIntroDone}
            />
          )}

          {/* QUESTION */}
          {flowStep === "question" && currentQuestion && (
            <QuestionStep
              key={currentQuestion.id}
              question={currentQuestion}
              answer={answers[currentQuestion.id] || ""}
              onAnswer={handleAnswer}
              questionNumber={questionNumber}
              totalQuestions={totalQuestions}
              phaseName={currentPhaseData?.title || ""}
              onNext={handleNext}
              onPrev={handlePrev}
              isFirst={currentQuestionIndex === 0}
              isLast={currentQuestionIndex === totalQuestions - 1}
              respondentName={respondent.name}
            />
          )}

          {/* ANALYZING */}
          {flowStep === "analyzing" && (
            <AnalyzingAnimation key="analyzing" />
          )}

          {/* REPORT */}
          {flowStep === "report" && report && (
            <div key="report">
              <ReportView
                report={report}
                assessmentType="unified"
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
            </div>
          )}
        </AnimatePresence>

        {/* Error banner */}
        {error && flowStep === "question" && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm text-center">
            {error} — Please try submitting again.
          </div>
        )}
      </div>
    </section>
  );
}
