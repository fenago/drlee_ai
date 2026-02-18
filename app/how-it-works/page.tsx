"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { maturityLevels, maturityTiers } from "@/lib/assessment-questions";

const steps = [
  {
    number: 1,
    title: "Take the Assessment",
    subtitle: "Get Your AI Readiness Report",
    description:
      "Complete our 15-question AI Reality Gap Assessment covering 5 critical areas: personal AI maturity, organizational readiness, pain points, business context, and core workflows. Our AI analyzes your responses and generates a personalized Reality Gap Report with maturity scores on our 0-10 scale, identified gaps, and specific action items.",
    highlight: "Free. Takes ~12 minutes. Results delivered instantly and by email.",
    color: "from-blue-500 to-indigo-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    ),
  },
  {
    number: 2,
    title: "4-Hour AI Mastermind",
    subtitle: "Customized to Your Readiness Level",
    description:
      "Based on your Reality Gap Report, we design a 4-hour intensive Mastermind session tailored to your exact maturity level and business context. A Foundational-tier team gets a completely different experience than a Strategic-tier organization. No generic slides. Every exercise, case study, and workshop activity maps directly to your specific gaps and opportunities identified in the assessment.",
    highlight:
      "Your report data shapes the entire Mastermind curriculum — from the examples we use to the tools we teach.",
    color: "from-purple-500 to-violet-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    ),
  },
  {
    number: 3,
    title: "Custom Coaching & Training Plan",
    subtitle: "Based on Your Readiness, Workflows & Business",
    description:
      "From the Mastermind, we build a sustained coaching and training plan designed around three dimensions: your AI readiness levels (personal + organizational maturity scores), your actual workflows (the ones you told us about in the assessment), and your specific business use case and industry context. This isn't a course catalog — it's a transformation roadmap with measurable milestones.",
    highlight:
      "Every engagement is built on YOUR data. We don't guess what you need — your assessment tells us.",
    color: "from-emerald-500 to-teal-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
      />
    ),
  },
];

const differentiators = [
  {
    bad: "Generic corporate training",
    good: "Personalized to YOUR maturity level, workflows, and business",
    detail:
      "We assess you first. A Level 2 (Exploring) team gets fundamentally different training than a Level 6 (Optimizing) team. Regular corporate training treats everyone the same.",
  },
  {
    bad: "One-size-fits-all curriculum",
    good: "Your assessment data shapes every module",
    detail:
      "The pain points you identify, the workflows you describe, the barriers you face — all of this feeds directly into what we teach and how we teach it.",
  },
  {
    bad: "Theory-heavy, demo-light",
    good: "Hands-on with YOUR actual business scenarios",
    detail:
      "We don't use hypothetical case studies. We use YOUR workflows, YOUR data challenges, YOUR competitive situation as the workshop material.",
  },
  {
    bad: "No follow-through after the workshop",
    good: "Sustained coaching plan with measurable milestones",
    detail:
      "The Mastermind is step 2 of 3. Step 3 is a coaching plan built on your assessment data that keeps your team progressing through the maturity levels with accountability and measurement.",
  },
  {
    bad: "Vanity metrics (attendance, satisfaction scores)",
    good: "Maturity-level progression measured on a 0-10 scale",
    detail:
      "We re-assess after training. Did your team move from Level 3 to Level 5? That's a measurable outcome tied to business results — not a 4.5/5 satisfaction rating.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6"
          >
            How It Works
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            AI Training That Starts{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              With You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 dark:text-white/60 max-w-3xl mx-auto mb-10"
          >
            Most corporate AI training fails because it treats everyone the
            same. We start by understanding exactly where you are — then build
            everything around that reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/assessment"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Start Your Assessment
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
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Three Steps to AI Transformation
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              Every engagement begins with data. Your assessment drives
              everything that follows.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid md:grid-cols-[120px_1fr] gap-6 items-start"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center md:items-start">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-3`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {step.icon}
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-400 dark:text-white/30">
                    STEP {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                  >
                    {step.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                    <p className="text-sm text-slate-700 dark:text-white/80 font-medium">
                      {step.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection arrows between steps */}
          <div className="hidden md:flex justify-center my-8">
            <div className="flex flex-col items-center gap-1 text-slate-300 dark:text-white/20">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span className="text-xs font-medium">Data flows through</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Maturity Model */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
              The Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI Maturity Model (0-10)
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              We score both personal and organizational maturity on an 11-level
              scale, grouped into 4 tiers. This is how we measure progress —
              not satisfaction surveys.
            </p>
          </div>

          {/* Tier Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {(
              Object.entries(maturityTiers) as [
                keyof typeof maturityTiers,
                (typeof maturityTiers)[keyof typeof maturityTiers],
              ][]
            ).map(([tier, data], i) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${data.color} text-white`}
              >
                <div className="text-2xl font-bold mb-1">{tier}</div>
                <div className="text-white/80 text-sm font-medium mb-2">
                  Levels {data.range}
                </div>
                <p className="text-white/70 text-sm">{data.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Full 0-10 Scale */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Complete Maturity Scale
              </h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {maturityLevels.map((level) => {
                const tierData =
                  maturityTiers[
                    level.tier as keyof typeof maturityTiers
                  ];
                return (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${tierData.color} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {level.level}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {level.name}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-white/50">
                          {level.tier}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-white/60">
                        {level.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Different */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
              The Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why This Isn&apos;t Corporate Training
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              Most AI training programs are generic presentations dressed up as
              &ldquo;workshops.&rdquo; Here&apos;s why our approach is
              fundamentally different.
            </p>
          </div>

          <div className="space-y-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
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
                    <span className="text-slate-500 dark:text-white/50 line-through">
                      {d.bad}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
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
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {d.good}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-white/60 ml-8 md:ml-0">
                  {d.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Close Your AI Reality Gap?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10"
          >
            It starts with 12 minutes and 15 honest questions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-indigo-700 font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Take the Free Assessment
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
            <Link
              href="/corporate-training"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Corporate Training
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm text-white/50"
          >
            Free assessment. Personalized report delivered by email. No
            obligation.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
