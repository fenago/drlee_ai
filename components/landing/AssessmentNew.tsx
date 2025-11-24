"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  subtitle?: string;
  multiSelect?: boolean;
  options: {
    label: string;
    description: string;
    tags: string[];
  }[];
}

const questions: Question[] = [
  {
    id: "role",
    question: "What best describes your current role?",
    options: [
      {
        label: "Software Engineer / Developer",
        description: "I write code professionally and build software systems",
        tags: ["technical", "engineer"],
      },
      {
        label: "Founder / CEO / Product Leader",
        description: "I lead product decisions and build companies or teams",
        tags: ["founder", "product"],
      },
      {
        label: "Marketing / Growth Professional",
        description: "I drive growth, marketing, and customer acquisition",
        tags: ["marketing", "growth"],
      },
      {
        label: "Educator / Academic",
        description: "I teach, train, or lead educational initiatives",
        tags: ["education", "academic"],
      },
      {
        label: "Operations / Business Leader",
        description: "I optimize processes and make strategic decisions",
        tags: ["operations", "citizen"],
      },
    ],
  },
  {
    id: "goal",
    question: "What's your primary goal with AI?",
    options: [
      {
        label: "Build AI Systems from Scratch",
        description: "Implement transformers, train models, own my AI infrastructure",
        tags: ["technical", "engineer", "deep"],
      },
      {
        label: "Ship AI-Powered Products Fast",
        description: "Build products that leverage AI to win in the market",
        tags: ["founder", "product", "ship"],
      },
      {
        label: "Automate & Scale Operations",
        description: "10x productivity with AI agents and automation",
        tags: ["operations", "citizen", "automation"],
      },
      {
        label: "Transform Marketing & Growth",
        description: "Build autonomous content and campaign engines",
        tags: ["marketing", "growth", "content"],
      },
      {
        label: "Lead AI Transformation in Education",
        description: "Bring AI literacy and tools to students and faculty",
        tags: ["education", "academic", "leadership"],
      },
      {
        label: "Build in Web3 / Tokenomics",
        description: "Create token economies, DAOs, and decentralized systems",
        tags: ["web3", "blockchain", "tokens"],
      },
    ],
  },
  {
    id: "coding",
    question: "How comfortable are you with programming?",
    options: [
      {
        label: "Very Comfortable",
        description: "I write code daily and can pick up new languages quickly",
        tags: ["technical", "engineer"],
      },
      {
        label: "Comfortable with AI Assistance",
        description: "I can code with tools like Cursor, Copilot, or Claude",
        tags: ["citizen", "assisted"],
      },
      {
        label: "Learning / Beginner",
        description: "I understand code concepts but don't write code regularly",
        tags: ["citizen", "learning"],
      },
      {
        label: "Not My Focus",
        description: "I prefer no-code tools or working with technical teams",
        tags: ["citizen", "nocode"],
      },
    ],
  },
  {
    id: "ml-experience",
    question: "What's your experience with machine learning?",
    options: [
      {
        label: "Advanced - I've Trained Models",
        description: "I've used PyTorch, TensorFlow, or trained custom models",
        tags: ["technical", "ml-advanced", "deep"],
      },
      {
        label: "Intermediate - API & Fine-Tuning",
        description: "I've used ML APIs and done some fine-tuning or prompt engineering",
        tags: ["technical", "ml-intermediate"],
      },
      {
        label: "Beginner - Learning Concepts",
        description: "I understand ML concepts but haven't implemented much",
        tags: ["citizen", "ml-beginner"],
      },
      {
        label: "New to ML",
        description: "I'm interested in AI but haven't worked with ML directly",
        tags: ["citizen", "ml-new"],
      },
    ],
  },
  {
    id: "industry",
    question: "What's your primary context?",
    options: [
      {
        label: "Startup / Building a Company",
        description: "Moving fast, need competitive AI advantages",
        tags: ["founder", "startup", "ship"],
      },
      {
        label: "Enterprise / Corporate",
        description: "Large organization with compliance and scale needs",
        tags: ["operations", "enterprise"],
      },
      {
        label: "Agency / Consulting",
        description: "Building AI solutions for multiple clients",
        tags: ["founder", "agency"],
      },
      {
        label: "Education / Academic Institution",
        description: "University, school, or training organization",
        tags: ["education", "academic"],
      },
      {
        label: "Web3 / Crypto / DAO",
        description: "Building in the decentralized ecosystem",
        tags: ["web3", "blockchain"],
      },
      {
        label: "Personal Projects / Career Growth",
        description: "Learning to advance my skills and career",
        tags: ["learning", "career"],
      },
    ],
  },
  {
    id: "interests",
    question: "Which topics interest you most?",
    subtitle: "Select all that apply",
    multiSelect: true,
    options: [
      {
        label: "LLMs & Transformers",
        description: "Build language models from scratch",
        tags: ["llm", "technical"],
      },
      {
        label: "AI Agents & Automation",
        description: "Autonomous systems that work for you",
        tags: ["agents", "automation"],
      },
      {
        label: "Image & Video Generation",
        description: "Diffusion models, Midjourney-style AI",
        tags: ["diffusion", "visual"],
      },
      {
        label: "RAG & Knowledge Systems",
        description: "AI that understands your data",
        tags: ["rag", "knowledge"],
      },
      {
        label: "Marketing & Content",
        description: "Autonomous growth engines",
        tags: ["marketing", "content"],
      },
      {
        label: "Tokenomics & Web3",
        description: "Digital economies and DAOs",
        tags: ["web3", "tokens"],
      },
    ],
  },
  {
    id: "time",
    question: "How much time can you dedicate per week?",
    options: [
      {
        label: "15+ Hours / Week",
        description: "Full commitment to deep learning",
        tags: ["intensive", "deep"],
      },
      {
        label: "8-15 Hours / Week",
        description: "Serious but balanced commitment",
        tags: ["moderate"],
      },
      {
        label: "4-8 Hours / Week",
        description: "Consistent learning alongside other work",
        tags: ["balanced"],
      },
      {
        label: "2-4 Hours / Week",
        description: "Efficient, focused learning sessions",
        tags: ["efficient", "citizen"],
      },
    ],
  },
  {
    id: "scope",
    question: "What level of investment are you considering?",
    options: [
      {
        label: "Full Curriculum Access",
        description: "I want access to everything - all 21 masterclasses",
        tags: ["full-catalog", "all-access"],
      },
      {
        label: "Focused Learning Path",
        description: "A curated bundle of courses for my goals",
        tags: ["bundle", "focused"],
      },
      {
        label: "Start with One Course",
        description: "Begin with a single course to test the waters",
        tags: ["single", "starter"],
      },
      {
        label: "Exploring Options",
        description: "Still deciding what's right for me",
        tags: ["exploring"],
      },
    ],
  },
];

