"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const methodology = [
  {
    step: "01",
    title: "Reality Gap Assessment",
    description:
      "Every participant completes our AI Readiness Assessment — individually. We surface where they really are, not where they think they are.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Custom Training Design",
    description:
      "Based on assessment data, we reverse-engineer the entire training session around your team's actual gaps, tools, and industry context. No generic slides.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Hands-On Training",
    description:
      "Your team builds real solutions during the session — not hypotheticals. We use your actual data, your actual workflows, your actual problems.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Working Tools You Keep",
    description:
      "Your team leaves with functioning AI tools, automations, and workflows — not just knowledge. Things that work on Monday morning.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

const topicCards = [
  {
    title: "AI for Decision-Making",
    description:
      "Your leadership team builds custom decision frameworks powered by AI that analyze real scenarios from your business.",
    exercise:
      "Build a decision engine that evaluates your top 3 recurring decisions using your actual criteria and historical data.",
  },
  {
    title: "Intelligent Automation",
    description:
      "Identify and automate the workflows that eat your team's most valuable hours. Build agents that handle the work.",
    exercise:
      "Map your top 5 time-draining processes and build a working automation for the highest-impact one during the session.",
  },
  {
    title: "Knowledge Systems & RAG",
    description:
      "Turn your organization's tribal knowledge into searchable, queryable AI systems that any team member can access.",
    exercise:
      "Build a knowledge base from your actual SOPs and documents that answers questions like a senior team member.",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Stop staring at dashboards. Build AI that proactively surfaces insights, predicts trends, and flags anomalies in your data.",
    exercise:
      "Connect to your actual data sources and build a natural language interface your team can query without SQL.",
  },
  {
    title: "Custom AI Agents",
    description:
      "Build AI agents that handle specific roles in your organization — from research to customer support to internal operations.",
    exercise:
      "Design and deploy a working AI agent for a specific role that currently requires human attention in your org.",
  },
];

const genericVsCustom = [
  {
    generic: "Same slides for every company",
    custom: "Training built from your assessment data",
  },
  {
    generic: "Hypothetical exercises",
    custom: "Build with your actual data and workflows",
  },
  {
    generic: "Theory-heavy, demo-light",
    custom: "80% hands-on, 20% context",
  },
  {
    generic: "Everyone gets the same content",
    custom: "Each participant's gaps addressed",
  },
  {
    generic: "Leave with notes",
    custom: "Leave with working AI tools",
  },
  {
    generic: "One-size-fits-all difficulty",
    custom: "Calibrated to your team's actual level",
  },
];

export default function CorporateTrainingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just mark as submitted
    // Later: POST to /api/lead or similar
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
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

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              Corporate AI Training
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Training Reverse-Engineered
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                From Your Reality
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/60 max-w-3xl mx-auto mb-10">
              Every participant is assessed before we design a single slide.
              Your team&apos;s gaps, your industry&apos;s context, your actual
              data. Generic AI training is dead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:scale-105 transition-all"
              >
                Take the AI Readiness Assessment
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="#request-proposal"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Request a Proposal
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anti-Generic Comparison */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              This Is Not Generic AI Training
            </h2>
            <p className="text-slate-500 dark:text-white/50">
              Side-by-side: what you&apos;ve seen vs. what we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-1 rounded-2xl overflow-hidden">
            {/* Generic column header */}
            <div className="bg-slate-200 dark:bg-slate-800 p-4 text-center">
              <span className="text-slate-500 dark:text-white/50 font-semibold line-through">
                Generic AI Training
              </span>
            </div>
            <div className="bg-indigo-600 p-4 text-center">
              <span className="text-white font-semibold">
                DrLee.ai Training
              </span>
            </div>

            {genericVsCustom.map((row, i) => (
              <div key={i} className="contents">
                <div className="bg-slate-100 dark:bg-slate-800/50 p-4 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-red-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-slate-500 dark:text-white/50">
                    {row.generic}
                  </span>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-500/5 p-4 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-900 dark:text-white font-medium">
                    {row.custom}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The 4-Step Process
            </h2>
            <p className="text-slate-500 dark:text-white/50 max-w-2xl mx-auto">
              From assessment to working tools. Every step uses your reality,
              not hypotheticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {methodology.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Topics */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Training Topics
            </h2>
            <p className="text-slate-500 dark:text-white/50 max-w-2xl mx-auto">
              Each topic is adapted to your team&apos;s level and your
              organization&apos;s data. These are sample exercises, not fixed
              agendas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 flex flex-col"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-slate-500 dark:text-white/50 text-sm mb-4 flex-1">
                  {topic.description}
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                    Sample Exercise
                  </p>
                  <p className="text-sm text-slate-600 dark:text-white/60">
                    {topic.exercise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Proposal */}
      <section id="request-proposal" className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Request a Proposal
            </h2>
            <p className="text-slate-500 dark:text-white/50">
              Tell us about your team and we&apos;ll design a custom training
              program. No pricing on this page — every engagement is unique.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-10 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/5"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Request Received
              </h3>
              <p className="text-slate-500 dark:text-white/50 mb-6">
                We&apos;ll review your information and get back to you within 24
                hours with a custom proposal.
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all"
              >
                Take the AI Readiness Assessment while you wait
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
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
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
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                    Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) =>
                      setFormData({ ...formData, teamSize: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                  >
                    <option value="">Select team size</option>
                    <option value="5-15">5-15 people</option>
                    <option value="15-50">15-50 people</option>
                    <option value="50-200">50-200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-1">
                  Biggest AI Challenge *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.challenge}
                  onChange={(e) =>
                    setFormData({ ...formData, challenge: e.target.value })
                  }
                  placeholder="What's your biggest challenge with AI adoption? What would a successful training outcome look like?"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors resize-none"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:scale-[1.02] transition-all"
                >
                  Request a Proposal
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
