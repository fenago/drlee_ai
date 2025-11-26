"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const bundles = [
  {
    id: "founder-stack",
    name: "Founder's AI Stack",
    tagline: "Everything you need to build competitive AI",
    description: "Build LLM + Reasoning Models + MoE + Agentic Systems + Multi-Agent + AI Product Factory",
    courses: 6,
    hours: 220,
    featured: true,
    pricing: {
      selfPaced: { price: 4997, original: 9279, savings: "46%" },
      cohort: { price: 19997, original: 34982, savings: "43%" },
      founder: { price: 49997, original: 99982, savings: "50%" },
    },
    includes: [
      "Build Your Own LLM",
      "Reasoning Models",
      "Mixture of Experts (MoE)",
      "Agentic Systems",
      "Multi-Agent Systems",
      "AI Product Factory",
    ],
  },
  {
    id: "ai-engineer",
    name: "AI Engineer Complete",
    tagline: "The complete curriculum to become elite",
    description: "All 14 Hardcore Developer courses—from ML fundamentals to frontier AI systems",
    courses: 14,
    hours: 420,
    pricing: {
      selfPaced: { price: 8997, original: 16759, savings: "46%" },
      cohort: { price: 34997, original: 62958, savings: "44%" },
      founder: { price: 89997, original: 176958, savings: "49%" },
    },
    includes: [
      "All 14 Hardcore Developer courses",
      "ML & Deep Learning Intuition",
      "LLMs, Reasoning, MoE, Diffusion",
      "Agentic & Multi-Agent Systems",
      "GraphRAG, SLMs, Fine-tuning",
      "Production & Analytics tools",
    ],
  },
  {
    id: "full-catalog",
    name: "Full Catalog Access",
    tagline: "Master everything we teach",
    description: "All 21 masterclasses—complete access to the entire DrLee.ai curriculum",
    courses: 21,
    hours: 560,
    pricing: {
      selfPaced: { price: 11997, original: 23138, savings: "48%" },
      cohort: { price: 49997, original: 87937, savings: "43%" },
      founder: { price: 119997, original: 243937, savings: "51%" },
    },
    includes: [
      "All 21 masterclasses",
      "Hardcore Developer (14 courses)",
      "Citizen Developer (7 courses)",
      "Token Economy & Web3 included",
      "Vibe Marketing included",
      "Lifetime access to all content",
    ],
  },
];

export default function BundlesNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
            Save Up To 56%
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Bundle & Save with{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Learning Paths
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
            Accelerate your transformation with curated course bundles designed for serious builders.
          </p>
        </motion.div>

        {/* Bundle Cards */}
        <div className="grid lg:grid-cols-3 gap-8 pt-6">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative rounded-3xl ${
                bundle.featured
                  ? "bg-gradient-to-b from-amber-500 to-orange-600 p-[2px]"
                  : "bg-slate-200 dark:bg-white/10 p-[1px]"
              }`}
            >
              {bundle.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1 bg-amber-500 text-white text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {bundle.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {bundle.tagline}
                  </p>
                  <p className="text-slate-600 dark:text-white/60 text-sm">
                    {bundle.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-6 pb-6 border-b border-slate-200 dark:border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {bundle.courses}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-white/40 uppercase tracking-wider">
                      Courses
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {bundle.hours}+
                    </div>
                    <div className="text-xs text-slate-500 dark:text-white/40 uppercase tracking-wider">
                      Hours
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {bundle.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-white/60">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-6">
                  {/* Self-Paced */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                    <div>
                      <span className="text-sm font-medium text-slate-700 dark:text-white/80">Self-Paced</span>
                      <span className="ml-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        Save {bundle.pricing.selfPaced.savings}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-900 dark:text-white">
                        ${bundle.pricing.selfPaced.price.toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-slate-400 line-through">
                        ${bundle.pricing.selfPaced.original.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Cohort */}
                  <div className={`flex items-center justify-between p-3 rounded-xl ${
                    bundle.featured
                      ? "bg-amber-500/10 border border-amber-500/20"
                      : "bg-blue-500/10 border border-blue-500/20"
                  }`}>
                    <div>
                      <span className={`text-sm font-medium ${bundle.featured ? "text-amber-700 dark:text-amber-400" : "text-blue-700 dark:text-blue-400"}`}>
                        Cohort-Based
                      </span>
                      <span className={`ml-2 text-xs font-medium ${bundle.featured ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                        Save {bundle.pricing.cohort.savings}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-lg font-bold ${bundle.featured ? "text-amber-700 dark:text-amber-400" : "text-blue-700 dark:text-blue-400"}`}>
                        ${bundle.pricing.cohort.price.toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-slate-400 line-through">
                        ${bundle.pricing.cohort.original.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Founder */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                    <div>
                      <span className="text-sm font-medium text-slate-700 dark:text-white/80">Founder&apos;s Edition</span>
                      <span className="ml-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        Save {bundle.pricing.founder.savings}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-900 dark:text-white">
                        ${bundle.pricing.founder.price.toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-slate-400 line-through">
                        ${bundle.pricing.founder.original.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="#pricing"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] ${
                    bundle.featured
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/20"
                      : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                  }`}
                >
                  Get This Bundle
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-white/60 mb-4">
            Not sure which path is right for you?
          </p>
          <Link
            href="#assessment"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Take the assessment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
