"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import HeaderNew from "@/components/landing/HeaderNew";
import CatalogNew from "@/components/landing/CatalogNew";
import BundlesNew from "@/components/landing/BundlesNew";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Dynamic import for backgrounds
const VortexBackground = dynamic(
  () => import("@/components/backgrounds/VortexBackground").then((mod) => mod.VortexBackground),
  { ssr: false }
);

// Hero Section for Founders
function FoundersHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 dark:to-black/40 z-[1]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center"
      >
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-white/80">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            For Technical Founders & CTOs
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white"
        >
          <span className="block mb-3">
            Stop Renting AI.
          </span>
          <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Start Owning It.
          </span>
        </motion.h1>

        {/* Million Dollar Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-2xl md:text-3xl text-slate-700 dark:text-white/80 font-semibold leading-relaxed mb-6">
            Build proprietary AI systems that create defensible competitive moats
          </p>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-white/70 leading-relaxed">
            Save <span className="text-amber-500 font-bold">$200K-$500K</span> in hiring costs and own your model weights — without being held hostage by API rate limits or vendor lock-in.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10">
            <div className="text-4xl font-bold text-amber-500 mb-2">10x-100x</div>
            <div className="text-sm text-slate-600 dark:text-white/60">Reduce AI costs by self-hosting your own models</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10">
            <div className="text-4xl font-bold text-orange-500 mb-2">$200K-$500K</div>
            <div className="text-sm text-slate-600 dark:text-white/60">Save in hiring costs — build AI yourself</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10">
            <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
            <div className="text-sm text-slate-600 dark:text-white/60">Own your model weights and technology stack</div>
          </div>
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-500 dark:text-white/50"
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Zero Vendor Lock-In
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Defensible Competitive Moats
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Raise Funding with Proprietary Tech
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/#catalog"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Founder's Curriculum
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/#pricing"
            className="group relative px-8 py-4 rounded-full bg-transparent border-2 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-semibold text-lg transition-all duration-300 hover:border-amber-500 dark:hover:border-amber-500 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              See Pricing & Bundles
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10"
        >
          <p className="text-sm text-slate-500 dark:text-white/40 mb-6 uppercase tracking-wider font-medium">
            Building the future of AI
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {["YC Startups", "Seed-Stage", "Series A", "Growth", "Enterprise"].map((type) => (
              <span
                key={type}
                className="text-slate-400 dark:text-white/30 text-base md:text-lg font-semibold tracking-tight"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Problem section specific to founders
function FoundersProblem() {
  const problems = [
    {
      icon: "💸",
      title: "Burning $5K-$50K/Month on APIs",
      description: "OpenAI costs are eating 20-40% of your revenue. Every API call chips away at your margins with zero control over pricing.",
    },
    {
      icon: "🔗",
      title: "Held Hostage by Vendor Lock-In",
      description: "Your entire product depends on OpenAI's API. One pricing change, rate limit, or TOS update could kill your business overnight.",
    },
    {
      icon: "🚫",
      title: "No Competitive Differentiation",
      description: "Everyone uses the same ChatGPT API. Your product is a commodity. Investors see right through your 'ChatGPT wrapper' pitch.",
    },
    {
      icon: "💰",
      title: "$200K-$300K to Hire Each ML Engineer",
      description: "Can't afford a full ML team. Can't compete with big tech salaries. Can't build proprietary AI without burning millions in VC money.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            The Founder's Dilemma
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Building on Rented Ground
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60 max-w-3xl mx-auto">
            Most AI startups don't own their core technology. They're building on someone else's API — and that's a ticking time bomb.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 hover:border-red-500/20 dark:hover:border-red-500/20 transition-all"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The Cost */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            The Real Cost of API Dependency
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">$500K+</div>
              <div className="text-sm text-slate-600 dark:text-white/60">Wasted on API costs over 2 years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">$0</div>
              <div className="text-sm text-slate-600 dark:text-white/60">Equity value if you don't own your tech</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-sm text-slate-600 dark:text-white/60">Risk of business failure if API changes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Solution section specific to founders
function FoundersSolution() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            The AI Sovereignty Stack™
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Own Your Technology. <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Control Your Destiny.
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60 max-w-3xl mx-auto">
            The only complete curriculum that teaches technical founders to build proprietary AI — from foundation models to production systems.
          </p>
        </motion.div>

        {/* The Transformation */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
                Before (API-Dependent)
              </div>
              {[
                "Renting AI from OpenAI ($5K-$50K/month)",
                "No competitive differentiation",
                "Vulnerable to vendor changes",
                "Can't raise funding without owning tech",
                "Burning runway on API costs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-600 dark:text-white/60">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
                After (AI Sovereignty)
              </div>
              {[
                "Own your models (10x-100x cost savings)",
                "Proprietary tech = defensible moat",
                "Complete control over your stack",
                "Raise Series A with owned IP",
                "Self-host, scale infinitely",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-900 dark:text-white font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/#catalog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:scale-105 transition-all"
            >
              Explore The Founder's Curriculum
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function FoundersPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-[#0A0A14]" />}>
        <HeaderNew />
      </Suspense>

      <main>
        {/* Hero with Vortex Background */}
        <div className="relative">
          <div className="hidden dark:block">
            <Suspense fallback={<div className="min-h-screen bg-[#0A0A14]" />}>
              <VortexBackground>
                <FoundersHero />
              </VortexBackground>
            </Suspense>
          </div>
          <div className="block dark:hidden">
            <FoundersHero />
          </div>
        </div>

        {/* Founder-specific problem section */}
        <FoundersProblem />

        {/* Founder-specific solution section */}
        <FoundersSolution />

        {/* Course Catalog */}
        <CatalogNew />

        {/* Bundle Savings */}
        <BundlesNew />

        {/* Pricing */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
