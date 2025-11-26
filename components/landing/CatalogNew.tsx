"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Categories
const categories = [
  { id: "all", name: "All Masterclasses", count: 21 },
  { id: "hardcore", name: "Hardcore Developers", count: 14 },
  { id: "citizen", name: "Citizen Developer", count: 7 },
];

// All 21 courses - synced with lib/courses.ts
const courses = [
  // HARDCORE DEVELOPERS (14)
  {
    id: "llm",
    name: "Build Your Own LLM",
    subtitle: "From Tokenization to Training: Own the Technology Behind ChatGPT",
    category: "hardcore",
    rarity: "Extremely Rare",
    description: "The best way to understand AI is to build it yourself.",
    hours: 45,
    modules: 9,
    price: { selfPaced: 1997, cohort: 6997, founder: 19997 },
    slug: "large-language-models",
  },
  {
    id: "reasoning",
    name: "Build Your Own Reasoning Model",
    subtitle: "Train AI That Thinks Before It Answers—No API Required",
    category: "hardcore",
    rarity: "Cutting Edge",
    description: "The models winning today think before they answer. Learn to build that capability.",
    hours: 45,
    modules: 9,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "reasoning-models",
  },
  {
    id: "frontier-arch",
    name: "Build Frontier AI Systems",
    subtitle: "Replicate ChatGPT's Architecture—Own the Innovation Stack",
    category: "hardcore",
    rarity: "Extremely Rare",
    description: "Enterprise-grade AI at startup costs. Build what the giants build.",
    hours: 55,
    modules: 10,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "frontier-model-architecture",
  },
  {
    id: "diffusion",
    name: "Build Your Own Image Generator",
    subtitle: "Train Vision Models from Scratch—Stop Renting, Start Owning",
    category: "hardcore",
    rarity: "Extremely Rare",
    description: "Create images from words. Own the visual AI your competitors rent.",
    hours: 50,
    modules: 11,
    price: { selfPaced: 1997, cohort: 6997, founder: 19997 },
    slug: "diffusion-models",
  },
  {
    id: "agentic",
    name: "Build Autonomous AI Agents",
    subtitle: "Code Agents That Execute Tasks—Not Just Chat",
    category: "hardcore",
    rarity: "Very Rare",
    description: "The difference between a chatbot and an agent is execution. Agents don't just suggest—they do.",
    hours: 40,
    modules: 10,
    price: { selfPaced: 1297, cohort: 4997, founder: 14997 },
    slug: "agentic-systems",
  },
  {
    id: "multi-agent",
    name: "Build Multi-Agent AI Teams",
    subtitle: "Train Agent Swarms That Collaborate and Execute at Scale",
    category: "hardcore",
    rarity: "Frontier AI",
    description: "One agent is powerful. Multiple agents working together are transformative.",
    hours: 45,
    modules: 12,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "multi-agent-systems",
  },
  {
    id: "product-factory",
    name: "Production AI",
    subtitle: "Ship Models That Last—Build Your Own MLOps Platform",
    category: "hardcore",
    description: "90% of ML projects never make it to production. This course ensures yours does.",
    hours: 45,
    modules: 11,
    price: { selfPaced: 997, cohort: 3997, founder: 9997 },
    slug: "the-ai-product-factory",
  },
  {
    id: "graphrag",
    name: "Build Your Own GraphRAG System",
    subtitle: "Knowledge Graphs That Outperform Vector Search—Build, Don't Rent",
    category: "hardcore",
    rarity: "Very Rare",
    description: "RAG only works when you find the right context. Knowledge graphs ensure you always do.",
    hours: 35,
    modules: 8,
    price: { selfPaced: 1197, cohort: 4997, founder: 12997 },
    slug: "graphrag",
  },
  {
    id: "ml-intuition",
    name: "Machine Learning Intuition",
    subtitle: "Foundational Machine Learning for Technical Leaders",
    category: "hardcore",
    description: "No PhD required. Just high school algebra and a desire to understand how ML actually works.",
    hours: 35,
    modules: 13,
    price: { selfPaced: 697, cohort: 2997, founder: 7997 },
    slug: "machine-learning-intuition",
  },
  {
    id: "dl-intuition",
    name: "Deep Learning Intuition",
    subtitle: "Build Neural Networks from Scratch—No TensorFlow, No PyTorch",
    category: "hardcore",
    description: "Understand every detail of training neural networks. No frameworks, no magic—just clarity.",
    hours: 40,
    modules: 16,
    price: { selfPaced: 897, cohort: 3497, founder: 9997 },
    slug: "deep-learning-intuition",
  },
  {
    id: "slm",
    name: "Build Domain-Specific LLMs",
    subtitle: "Train Specialized Models You Own and Control—No API Costs",
    category: "hardcore",
    rarity: "High Demand",
    description: "Bigger isn't always better. Sometimes smaller is smarter, faster, and cheaper.",
    hours: 45,
    modules: 15,
    price: { selfPaced: 1197, cohort: 4997, founder: 12997 },
    slug: "small-language-models",
  },
  {
    id: "fine-tuning",
    name: "Fine-Tune Your Own Models",
    subtitle: "LoRA, QLoRA, and Full Fine-Tuning—Own Your Model Weights",
    category: "hardcore",
    description: "Make any model an expert in your domain. Master LoRA and QLoRA techniques.",
    hours: 25,
    modules: 8,
    price: { selfPaced: 997, cohort: 3997, founder: 9997 },
    slug: "the-art-of-adaptation",
  },
  {
    id: "10x-developer",
    name: "AI-Augmented Engineering",
    subtitle: "Amplifying Developer Impact with Intelligent Tools",
    category: "hardcore",
    description: "Code 10x faster without losing quality. Master AI pair programming.",
    hours: 20,
    modules: 7,
    price: { selfPaced: 697, cohort: 2497, founder: 6997 },
    slug: "the-10x-developer",
  },
  {
    id: "automated-insights",
    name: "Automated Insights",
    subtitle: "AI-Driven Analytics for Strategic Decision-Making",
    category: "hardcore",
    description: "Cut your analysis time by 75%. Do more work, faster, with better results.",
    hours: 35,
    modules: 8,
    price: { selfPaced: 897, cohort: 3497, founder: 8997 },
    slug: "automated-insights",
  },

  // CITIZEN DEVELOPER (7)
  {
    id: "agentic-automation",
    name: "Agentic Automation",
    subtitle: "Strategic Workflow Automation for Business Leaders",
    category: "citizen",
    description: "Your personal AI workforce, no coding required. Automate repetitive workflows.",
    hours: 18,
    modules: 6,
    price: { selfPaced: 697, cohort: 2497, founder: 6997 },
    slug: "agentic-automation",
  },
  {
    id: "predictive-insight",
    name: "Predictive Insight",
    subtitle: "Data-Driven Forecasting for Strategic Decisions",
    category: "citizen",
    description: "Predict the future with your data. Make better decisions without complex math.",
    hours: 16,
    modules: 6,
    price: { selfPaced: 497, cohort: 1997, founder: 4997 },
    slug: "predictive-insight",
  },
  {
    id: "decision-engine",
    name: "The Decision Engine",
    subtitle: "Experimental Design for Evidence-Based Strategy",
    category: "citizen",
    description: "Stop guessing. Start knowing. One validated decision can pay for this 1000x over.",
    hours: 15,
    modules: 5,
    price: { selfPaced: 697, cohort: 2497, founder: 6997 },
    slug: "the-decision-engine",
  },
  {
    id: "agentic-sdk",
    name: "Agentic SDK",
    subtitle: "Custom AI Agent Development for Business Automation",
    category: "citizen",
    rarity: "High Demand",
    description: "Scale your team without scaling headcount. Build custom AI agents for your domain.",
    hours: 22,
    modules: 7,
    price: { selfPaced: 997, cohort: 3997, founder: 9997 },
    slug: "agentic-sdk",
  },
  {
    id: "vibe-marketing",
    name: "Vibe Marketing",
    subtitle: "AI-Powered Marketing Systems That Scale",
    category: "citizen",
    rarity: "Flagship",
    description: "Replace your entire marketing stack with AI agents. Marketing that runs while you sleep.",
    hours: 35,
    modules: 11,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "vibe-marketing",
  },
  {
    id: "ai-native-university",
    name: "The AI-Native University",
    subtitle: "Transforming Educational Institutions with AI Infrastructure",
    category: "citizen",
    description: "Lead the future of education. Design AI-enhanced curricula and policies.",
    hours: 24,
    modules: 8,
    price: { selfPaced: 997, cohort: 3997, founder: 9997 },
    slug: "the-ai-native-university",
  },
  {
    id: "token-economy",
    name: "The Token Economy",
    subtitle: "Architecting the Future of Value",
    category: "citizen",
    rarity: "High Demand",
    description: "Design, build, and launch successful token-based ecosystems. From tokenomics to DAOs to community building.",
    hours: 28,
    modules: 10,
    price: { selfPaced: 997, cohort: 3997, founder: 9997 },
    slug: "the-token-economy",
  },
];

