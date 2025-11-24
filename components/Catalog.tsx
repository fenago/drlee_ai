"use client";

import { useState } from "react";
import Link from "next/link";

// Full catalog of 26 courses organized by category with rich details
const categories = [
  {
    id: "hardcore",
    name: "Hardcore Developers",
    tagline: "Build AI from first principles",
    description: "14 masterclasses for engineers and founders who want to build—not just use—AI technology.",
    courses: [
      {
        id: "llm",
        name: "Large Language Models",
        subtitle: "Build Your Own ChatGPT from Scratch",
        rarity: "Extremely Rare",
        price: 2997,
        hook: "Stop paying OpenAI. Own your AI.",
        outcomes: ["Train transformer models from scratch", "Implement attention mechanisms", "Fine-tune on custom datasets", "Deploy production-ready LLMs"],
        hours: 40,
        modules: 12,
        technologies: ["PyTorch", "Transformers", "CUDA", "Hugging Face"],
      },
      {
        id: "reasoning",
        name: "Reasoning Models",
        subtitle: "Build AI That Solves Complex Problems",
        rarity: "Cutting Edge",
        price: 2497,
        hook: "Build AI that thinks, not just predicts.",
        outcomes: ["Implement chain-of-thought reasoning", "Build self-correcting systems", "Create multi-step problem solvers", "Achieve 10x better accuracy on complex tasks"],
        hours: 35,
        modules: 10,
        technologies: ["PyTorch", "LangChain", "Tree of Thought", "ReAct"],
      },
      {
        id: "moe",
        name: "Mixture of Experts (MoE)",
        subtitle: "Build AI That's 100x Cheaper to Run",
        rarity: "Extremely Rare",
        price: 2497,
        hook: "Enterprise-grade AI at startup costs.",
        outcomes: ["Implement sparse expert routing", "Build efficient inference pipelines", "Reduce compute costs by 90%+", "Scale to billions of parameters affordably"],
        hours: 30,
        modules: 9,
        technologies: ["PyTorch", "DeepSpeed", "Megatron", "CUDA"],
      },
      {
        id: "diffusion",
        name: "Diffusion Models",
        subtitle: "Build Your Own Midjourney from Scratch",
        rarity: "Extremely Rare",
        price: 2997,
        hook: "Own the visual AI your competitors rent.",
        outcomes: ["Train diffusion models from scratch", "Implement stable diffusion architecture", "Create custom image generators", "Build controllable generation pipelines"],
        hours: 45,
        modules: 14,
        technologies: ["PyTorch", "Stable Diffusion", "ControlNet", "LoRA"],
      },
      {
        id: "agentic",
        name: "Agentic Systems",
        subtitle: "Build an Autonomous AI Workforce",
        rarity: "Very Rare",
        price: 2497,
        hook: "Replace 10 employees with 1 agent.",
        outcomes: ["Design autonomous decision-making systems", "Implement tool use and function calling", "Build self-healing workflows", "Create agents that learn from mistakes"],
        hours: 35,
        modules: 11,
        technologies: ["LangChain", "AutoGPT", "CrewAI", "OpenAI Functions"],
      },
      {
        id: "multi-agent",
        name: "Multi-Agent Systems",
        subtitle: "Build a Collaborative AI Team",
        rarity: "Frontier AI",
        price: 2997,
        hook: "AI teams that outperform human teams.",
        outcomes: ["Orchestrate multiple AI agents", "Implement agent communication protocols", "Build hierarchical agent structures", "Create self-organizing AI systems"],
        hours: 40,
        modules: 12,
        technologies: ["AutoGen", "CrewAI", "LangGraph", "Agent Protocol"],
      },
      {
        id: "product-factory",
        name: "The AI Product Factory",
        subtitle: "Ship Production-Grade LLM Apps",
        price: 1997,
        hook: "From prototype to production in weeks.",
        outcomes: ["Build scalable LLM applications", "Implement proper error handling", "Create robust evaluation pipelines", "Deploy with confidence"],
        hours: 30,
        modules: 10,
        technologies: ["FastAPI", "LangChain", "Redis", "Docker"],
      },
      {
        id: "graphrag",
        name: "GraphRAG",
        subtitle: "Build AI That Truly Understands Your Data",
        rarity: "Very Rare",
        price: 1997,
        hook: "94% retrieval accuracy vs 72% with basic RAG.",
        outcomes: ["Build knowledge graphs from unstructured data", "Implement graph-based retrieval", "Create context-aware responses", "Handle complex multi-hop queries"],
        hours: 28,
        modules: 9,
        technologies: ["Neo4j", "LangChain", "NetworkX", "ChromaDB"],
      },
      {
        id: "ml-intuition",
        name: "Machine Learning Intuition",
        subtitle: "First Principles of ML",
        price: 1797,
        hook: "The foundation everything else builds on.",
        outcomes: ["Understand ML algorithms intuitively", "Implement algorithms from scratch", "Debug models effectively", "Choose the right approach for any problem"],
        hours: 25,
        modules: 8,
        technologies: ["NumPy", "Scikit-learn", "Pandas", "Matplotlib"],
      },
      {
        id: "dl-intuition",
        name: "Deep Learning Intuition",
        subtitle: "First Principles of Neural Networks",
        price: 1997,
        hook: "See neural networks for what they really are.",
        outcomes: ["Build neural networks from scratch", "Understand backpropagation deeply", "Implement CNNs, RNNs, and more", "Debug and optimize architectures"],
        hours: 32,
        modules: 10,
        technologies: ["PyTorch", "TensorFlow", "NumPy", "CUDA basics"],
      },
      {
        id: "slm",
        name: "Small Language Models",
        subtitle: "Building Efficient, High-Performance AI",
        rarity: "High Demand",
        price: 1997,
        hook: "Run powerful AI on a laptop.",
        outcomes: ["Train efficient small models", "Implement knowledge distillation", "Optimize for edge deployment", "Achieve big-model quality at small-model cost"],
        hours: 28,
        modules: 9,
        technologies: ["Llama.cpp", "GGUF", "Quantization", "ONNX"],
      },
      {
        id: "fine-tuning",
        name: "The Art of Adaptation",
        subtitle: "Fine-Tuning LLMs for Specialized Tasks",
        price: 1997,
        hook: "Make any model an expert in your domain.",
        outcomes: ["Master LoRA and QLoRA techniques", "Create high-quality training datasets", "Evaluate fine-tuned models properly", "Deploy specialized models"],
        hours: 25,
        modules: 8,
        technologies: ["PEFT", "LoRA", "Axolotl", "Weights & Biases"],
      },
      {
        id: "10x-developer",
        name: "The 10x Developer",
        subtitle: "AI-Assisted Coding with Claude",
        price: 1497,
        hook: "Code 10x faster without losing quality.",
        outcomes: ["Master AI pair programming", "Build custom coding workflows", "Automate repetitive tasks", "Review and refactor with AI"],
        hours: 20,
        modules: 7,
        technologies: ["Claude", "Cursor", "GitHub Copilot", "Cody"],
      },
      {
        id: "automated-insights",
        name: "Automated Insights",
        subtitle: "Generative AI for Data Analytics",
        price: 1797,
        hook: "Turn data into decisions automatically.",
        outcomes: ["Build AI-powered analytics pipelines", "Generate insights from raw data", "Create natural language reports", "Automate data storytelling"],
        hours: 24,
        modules: 8,
        technologies: ["LangChain", "Pandas", "SQL", "Plotly"],
      },
    ]
  },
  {
    id: "citizen",
    name: "Citizen Developer",
    tagline: "AI power without code",
    description: "4 masterclasses for non-technical leaders who want to leverage AI to 10x their productivity.",
    courses: [
      {
        id: "agentic-automation",
        name: "Agentic Automation",
        subtitle: "Reclaim 20 Hours a Week with AI",
        price: 1497,
        hook: "Your personal AI workforce, no coding required.",
        outcomes: ["Automate repetitive workflows", "Build no-code AI agents", "Connect tools with AI orchestration", "Measure and optimize automation ROI"],
        hours: 18,
        modules: 6,
        technologies: ["Zapier AI", "Make.com", "n8n", "ChatGPT"],
      },
      {
        id: "predictive-insight",
        name: "Predictive Insight",
        subtitle: "An Intuitive Guide to Data Analytics",
        price: 1297,
        hook: "Predict the future with your data.",
        outcomes: ["Understand predictive models intuitively", "Build forecasting dashboards", "Make data-driven decisions", "Communicate insights effectively"],
        hours: 16,
        modules: 6,
        technologies: ["Excel AI", "Power BI", "ChatGPT", "Claude"],
      },
      {
        id: "decision-engine",
        name: "The Decision Engine",
        subtitle: "Win with Data-Driven A/B Testing",
        price: 1497,
        hook: "Stop guessing. Start knowing.",
        outcomes: ["Design proper experiments", "Analyze results statistically", "Make confident decisions", "Build a culture of experimentation"],
        hours: 15,
        modules: 5,
        technologies: ["Optimizely", "VWO", "Google Optimize", "Mixpanel"],
      },
      {
        id: "agentic-sdk",
        name: "Agentic SDK",
        subtitle: "Build Your Army of Virtual Employees",
        price: 1997,
        hook: "Scale your team without scaling headcount.",
        outcomes: ["Design AI agent architectures", "Build custom agent tools", "Orchestrate multi-agent workflows", "Deploy and monitor agents"],
        hours: 22,
        modules: 7,
        technologies: ["OpenAI API", "Claude API", "LangChain", "Zapier"],
      },
    ]
  },
  {
    id: "vibe",
    name: "Vibe Marketing",
    tagline: "Replace your SaaS stack",
    description: "Our flagship marketing masterclass—build an autonomous growth engine.",
    courses: [
      {
        id: "vibe-marketing",
        name: "Vibe Marketing",
        subtitle: "Build an Autonomous Growth Engine",
        rarity: "Flagship",
        price: 2997,
        hook: "Marketing that runs while you sleep.",
        outcomes: ["Build AI-powered content pipelines", "Automate social media completely", "Create personalized campaigns at scale", "Measure and optimize autonomously"],
        hours: 35,
        modules: 11,
        technologies: ["ChatGPT", "Jasper", "Buffer", "HubSpot"],
      },
    ]
  },
  {
    id: "career",
    name: "Career & Leadership",
    tagline: "Accelerate your trajectory",
    description: "6 masterclasses for ambitious professionals and entrepreneurs.",
    courses: [
      {
        id: "unfair-advantage",
        name: "The Unfair Advantage",
        subtitle: "Break into Tech from Any Background",
        price: 1297,
        hook: "Your background is a feature, not a bug.",
        outcomes: ["Craft your unique narrative", "Build a compelling portfolio", "Network strategically", "Negotiate top-tier offers"],
        hours: 15,
        modules: 6,
        technologies: ["LinkedIn", "GitHub", "Portfolio Sites", "Interview Prep"],
      },
      {
        id: "architect-interview",
        name: "The Architect's Interview",
        subtitle: "Win the System Design Round",
        price: 1497,
        hook: "Land the roles that pay $300K+.",
        outcomes: ["Master system design frameworks", "Handle any scale question", "Communicate technical decisions", "Stand out from other candidates"],
        hours: 20,
        modules: 8,
        technologies: ["System Design", "Distributed Systems", "Cloud Architecture", "Databases"],
      },
      {
        id: "engineering-diplomat",
        name: "The Engineering Diplomat",
        subtitle: "A Product Leader's Guide to Shipping Faster",
        price: 1497,
        hook: "Lead without authority. Ship without friction.",
        outcomes: ["Bridge engineering and product", "Influence without direct reports", "Resolve technical conflicts", "Accelerate team velocity"],
        hours: 18,
        modules: 6,
        technologies: ["Jira", "Notion", "Linear", "Stakeholder Management"],
      },
      {
        id: "sovereign-cloud",
        name: "The Sovereign Cloud",
        subtitle: "Build Your Own Private AWS",
        rarity: "Very Rare",
        price: 2497,
        hook: "Control your infrastructure destiny.",
        outcomes: ["Build private cloud infrastructure", "Implement Kubernetes at scale", "Create self-service platforms", "Achieve 99.99% uptime"],
        hours: 40,
        modules: 12,
        technologies: ["Kubernetes", "Terraform", "OpenStack", "Proxmox"],
      },
      {
        id: "sovereign-isp",
        name: "The Sovereign ISP",
        subtitle: "Build Your Own Internet Service Provider",
        rarity: "Extremely Rare",
        price: 1997,
        hook: "Own the network. Own the future.",
        outcomes: ["Build network infrastructure", "Understand BGP and routing", "Implement redundancy", "Launch a WISP or datacenter"],
        hours: 30,
        modules: 9,
        technologies: ["BGP", "Network Engineering", "Fiber", "Wireless"],
      },
      {
        id: "token-economy",
        name: "The Token Economy",
        subtitle: "Architecting the Future of Value",
        price: 1997,
        hook: "Build the financial rails of tomorrow.",
        outcomes: ["Design token economics", "Build smart contracts", "Launch decentralized applications", "Navigate regulatory landscape"],
        hours: 28,
        modules: 9,
        technologies: ["Solidity", "Ethereum", "DeFi", "Web3.js"],
      },
    ]
  },
  {
    id: "education",
    name: "Higher Education",
    tagline: "Transform institutions",
    description: "For educators and administrators leading the AI transformation.",
    courses: [
      {
        id: "ai-native-university",
        name: "The AI-Native University",
        subtitle: "A Leader's Guide to Educational Transformation",
        price: 1997,
        hook: "Lead the future of education.",
        outcomes: ["Design AI-enhanced curricula", "Implement ethical AI policies", "Train faculty on AI tools", "Measure learning outcomes"],
        hours: 24,
        modules: 8,
        technologies: ["LMS Integration", "AI Assessment", "Adaptive Learning", "Analytics"],
      },
    ]
  }
];

