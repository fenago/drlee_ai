"use client";

import { motion } from "framer-motion";

interface ContactStepProps {
  step: "name" | "email";
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  linkedin: string;
  onUpdateName: (name: string) => void;
  onUpdateEmail: (email: string) => void;
  onUpdateCompany: (company: string) => void;
  onUpdateRole: (role: string) => void;
  onUpdateWebsite: (website: string) => void;
  onUpdateLinkedin: (linkedin: string) => void;
  onNext: () => void;
}

export default function ContactStep({
  step,
  name,
  email,
  company,
  role,
  website,
  linkedin,
  onUpdateName,
  onUpdateEmail,
  onUpdateCompany,
  onUpdateRole,
  onUpdateWebsite,
  onUpdateLinkedin,
  onNext,
}: ContactStepProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (canProceed) onNext();
    }
  };

  const canProceed =
    step === "name" ? name.trim().length > 0 : email.trim().length > 0;

  if (step === "name") {
    return (
      <motion.div
        key="name-step"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg mx-auto text-center"
      >
        {/* Advisor avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-lg shadow-indigo-500/20"
        >
          <svg
            className="w-8 h-8 text-white"
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

        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          I&apos;m your AI Transformation Advisor.
        </h3>
        <p className="text-slate-500 dark:text-white/50 mb-8">
          Let&apos;s start with your first name.
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => onUpdateName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Your first name"
          autoFocus
          className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors text-lg text-center"
        />

        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
            canProceed
              ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
              : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
          }`}
        >
          Continue
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    );
  }

  // Email step
  return (
    <motion.div
      key="email-step"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-lg mx-auto text-center"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Nice to meet you, {name}.
      </h3>
      <p className="text-slate-500 dark:text-white/50 mb-8">
        Where should I send your personalized Reality Gap Report?
      </p>

      <div className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onUpdateEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="you@company.com"
            autoFocus
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
            Company{" "}
            <span className="text-slate-400 dark:text-white/30">(optional)</span>
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => onUpdateCompany(e.target.value)}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
            Role / Title{" "}
            <span className="text-slate-400 dark:text-white/30">(optional)</span>
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => onUpdateRole(e.target.value)}
            placeholder="e.g., VP of Operations, CEO, Director"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
            Website{" "}
            <span className="text-slate-400 dark:text-white/30">(optional — helps us personalize your report)</span>
          </label>
          <input
            type="url"
            value={website}
            onChange={(e) => onUpdateWebsite(e.target.value)}
            placeholder="https://yourcompany.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
            LinkedIn{" "}
            <span className="text-slate-400 dark:text-white/30">(optional)</span>
          </label>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => onUpdateLinkedin(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!canProceed}
        className={`mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
          canProceed
            ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
            : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
        }`}
      >
        Let&apos;s Begin
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </motion.div>
  );
}