// Path definitions with course and bundle recommendations
interface Path {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bundle: {
    name: string;
    price: string;
    courses: number;
  } | null;
  courses: {
    name: string;
    slug: string;
    reason: string;
  }[];
  ctaText: string;
  ctaHref: string;
}

const paths: Record<string, Path> = {
  "ai-engineer": {
    id: "ai-engineer",
    title: "AI Engineer Path",
    subtitle: "Build AI from First Principles",
    description: "Your technical depth and ML experience make you ready to build AI systems from scratch. You'll master transformers, train your own models, and create the kind of proprietary AI that gives companies a technical moat.",
    color: "from-blue-600 to-purple-600",
    bundle: {
      name: "AI Engineer Complete",
      price: "$4,997",
      courses: 14,
    },
    courses: [
      { name: "Large Language Models", slug: "large-language-models", reason: "Build transformers from scratch" },
      { name: "Reasoning Models", slug: "reasoning-models", reason: "Create AI that thinks step-by-step" },
      { name: "Frontier Model Architecture", slug: "frontier-model-architecture", reason: "Build ChatGPT-class systems" },
      { name: "Deep Learning Intuition", slug: "deep-learning-intuition", reason: "Master neural networks deeply" },
      { name: "Multi-Agent Systems", slug: "multi-agent-systems", reason: "Orchestrate AI teams" },
    ],
    ctaText: "Explore AI Engineer Path",
    ctaHref: "#catalog",
  },
  "ai-founder": {
    id: "ai-founder",
    title: "AI Product Founder Path",
    subtitle: "Ship AI Products That Win",
    description: "You're focused on shipping products and building competitive advantages. The Founder's Stack gives you the core AI capabilities—LLMs, reasoning, agents—to build products that dominate your market.",
    color: "from-amber-500 to-orange-600",
    bundle: {
      name: "Founder's AI Stack",
      price: "$2,997",
      courses: 6,
    },
    courses: [
      { name: "Large Language Models", slug: "large-language-models", reason: "Own your AI, don't rent it" },
      { name: "Agentic Systems", slug: "agentic-systems", reason: "Build autonomous AI workers" },
      { name: "The AI Product Factory", slug: "the-ai-product-factory", reason: "Ship production apps fast" },
      { name: "Reasoning Models", slug: "reasoning-models", reason: "AI that solves complex problems" },
      { name: "Multi-Agent Systems", slug: "multi-agent-systems", reason: "Scale with AI teams" },
    ],
    ctaText: "Explore Founder's Stack",
    ctaHref: "#catalog",
  },
  "citizen-developer": {
    id: "citizen-developer",
    title: "Citizen Developer Path",
    subtitle: "Build with AI, Not Just Use It",
    description: "You don't need to write complex code to build powerful AI solutions. Master no-code automation, AI agents, and operational intelligence to 10x your productivity and scale without hiring.",
    color: "from-emerald-500 to-teal-500",
    bundle: null,
    courses: [
      { name: "Agentic Automation", slug: "agentic-automation", reason: "Reclaim 20 hours per week" },
      { name: "The Decision Engine", slug: "the-decision-engine", reason: "Make data-driven decisions" },
      { name: "Agentic SDK", slug: "agentic-sdk", reason: "Build virtual employees" },
      { name: "Predictive Insight", slug: "predictive-insight", reason: "See the future in your data" },
    ],
    ctaText: "Explore Citizen Developer Courses",
    ctaHref: "#catalog",
  },
  "ai-educator": {
    id: "ai-educator",
    title: "AI Educator Path",
    subtitle: "Lead the Future of Learning",
    description: "Education is being transformed by AI, and you're positioned to lead that change. Learn to design AI-enhanced curricula, implement ethical policies, and prepare institutions for an AI-native future.",
    color: "from-indigo-500 to-blue-600",
    bundle: null,
    courses: [
      { name: "The AI-Native University", slug: "the-ai-native-university", reason: "Transform your institution" },
      { name: "Agentic Automation", slug: "agentic-automation", reason: "Automate administrative tasks" },
      { name: "The Decision Engine", slug: "the-decision-engine", reason: "Measure learning outcomes" },
      { name: "Machine Learning Intuition", slug: "machine-learning-intuition", reason: "Teach AI foundations" },
    ],
    ctaText: "Explore Educator Path",
    ctaHref: "#catalog",
  },
  "growth-marketer": {
    id: "growth-marketer",
    title: "Growth Marketing Path",
    subtitle: "Build Autonomous Growth Engines",
    description: "Marketing is being revolutionized by AI. Build systems that create content, manage campaigns, and optimize growth—all running autonomously while you focus on strategy.",
    color: "from-pink-500 to-rose-600",
    bundle: null,
    courses: [
      { name: "Vibe Marketing", slug: "vibe-marketing", reason: "Autonomous content & campaigns" },
      { name: "Agentic Automation", slug: "agentic-automation", reason: "Automate marketing workflows" },
      { name: "The Decision Engine", slug: "the-decision-engine", reason: "A/B test everything" },
      { name: "Predictive Insight", slug: "predictive-insight", reason: "Predict customer behavior" },
    ],
    ctaText: "Explore Growth Marketing Path",
    ctaHref: "#catalog",
  },
  "web3-builder": {
    id: "web3-builder",
    title: "Web3 Builder Path",
    subtitle: "Architect the Future of Value",
    description: "You're building in the decentralized ecosystem where AI meets tokenomics. Master the economics, governance, and technology of token-based systems and DAOs.",
    color: "from-violet-500 to-purple-600",
    bundle: null,
    courses: [
      { name: "The Token Economy", slug: "the-token-economy", reason: "Design sustainable tokenomics" },
      { name: "Agentic SDK", slug: "agentic-sdk", reason: "Build AI-powered DAOs" },
      { name: "Multi-Agent Systems", slug: "multi-agent-systems", reason: "Decentralized agent networks" },
      { name: "Agentic Automation", slug: "agentic-automation", reason: "Automate DeFi operations" },
    ],
    ctaText: "Explore Web3 Path",
    ctaHref: "#catalog",
  },
  "full-stack-ai": {
    id: "full-stack-ai",
    title: "Full Stack AI Leader",
    subtitle: "Master Everything We Teach",
    description: "You want comprehensive AI mastery. With access to all 21 masterclasses, you'll have the complete toolkit—from deep technical implementation to operational automation to emerging domains like Web3.",
    color: "from-slate-700 to-slate-900",
    bundle: {
      name: "Full Catalog Access",
      price: "$6,997",
      courses: 21,
    },
    courses: [
      { name: "Large Language Models", slug: "large-language-models", reason: "The foundation of modern AI" },
      { name: "Agentic Systems", slug: "agentic-systems", reason: "Autonomous AI workers" },
      { name: "Vibe Marketing", slug: "vibe-marketing", reason: "Autonomous growth engines" },
      { name: "The Token Economy", slug: "the-token-economy", reason: "Future of digital value" },
      { name: "The AI-Native University", slug: "the-ai-native-university", reason: "Lead AI in education" },
    ],
    ctaText: "Get Full Catalog Access",
    ctaHref: "#pricing",
  },
};