// Generate slug from course name
const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("hardcore");
  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section className="bg-base-200 relative overflow-hidden" id="catalog">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 md:py-32">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
            26 Masterclasses Across 5 Categories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            The Complete <span className="gradient-text-blue">Curriculum</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            From building LLMs to launching sovereign infrastructure—choose your path to mastery.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                  : "bg-base-100 text-base-content/70 hover:bg-base-300"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.courses.length})</span>
            </button>
          ))}
        </div>

        {/* Category description */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">{currentCategory.tagline}</h3>
          <p className="text-base-content/70">{currentCategory.description}</p>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-base-100 rounded-2xl border border-base-300 hover:border-brand-blue/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card content */}
              <div className="relative p-6">
                {/* Header with rarity badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    {/* Hook - The compelling one-liner */}
                    <p className="text-sm font-medium text-brand-blue mb-2">{course.hook}</p>
                    <h4 className="text-lg font-bold mb-1 group-hover:text-brand-blue transition-colors">{course.name}</h4>
                    <p className="text-sm text-base-content/60">{course.subtitle}</p>
                  </div>
                  {course.rarity && (
                    <span className={`shrink-0 ml-2 text-xs px-2 py-1 rounded-full font-medium ${
                      course.rarity === "Extremely Rare" ? "bg-purple-500/20 text-purple-400" :
                      course.rarity === "Cutting Edge" ? "bg-red-500/20 text-red-400" :
                      course.rarity === "Frontier AI" ? "bg-orange-500/20 text-orange-400" :
                      course.rarity === "Flagship" ? "bg-brand-yellow/20 text-yellow-600" :
                      course.rarity === "Very Rare" ? "bg-brand-blue/20 text-brand-blue" :
                      "bg-brand-green/20 text-brand-green"
                    }`}>
                      {course.rarity}
                    </span>
                  )}
                </div>

                {/* Course stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-base-content/50">
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

                {/* What you'll build - Key outcomes */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">What You&apos;ll Build</p>
                  <ul className="space-y-1">
                    {course.outcomes.slice(0, 3).map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-base-content/70">
                        <svg className="w-4 h-4 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-base-200 text-base-content/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing tiers */}
                <div className="pt-4 border-t border-base-200">
                  <p className="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-3">Choose Your Path</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors cursor-pointer group/tier">
                      <p className="text-xs text-base-content/50 mb-0.5">Self-Paced</p>
                      <p className="text-sm font-bold text-base-content group-hover/tier:text-brand-blue transition-colors">$997</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/30 relative">
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] px-1.5 py-0.5 bg-brand-blue text-white rounded-full">Popular</span>
                      <p className="text-xs text-brand-blue/70 mb-0.5">Cohort</p>
                      <p className="text-sm font-bold text-brand-blue">$2,997</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-brand-yellow/10 hover:bg-brand-yellow/20 transition-colors cursor-pointer group/tier">
                      <p className="text-xs text-base-content/50 mb-0.5">Founder</p>
                      <p className="text-sm font-bold text-base-content group-hover/tier:text-yellow-600 transition-colors">$7,997</p>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${generateSlug(course.name)}`}
                    className="btn btn-sm w-full bg-gradient-to-r from-brand-blue to-brand-green text-white border-0 hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bundle CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-brand-blue/10 via-brand-green/10 to-brand-yellow/10 rounded-2xl p-8 md:p-12 border border-brand-blue/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want the complete curriculum?
            </h3>
            <p className="text-base-content/70 mb-6 max-w-xl mx-auto">
              Get all 26 masterclasses with the Full Catalog Pass and save over 50%.
            </p>
            <a href="#pricing" className="btn btn-primary btn-lg btn-animated">
              View Bundle Pricing
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
