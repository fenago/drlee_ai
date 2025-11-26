"use client";

import { motion } from "framer-motion";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";
import { VortexBackground } from "@/components/backgrounds/VortexBackground";
import { ArrowRight, Sparkles, Layers, Zap, Brain, Eye, Users, Cog, CheckCircle } from "lucide-react";
import Link from "next/link";

function StackHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            Our Signature Framework
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            The{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI Sovereignty Stack™
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From API-Dependent to Technologically Sovereign in{" "}
            <span className="text-primary font-semibold">9 Transformative Steps</span>
            <br />
            The only systematic framework for complete AI mastery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">3 Stages</div>
              <div className="text-sm text-muted-foreground">Foundation → Specialization → Automation</div>
            </div>
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">9 Courses</div>
              <div className="text-sm text-muted-foreground">Complete AI Architecture Mastery</div>
            </div>
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">1 Mission</div>
              <div className="text-sm text-muted-foreground">Technological Sovereignty</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TransformationJourney() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-red-400">Point A: API-Dependent</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span className="text-lg">Calling OpenAI APIs, building wrappers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span className="text-lg">Vendor lock-in, rate limits, API costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span className="text-lg">No competitive differentiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span className="text-lg">Commoditized skillset</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span className="text-lg">Cannot customize or control models</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-primary">Point B: Technological Sovereignty</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span className="text-lg">Build and train models from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span className="text-lg">Own model weights, zero API dependency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span className="text-lg">Defensible competitive moat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span className="text-lg">Irreplaceable technical mastery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span className="text-lg">Complete customization and control</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StackMatrix() {
  const stages = [
    {
      stage: 1,
      title: "Foundation",
      subtitle: "Build the Core",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
      courses: [
        {
          number: 1,
          title: "Build Your Own LLM",
          from: "API Consumer",
          to: "Model Builder",
          description: "From Tokenization to Training: Own the Technology Behind ChatGPT",
          slug: "large-language-models",
          transformation: {
            frustrations: ["Trapped using ChatGPT API", "$5K-$50K/month API bills", "Viewed as 'prompt engineer' not AI engineer"],
            goals: ["Own your LLM on your infrastructure", "Zero API dependency", "Full control over model weights"],
          },
        },
        {
          number: 2,
          title: "Build Your Own Reasoning Model",
          from: "Static Models",
          to: "Intelligent Systems",
          description: "Train AI That Thinks Before It Answers—No API Required",
          slug: "reasoning-models",
          transformation: {
            frustrations: ["Models give wrong answers confidently", "Can't solve multi-step problems", "Hallucinations and incorrect reasoning"],
            goals: ["Models that reason through complex problems", "Transparent thinking processes", "Reduced hallucinations via verification"],
          },
        },
        {
          number: 3,
          title: "Build Frontier AI Systems",
          from: "Basic Models",
          to: "Frontier-Class Systems",
          description: "Replicate ChatGPT's Architecture—Own the Innovation Stack",
          slug: "frontier-model-architecture",
          transformation: {
            frustrations: ["Models are slow and expensive", "Can't scale beyond small datasets", "Inferior performance vs GPT-4/Claude"],
            goals: ["10x-100x inference speedups", "Efficient scaling to billions of parameters", "Competitive with commercial models"],
          },
        },
      ],
    },
    {
      stage: 2,
      title: "Specialization",
      subtitle: "Add Capabilities",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      courses: [
        {
          number: 4,
          title: "Build Domain-Specific LLMs",
          from: "Generic Models",
          to: "Specialized Experts",
          description: "Train Specialized Models You Own and Control—No API Costs",
          slug: "small-language-models",
          transformation: {
            frustrations: ["General models don't understand your domain", "Too large and expensive for edge deployment", "Poor performance on niche tasks"],
            goals: ["Domain-specific models that outperform GPT-4", "Edge-deployable AI (phones, IoT, offline)", "Proprietary IP through specialized models"],
          },
        },
        {
          number: 5,
          title: "Build Your Own GraphRAG System",
          from: "Limited Context",
          to: "Unlimited Knowledge",
          description: "Knowledge Graphs That Outperform Vector Search—Build, Don't Rent",
          slug: "graphrag",
          transformation: {
            frustrations: ["4K-128K token context limits", "Models hallucinate facts they don't know", "Can't integrate proprietary knowledge"],
            goals: ["Unlimited context through retrieval", "Reduced hallucinations via grounding", "Integration with proprietary knowledge"],
          },
        },
        {
          number: 6,
          title: "Build Your Own Image Generator",
          from: "Text-Only",
          to: "Multi-Modal AI",
          description: "Train Vision Models from Scratch—Stop Renting, Start Owning",
          slug: "diffusion-models",
          transformation: {
            frustrations: ["Limited to text-only applications", "Can't generate or understand images", "Dependent on Midjourney/DALL-E APIs"],
            goals: ["Generate images from text descriptions", "Understand and reason about images", "Own your image generation pipeline"],
          },
        },
      ],
    },
    {
      stage: 3,
      title: "Automation",
      subtitle: "Deploy at Scale",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      courses: [
        {
          number: 7,
          title: "Build Autonomous AI Agents",
          from: "Static Models",
          to: "Autonomous Agents",
          description: "Code Agents That Execute Tasks—Not Just Chat",
          slug: "agentic-systems",
          transformation: {
            frustrations: ["Models just answer questions, don't act", "No ability to use tools or APIs", "Require constant human intervention"],
            goals: ["Autonomous agents that complete tasks", "Tool use and API integration", "Persistent memory across sessions"],
          },
        },
        {
          number: 8,
          title: "Build Multi-Agent AI Teams",
          from: "Single Agent",
          to: "Coordinated Teams",
          description: "Train Agent Swarms That Collaborate and Execute at Scale",
          slug: "multi-agent-systems",
          transformation: {
            frustrations: ["Single agents hit capability limits", "Complex tasks require specialized skills", "No collaboration or coordination"],
            goals: ["Teams of AI agents working together", "Specialized agents for different domains", "Scalable, modular AI systems"],
          },
        },
        {
          number: 9,
          title: "Production AI",
          from: "Prototype",
          to: "Production-Grade",
          description: "Ship Models That Last—Build Your Own MLOps Platform",
          slug: "the-ai-product-factory",
          transformation: {
            frustrations: ["Models work in dev, fail in production", "No monitoring or observability", "High latency and costs"],
            goals: ["Production AI serving millions", "Real-time monitoring and alerting", "Cost-optimized inference at scale"],
          },
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Complete{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Transformation Matrix
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            9 courses, 3 stages, 1 systematic path to AI mastery
          </p>
        </motion.div>

        <div className="space-y-16">
          {stages.map((stage, stageIndex) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: stageIndex * 0.2 }}
              className="space-y-6"
            >
              {/* Stage Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color}`}>
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground">Stage {stage.stage}</div>
                  <h3 className="text-3xl font-bold">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.subtitle}</p>
                </div>
              </div>

              {/* Course Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {stage.courses.map((course, courseIndex) => (
                  <motion.div
                    key={course.number}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                    className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="absolute top-4 right-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {course.number}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-4 pr-12">{course.title}</h4>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <span className="text-red-400">FROM:</span>
                          <span className="text-muted-foreground">{course.from}</span>
                        </div>
                        <ul className="space-y-1 ml-4">
                          {course.transformation.frustrations.map((frustration: string, idx: number) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-red-400 mt-0.5">✗</span>
                              <span>{frustration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <span className="text-primary">TO:</span>
                          <span className="font-semibold">{course.to}</span>
                        </div>
                        <ul className="space-y-1 ml-4">
                          {course.transformation.goals.map((goal: string, idx: number) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">✓</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <Link
                        href={`/#catalog`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        View Course Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItWorks() {
  const reasons = [
    {
      icon: Layers,
      title: "Systematic Progression",
      description: "Each course builds on the previous, creating a cohesive learning journey from basics to advanced systems.",
    },
    {
      icon: Brain,
      title: "Build from Scratch",
      description: "No API wrappers. You'll implement every component yourself, gaining deep understanding of how AI works.",
    },
    {
      icon: CheckCircle,
      title: "Production-Ready Skills",
      description: "Learn not just theory, but practical deployment, scaling, and optimization for real-world applications.",
    },
    {
      icon: Sparkles,
      title: "Unique Methodology",
      description: "The only framework teaching complete AI sovereignty—nobody else offers this systematic path.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why This Framework{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The AI Sovereignty Stack™ is designed to take you from API consumer to AI architect systematically
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Begin Your{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Journey?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of engineers and founders who've transformed their careers and businesses with The AI Sovereignty Stack™
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Start with Course 1
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-background border border-border px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all"
            >
              <Sparkles className="w-5 h-5" />
              View Bundles & Pricing
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Engineers Transformed</div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">$150K+</div>
              <div className="text-sm text-muted-foreground">Average Salary Increase</div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Get Promoted or New Role</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AISovereigntyStackPage() {
  return (
    <>
      <HeaderNew />
      <main className="relative">
        <VortexBackground>
          <StackHero />
        </VortexBackground>
        <TransformationJourney />
        <StackMatrix />
        <WhyItWorks />
        <StackCTA />
      </main>
      <Footer />
    </>
  );
}