export default function AssessmentNew() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleAnswer = (questionId: string, tags: string[], isMultiSelect: boolean) => {
    const currentTags = answers[questionId] || [];
    let newTags: string[];

    if (isMultiSelect) {
      // Toggle selection for multi-select
      const hasTag = tags.some(t => currentTags.includes(t));
      if (hasTag) {
        newTags = currentTags.filter(t => !tags.includes(t));
      } else {
        newTags = [...currentTags, ...tags];
      }
      setAnswers({ ...answers, [questionId]: newTags });
    } else {
      // Single select - move to next question
      newTags = tags;
      setAnswers({ ...answers, [questionId]: newTags });

      if (currentQuestion < questions.length - 1) {
        setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
      } else {
        setTimeout(() => setShowResult(true), 300);
      }
    }
  };

  const handleMultiSelectNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = (): Path => {
    // Collect all tags from answers
    const allTags = Object.values(answers).flat();

    // Score each path based on tag matches
    const scores: Record<string, number> = {
      "ai-engineer": 0,
      "ai-founder": 0,
      "citizen-developer": 0,
      "ai-educator": 0,
      "growth-marketer": 0,
      "web3-builder": 0,
      "full-stack-ai": 0,
    };

    // AI Engineer scoring
    if (allTags.includes("technical")) scores["ai-engineer"] += 3;
    if (allTags.includes("engineer")) scores["ai-engineer"] += 3;
    if (allTags.includes("ml-advanced")) scores["ai-engineer"] += 4;
    if (allTags.includes("ml-intermediate")) scores["ai-engineer"] += 2;
    if (allTags.includes("deep")) scores["ai-engineer"] += 3;
    if (allTags.includes("llm")) scores["ai-engineer"] += 2;
    if (allTags.includes("intensive")) scores["ai-engineer"] += 2;

    // AI Founder scoring
    if (allTags.includes("founder")) scores["ai-founder"] += 4;
    if (allTags.includes("product")) scores["ai-founder"] += 3;
    if (allTags.includes("startup")) scores["ai-founder"] += 3;
    if (allTags.includes("ship")) scores["ai-founder"] += 3;
    if (allTags.includes("agency")) scores["ai-founder"] += 2;
    if (allTags.includes("technical")) scores["ai-founder"] += 1;
    if (allTags.includes("agents")) scores["ai-founder"] += 2;

    // Citizen Developer scoring
    if (allTags.includes("citizen")) scores["citizen-developer"] += 3;
    if (allTags.includes("operations")) scores["citizen-developer"] += 3;
    if (allTags.includes("automation")) scores["citizen-developer"] += 3;
    if (allTags.includes("nocode")) scores["citizen-developer"] += 4;
    if (allTags.includes("assisted")) scores["citizen-developer"] += 2;
    if (allTags.includes("ml-new")) scores["citizen-developer"] += 2;
    if (allTags.includes("efficient")) scores["citizen-developer"] += 2;

    // AI Educator scoring
    if (allTags.includes("education")) scores["ai-educator"] += 5;
    if (allTags.includes("academic")) scores["ai-educator"] += 5;
    if (allTags.includes("leadership")) scores["ai-educator"] += 2;

    // Growth Marketer scoring
    if (allTags.includes("marketing")) scores["growth-marketer"] += 5;
    if (allTags.includes("growth")) scores["growth-marketer"] += 4;
    if (allTags.includes("content")) scores["growth-marketer"] += 3;

    // Web3 Builder scoring
    if (allTags.includes("web3")) scores["web3-builder"] += 5;
    if (allTags.includes("blockchain")) scores["web3-builder"] += 5;
    if (allTags.includes("tokens")) scores["web3-builder"] += 4;

    // Full Stack AI scoring
    if (allTags.includes("full-catalog")) scores["full-stack-ai"] += 10;
    if (allTags.includes("all-access")) scores["full-stack-ai"] += 10;

    // Add interest-based bonuses
    if (allTags.includes("diffusion")) scores["ai-engineer"] += 2;
    if (allTags.includes("rag")) scores["ai-engineer"] += 1;
    if (allTags.includes("knowledge")) scores["ai-founder"] += 1;
    if (allTags.includes("visual")) scores["ai-engineer"] += 1;

    // Find highest scoring path
    let highestScore = 0;
    let bestPath = "citizen-developer";

    for (const [pathId, score] of Object.entries(scores)) {
      if (score > highestScore) {
        highestScore = score;
        bestPath = pathId;
      }
    }

    return paths[bestPath];
  };

  const resetAssessment = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? calculateResult() : null;
  const currentQ = questions[currentQuestion];
  const isMultiSelect = currentQ?.multiSelect || false;
  const currentSelections = answers[currentQ?.id] || [];

  return (
    <section
      ref={ref}
      id="assessment"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden"
    >
      {/* Background Pattern */}
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
          {!started ? (
            /* Intro Screen */
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                Personalized Learning Path
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Discover Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  AI Learning Path
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto mb-10">
                Answer 8 quick questions and get personalized course and bundle recommendations
                based on your role, experience, and goals.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {["AI Engineer", "Founder", "Educator", "Marketer", "Web3 Builder", "Citizen Developer"].map((path) => (
                  <span key={path} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white/60 text-sm">
                    {path}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setStarted(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-lg hover:scale-105 transition-transform"
              >
                Start Assessment
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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

              <p className="mt-6 text-sm text-slate-500 dark:text-white/40">
                No email required. Get your personalized results instantly.
              </p>
            </motion.div>
          ) : !showResult ? (
            /* Questions */
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-500 dark:text-white/50 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-emerald-500"
                    initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  {currentQ.question}
                </h3>
                {currentQ.subtitle && (
                  <p className="mt-2 text-slate-500 dark:text-white/50">{currentQ.subtitle}</p>
                )}
              </div>

              {/* Options */}
              <div className={`grid gap-3 ${currentQ.options.length > 4 ? "md:grid-cols-2" : ""}`}>
                {currentQ.options.map((option, i) => {
                  const isSelected = option.tags.some(t => currentSelections.includes(t));
                  return (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleAnswer(currentQ.id, option.tags, isMultiSelect)}
                      className={`w-full p-5 rounded-2xl border-2 text-left transition-all group ${
                        isSelected
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-500/10"
                          : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-500/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-blue-500 bg-blue-500"
                            : "border-slate-300 dark:border-slate-600 group-hover:border-blue-400"
                        }`}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className={`font-semibold text-lg transition-colors ${
                            isSelected ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"
                          }`}>
                            {option.label}
                          </p>
                          <p className="text-slate-600 dark:text-white/60 text-sm mt-1">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Multi-select continue button */}
              {isMultiSelect && (
                <div className="mt-6 text-center">
                  <button
                    onClick={handleMultiSelectNext}
                    disabled={currentSelections.length === 0}
                    className={`px-8 py-3 rounded-full font-semibold transition-all ${
                      currentSelections.length > 0
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    Continue ({currentSelections.length} selected)
                  </button>
                </div>
              )}

              {/* Back Button */}
              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="mt-6 text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/70 text-sm flex items-center gap-2 mx-auto"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous question
                </button>
              )}
            </motion.div>
          ) : (
            /* Results */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Result Badge */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-medium mb-6 bg-gradient-to-r ${result?.color}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Your Recommended Path
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                  {result?.title}
                </h2>
                <p className={`text-xl font-medium mb-4 bg-gradient-to-r ${result?.color} bg-clip-text text-transparent`}>
                  {result?.subtitle}
                </p>
                <p className="text-lg text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
                  {result?.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Bundle Recommendation */}
                {result?.bundle && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`rounded-3xl p-6 border-2 bg-gradient-to-br ${result.color} text-white`}
                  >
                    <p className="text-white/80 text-sm uppercase tracking-wider mb-2">
                      Recommended Bundle
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{result.bundle.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold">{result.bundle.price}</span>
                      <span className="text-white/70">• {result.bundle.courses} courses</span>
                    </div>
                    <Link
                      href="#pricing"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-white/90 transition-colors"
                    >
                      View Bundle Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                )}

                {/* Course Recommendations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`rounded-3xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 ${!result?.bundle ? "md:col-span-2" : ""}`}
                >
                  <p className="text-slate-500 dark:text-white/50 text-sm uppercase tracking-wider mb-4">
                    Recommended Courses For You
                  </p>
                  <ul className="space-y-3">
                    {result?.courses.map((course, i) => (
                      <li key={i}>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                        >
                          <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {course.name}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-white/50">{course.reason}</p>
                          </div>
                          <svg className="w-4 h-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={result?.ctaHref || "#catalog"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
                >
                  {result?.ctaText}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <button
                  onClick={resetAssessment}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Retake Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
