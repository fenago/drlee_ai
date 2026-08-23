"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Categories
export const categories = [
  { id: "all", name: "All Masterclasses", count: 32 },
  { id: "hardcore", name: "Hardcore Developers", count: 26 },
  { id: "citizen", name: "Citizen Developer", count: 6 },
];

// All masterclasses - synced with lib/courses.ts. Exported so the
// dedicated /catalog hub renders the same source of truth.
export const courses = [
  // HARDCORE DEVELOPERS (12)
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
    subtitle: "Create AI That Thinks Before it Answers—Stop Using AI, Start Owning It",
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
    name: "Build Your Own Frontier AI",
    subtitle: "Master Mixture-of-Experts, Advanced Attention, 64x Efficiency—Own Production-Grade AI",
    category: "hardcore",
    rarity: "Extremely Rare",
    description: "The ONLY masterclass teaching you to build production-grade frontier AI systems from scratch—cut API costs 90%, own your stack, stop renting from OpenAI.",
    hours: 55,
    modules: 10,
    price: { selfPaced: 1997, cohort: 6997, founder: 19997 },
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
    name: "Build Your Own Autonomous AI Agent",
    subtitle: "The Agent Architecture Blueprint™ — Own Your Infrastructure, Not Frameworks",
    category: "hardcore",
    rarity: "Very Rare",
    description: "Build agent systems from first principles—ReAct loops, tool orchestration, memory systems, multi-agent coordination. Framework users are commoditized. Infrastructure builders are irreplaceable.",
    hours: 45,
    modules: 9,
    price: { selfPaced: 1997, cohort: 6997, founder: 19997 },
    slug: "agentic-systems",
  },
  {
    id: "multi-agent",
    name: "Build Your Own Multi-Agent AI Teams",
    subtitle: "Train Agent Swarms That Collaborate at Scale—Own Your AI Workforce",
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
    id: "slm",
    name: "Build Your Own Domain Specific Small Language Model (SLM)",
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
    name: "Professional Vibe Coding with Claude Code",
    subtitle: "Build AI-Augmented Development Infrastructure—Own Your Productivity, Stop Renting",
    category: "hardcore",
    description: "Code 10x faster without losing quality. Master AI pair programming.",
    hours: 20,
    modules: 7,
    price: { selfPaced: 697, cohort: 2497, founder: 6997 },
    slug: "the-10x-developer",
  },
  {
    id: "ai-alignment",
    name: "AI Alignment and RLHF",
    subtitle: "The AI Alignment Mastery System™ — Build Models That Do What You Want",
    category: "hardcore",
    rarity: "High Demand",
    description: "Master RLHF, DPO, and constitutional AI to build aligned models that reliably do what they're supposed to—the expertise separating $180K API users from $350K alignment architects.",
    hours: 45,
    modules: 9,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "ai-alignment",
  },
  {
    id: "context-engine",
    name: "Master Context Engineering",
    subtitle: "Stop AI Hallucinations at the Source — the #1 Skill Behind Reliable AI",
    category: "hardcore",
    rarity: "Cutting Edge",
    description: "Your agents don't fail because the model is weak. They fail because you fed them the wrong context.",
    hours: 35,
    modules: 7,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "context-engine",
  },
  {
    id: "gpu-kernels",
    name: "Make AI Run 10x Faster",
    subtitle: "Write the GPU Code Frontier Labs Fight to Hire — No CUDA Required",
    category: "hardcore",
    rarity: "Extremely Rare",
    description: "Everyone can call PyTorch. Almost nobody can write the kernels underneath it. Build FlashAttention from scratch.",
    hours: 40,
    modules: 8,
    price: { selfPaced: 1997, cohort: 6997, founder: 19997 },
    slug: "gpu-kernels",
  },
  {
    id: "evaluation-stack",
    name: "Prove Your AI Works",
    subtitle: "Master AI Evaluation — the Skill Every Enterprise Is Desperate to Hire",
    category: "hardcore",
    rarity: "High Demand",
    description: "The engineers who can PROVE their AI works are the ones enterprises fight to hire.",
    hours: 30,
    modules: 8,
    price: { selfPaced: 1197, cohort: 4997, founder: 12997 },
    slug: "evaluation-stack",
  },
  {
    id: "bulletproof-ai",
    name: "From Prototype to Production",
    subtitle: "The Reliability Engineering That Turns AI Demos Into Products You Can Trust",
    category: "hardcore",
    rarity: "High Demand",
    description: "The demo took a weekend. Production is where AI products die. Master the reliability engineering that ships.",
    hours: 40,
    modules: 11,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "bulletproof-ai",
  },
  {
    id: "agent-playbook",
    name: "The Agent Playbook",
    subtitle: "20+ Battle-Tested Design Patterns—Stop Building Agents by Trial and Error",
    category: "hardcore",
    rarity: "Cutting Edge",
    description: "Most agents are built by trial and error. Yours won't be. Master the pattern language of production agents.",
    hours: 30,
    modules: 7,
    price: { selfPaced: 1197, cohort: 4997, founder: 12997 },
    slug: "agent-playbook",
  },
  {
    id: "agent-matrix",
    name: "The Agent Architecture Matrix",
    subtitle: "7 Cognitive Functions × 6 Topologies—Design, Budget, and Govern Agents That Ship",
    category: "hardcore",
    rarity: "Very Rare",
    description: "What do you do with an agent that 'almost works'? Diagnose it on a matrix and fix it systematically.",
    hours: 30,
    modules: 7,
    price: { selfPaced: 1197, cohort: 4997, founder: 12997 },
    slug: "agent-architecture-matrix",
  },
  {
    id: "model-surgery",
    name: "Model Surgery",
    subtitle: "Prune, Distill, and Rewire Open Models—Cut 90% of the Cost, Keep the Intelligence",
    category: "hardcore",
    rarity: "Extremely Rare",
    description: "General-purpose models carry billions of parameters you never use. Cut them out—surgically.",
    hours: 40,
    modules: 10,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "model-surgery",
  },
  {
    id: "ai-red-team",
    name: "Build Your Own AI Red Team",
    subtitle: "AI-Powered Security Agents—Understand Tomorrow's Attacks, Automate Today's Defenses",
    category: "hardcore",
    rarity: "Very Rare",
    description: "Attackers are already weaponizing AI agents. Learn to build the same capabilities under proper authorization.",
    hours: 35,
    modules: 8,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "ai-red-team",
  },
  {
    id: "digital-twin",
    name: "Build Your Own Digital Twin",
    subtitle: "From Sensors to Simulation—Create Living Virtual Replicas of Real-World Systems",
    category: "hardcore",
    rarity: "High Demand",
    description: "The physical world is going virtual. Build the living, sensor-fed replicas that let companies predict without touching the real thing.",
    hours: 40,
    modules: 10,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "digital-twin",
  },
  {
    id: "ai-data-engineer",
    name: "The AI-Native Data Engineer",
    subtitle: "Put LLMs to Work Inside Your Pipelines—Automate the Grind, Own the Insight",
    category: "hardcore",
    rarity: "High Demand",
    description: "Every model you build is only as good as the data feeding it. Weave LLMs directly into your pipelines.",
    hours: 25,
    modules: 7,
    price: { selfPaced: 997, cohort: 3997, founder: 9997 },
    slug: "ai-native-data-engineer",
  },
  {
    id: "decode-codebase",
    name: "Decode Any Codebase with AI",
    subtitle: "10 Timeless Mental Models to Map, Understand, and Ship Into Any Codebase in Hours",
    category: "hardcore",
    rarity: "Medium",
    description: "Working with code you didn't write is now the default. Map any codebase in under an hour—and ship a real change the same day.",
    hours: 20,
    modules: 7,
    price: { selfPaced: 697, cohort: 2497, founder: 6997 },
    slug: "decode-any-codebase",
  },
  {
    id: "ship-ready",
    name: "Ship-Ready: Full-Spectrum AI Development",
    subtitle: "Beyond Vibe Coding—Turn AI-Generated Code Into Production Systems You Can Trust",
    category: "hardcore",
    rarity: "Medium",
    description: "AI-generated code that 'just works' is often hiding technical debt and slow-burn bugs. Learn the full-spectrum process.",
    hours: 25,
    modules: 8,
    price: { selfPaced: 997, cohort: 3997, founder: 9997 },
    slug: "ship-ready-ai-development",
  },
  {
    id: "rlhf",
    name: "Teach Your AI What Humans Want",
    subtitle: "The RLHF Post-Training Stack™ — Build the Alignment Layer Behind Every Frontier Model",
    category: "hardcore",
    rarity: "Cutting Edge",
    description: "Pretraining gives a model knowledge. RLHF gives it judgment. Build the post-training layer behind every frontier model.",
    hours: 40,
    modules: 9,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "human-feedback-alignment",
  },
  {
    id: "llm-customization",
    name: "Make the Model Yours",
    subtitle: "The Complete Customization Playbook — Turn a Generic LLM Into Your Business's Unfair Advantage",
    category: "hardcore",
    rarity: "High Demand",
    description: "A generic model is a commodity your competitors rent too. Make one that knows your business, respects your budget, and stays reliable in production.",
    hours: 35,
    modules: 8,
    price: { selfPaced: 1497, cohort: 5997, founder: 17997 },
    slug: "make-the-model-yours",
  },

  // CITIZEN DEVELOPER (3)
  {
    id: "agentic-sdk",
    name: "Build Your Own Synthetic Employees",
    subtitle: "Build Your AI Team That Works Together 24/7",
    category: "citizen",
    rarity: "Flagship",
    description: "Build a team of synthetic employees (Legal Advisor, Financial Analyst, Operations Manager) that collaborate to provide expert decision support—replacing $200K-$500K in consultant spend while scaling infinitely without hiring.",
    hours: 45,
    modules: 9,
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
  {
    id: "ai-decision-makers",
    name: "AI for Decision Makers",
    subtitle: "Lead Smarter. Decide Faster. Amplify What Matters.",
    category: "citizen",
    rarity: "Flagship",
    description: "A 2-day hands-on experience that gives organizational leaders the clarity, confidence, and practical tools to use AI as a force multiplier for the decisions that drive your mission forward.",
    hours: 16,
    modules: 9,
    price: { selfPaced: 1497, cohort: 3997, founder: 14997 },
    slug: "ai-for-decision-makers",
  },
  {
    id: "private-ai-lab",
    name: "Your Private AI Lab",
    subtitle: "Run Powerful AI Entirely on Your Own Machine—Free Forever, Zero Data Leaving",
    category: "citizen",
    rarity: "Flagship",
    description: "Stop paying subscription fees and sending your data to the cloud. Build your own private, offline ChatGPT.",
    hours: 15,
    modules: 7,
    price: { selfPaced: 497, cohort: 1997, founder: 6997 },
    slug: "private-ai-lab",
  },
  {
    id: "image-studio",
    name: "Your Own AI Image Studio",
    subtitle: "Make Stunning Images with Stable Diffusion—On Your Machine, On Your Terms",
    category: "citizen",
    rarity: "High Demand",
    description: "Anyone can make damn fine images with Stable Diffusion—no data science required.",
    hours: 15,
    modules: 7,
    price: { selfPaced: 497, cohort: 1997, founder: 6997 },
    slug: "ai-image-studio",
  },
];

export const rarityColors: Record<string, string> = {
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
    <section ref={ref} id="catalog" className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            32 Masterclasses Across 2 Categories
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

        {/* Full catalog hub link */}
        <div className="mt-6 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
          >
            Browse the full catalog — all 32 masterclasses, filterable
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