const rarityColors: Record<string, string> = {
  "Extremely Rare": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Cutting Edge": "bg-red-500/10 text-red-600 dark:text-red-400",
  "Frontier AI": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Flagship": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Very Rare": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "High Demand": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export default function CatalogNew() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  // Show 6 courses initially, or all if showAll is true
  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

  return (
    <section ref={ref} id="catalog" className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            21 Masterclasses Across 2 Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Choose Your Path to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Mastery
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
            From building LLMs to launching sovereign infrastructure—each course creates lasting competitive advantage.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 ${activeCategory === cat.id ? "text-white dark:text-slate-900" : ""}`}>
                {cat.name}
                <span className={`text-xs ${activeCategory === cat.id ? "opacity-70" : "text-slate-400 dark:text-white/40"}`}>
                  ({cat.count})
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCourses.map((course, i) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Rarity Badge */}
                {course.rarity && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${rarityColors[course.rarity]}`}>
                      {course.rarity}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-20">
                    {course.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {course.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-white/60 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-white/40 mb-6">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.hours}h
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      {course.modules} modules
                    </span>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="text-center p-2 rounded-lg bg-slate-100 dark:bg-slate-700/50">
                      <p className="text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-wider mb-0.5">Self-Paced</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">${course.price.selfPaced}</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 relative">
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-blue-500 text-white text-[8px] font-bold rounded-full uppercase">Popular</span>
                      <p className="text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">Cohort</p>
                      <p className="text-sm font-bold text-blue-600 dark:text-blue-400">${course.price.cohort.toLocaleString()}</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-amber-500/10">
                      <p className="text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-0.5">Founder</p>
                      <p className="text-sm font-bold text-amber-600 dark:text-amber-400">${course.price.founder.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="block w-full text-center py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {filteredCourses.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-medium hover:border-slate-400 dark:hover:border-white/40 transition-colors"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show All {filteredCourses.length} Courses
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
