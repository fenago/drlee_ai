"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How is this different from other AI assessments or consultants?",
    answer:
      "Most assessments are generic surveys that give you a score and nothing else. Consultants are expensive and slow. Our assessment combines the speed and personalization of AI analysis with the strategic depth of expert consultation. You get a hyper-personalized report in 24 hours, not weeks. And it\u2019s free.",
  },
  {
    question: "What if I don\u2019t have time for a 15-minute assessment?",
    answer:
      "If you don\u2019t have 15 minutes to invest in your AI strategy, you\u2019re already behind. But we get it\u2014you\u2019re busy. That\u2019s why we offer voice input (just talk through your answers) and an alternative 1-on-1 consultation.",
  },
  {
    question: "Will you try to sell me something after?",
    answer:
      "We\u2019ll invite you to our AI Readiness Mastermind class. But there\u2019s no pressure. The report itself is valuable and actionable on its own. Many leaders use it to guide their internal planning.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Your assessment responses are encrypted and stored securely. We use your company URL and LinkedIn profile solely to enrich your report. We will never share or sell your data.",
  },
  {
    question: "What if my org is already using AI?",
    answer:
      "Organizations already using AI often benefit the most. You\u2019ll discover gaps you didn\u2019t know existed, identify which initiatives deliver ROI, and get a roadmap to scale what\u2019s working.",
  },
  {
    question: "Can my team take this too?",
    answer:
      "The assessment is designed for senior leaders first, but we offer team assessments as part of our Mastermind and consulting. Start with your own to understand the strategic landscape.",
  },
  {
    question: "What does Fractional CTO include?",
    answer:
      "Ongoing strategic technical leadership without the cost of a full-time executive. Architecture decisions, team mentorship, technology evaluation, vendor management, and board-level communication.",
  },
  {
    question: "Do I have to go through all 6 steps?",
    answer:
      "Not at all. Many complete the assessment and execute internally. Others join the Mastermind. Some engage for full implementation. You choose your path.",
  },
];

const blurSlide = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const springTransition = {
  type: "spring" as const,
  bounce: 0.3,
  duration: 1.5,
};

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200/80 dark:border-[#2d3748] last:border-b-0">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-5 md:py-6 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base md:text-lg font-medium pr-4 transition-colors ${
            isOpen
              ? "text-[#4a6cf7]"
              : "text-slate-900 dark:text-white group-hover:text-[#4a6cf7]"
          }`}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" as const }}
          className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 dark:border-[#2d3748] text-slate-500 dark:text-[#a0aec0] group-hover:border-[#4a6cf7]/40 group-hover:text-[#4a6cf7] transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 pr-12 text-sm md:text-base text-slate-600 dark:text-[#a0aec0] leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-[#0a0e27]"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent" />

      {/* === Premium Background Layers === */}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Mesh (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4a6cf7]/5 dark:bg-[#4a6cf7]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-[#8b5cf6]/5 dark:bg-[#8b5cf6]/8 blur-[100px]" />
      </div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* === Content === */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={springTransition}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={blurSlide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...springTransition, delay: 0.15 }}
          className="rounded-2xl border border-slate-200/80 dark:border-[#2d3748] bg-white dark:bg-[#1a1f3a] px-6 md:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
