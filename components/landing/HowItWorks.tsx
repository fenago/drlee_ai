"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    badge: "Before You Start",
    title: "Pre-Masterclass Assessment",
    description:
      "Every masterclass opens with an AI-driven assessment that maps exactly what you already know against what the course teaches. We find your knowledge gaps before day one—so you never sit through what you've mastered, and never get lost in what you haven't.",
    highlight: "We meet you where you are.",
    color: "blue",
  },
  {
    number: "02",
    badge: "During",
    title: "An AI-Hyper-Personalized Path",
    description:
      "Your results reshape the masterclass around you. The AI aligns the material, examples, and pace to close your specific gaps—turning a fixed curriculum into a path built for one person: you. This is what separates a masterclass from a course.",
    highlight: "The material adapts to you—not the other way around.",
    color: "purple",
  },
  {
    number: "03",
    badge: "Your Outcome",
    title: "A Custom Deliverable You Own",
    description:
      "You don't finish with a certificate—you finish with a real, working artifact built for your goals: your own model, your own agent, your own system. A tangible deliverable you can ship, show, and build on. That's the outcome of every masterclass.",
    highlight: "You leave with something you built, not just something you watched.",
    color: "emerald",
  },
];

const colorMap: Record<string, { text: string; bg: string; ring: string; dot: string }> = {
  blue: {
    text: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
    ring: "group-hover:border-blue-500/50",
    dot: "bg-blue-500",
  },
  purple: {
    text: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
    ring: "group-hover:border-purple-500/50",
    dot: "bg-purple-500",
  },
  emerald: {
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "group-hover:border-emerald-500/50",
    dot: "bg-emerald-500",
  },
};

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            Why It's a Masterclass, Not a Course
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            AI Hyper-Personalizes{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Every Step
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60">
            A course teaches everyone the same thing. A DrLee.ai masterclass assesses your gaps,
            adapts to close them, and sends you home with a custom deliverable you built yourself.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const c = colorMap[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 p-8 transition-all hover:shadow-xl hover:shadow-blue-500/5 ${c.ring}`}
              >
                {/* Connector dot for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 w-8 lg:w-10 h-px bg-slate-200 dark:bg-white/10 z-0" />
                )}

                <div className="flex items-center justify-between mb-6">
                  <span className={`text-5xl font-black ${c.text} opacity-30`}>{step.number}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-white/60 mb-5 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex items-start gap-2">
                  <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                  <p className={`font-semibold ${c.text}`}>{step.highlight}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
          >
            Explore the Masterclasses
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
