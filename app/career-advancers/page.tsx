"use client";

import { motion } from "framer-motion";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";
import { VortexBackground } from "@/components/backgrounds/VortexBackground";
import CatalogNew from "@/components/landing/CatalogNew";
import BundlesNew from "@/components/landing/BundlesNew";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import { ArrowRight, TrendingUp, Shield, Zap, Code2, Brain, Rocket } from "lucide-react";
import Link from "next/link";

function CareerHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-sm font-medium text-primary">
            <TrendingUp className="w-4 h-4" />
            Career Transformation Path
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            From{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              API Wrapper
            </span>
            <br />
            To{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI Architect
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build production-ready frontier AI systems from scratch and command{" "}
            <span className="text-primary font-semibold">$250K-$400K salaries</span> as an
            irreplaceable technical asset—not just another "prompt engineer."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/ai-sovereignty-stack"
              className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border px-8 py-4 rounded-full text-lg font-semibold hover:bg-background/80 transition-all"
            >
              <Brain className="w-5 h-5" />
              Explore the Stack
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">$150K+</div>
              <div className="text-sm text-muted-foreground">Average Salary Increase</div>
            </div>
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Get Promoted or New Role</div>
            </div>
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">3-12mo</div>
              <div className="text-sm text-muted-foreground">Time to Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CareerProblem() {
  const problems = [
    {
      icon: Code2,
      title: "Stuck Building API Wrappers",
      description: "You're calling OpenAI's API and tweaking prompts, but you're not building real AI systems. Your skills are commoditized and your salary is plateauing at $100K-$150K.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth Ceiling",
      description: "Senior roles require deep AI knowledge you don't have. You're passed over for promotions because you can't architect systems from scratch or explain how models actually work.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Job Security Anxiety",
      description: "API-dependent skills are easily replaced. Junior devs can do what you do. You're worried about being automated away or becoming obsolete when the next tool arrives.",
      color: "from-yellow-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Labeled a 'Prompt Engineer'",
      description: "You're seen as a glorified API consumer, not a real AI engineer. Recruiters don't take you seriously. You can't command premium salaries because you don't own the technology.",
      color: "from-red-500 to-pink-500",
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
            Your Career is{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Stuck
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You're working hard, but API dependency is holding you back from the career and salary you deserve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} mb-6`}>
                <problem.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerSolution() {
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
            The{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI Sovereignty Stack™
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the complete journey from API consumer to irreplaceable AI architect
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Before: API-Dependent Career</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Salary plateaued at $100K-$150K</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Building ChatGPT wrappers, not real AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Viewed as "prompt engineer"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Easily replaceable skillset</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Can't explain how models work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Passed over for senior roles</span>
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
              <h3 className="text-2xl font-bold mb-4 text-primary">After: AI Architect Mastery</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Command $250K-$400K salaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Build frontier AI systems from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Recognized as technical expert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Irreplaceable technical asset</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Deep mastery of model architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Promoted to Principal/Staff Engineer</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 500+ engineers who've transformed their careers by mastering the complete AI stack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              View Course Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-background border border-border px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all"
            >
              <Rocket className="w-5 h-5" />
              See Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CareerAdvancersPage() {
  return (
    <>
      <HeaderNew />
      <main className="relative">
        <VortexBackground>
          <CareerHero />
        </VortexBackground>
        <CareerProblem />
        <CareerSolution />
        <CatalogNew />
        <BundlesNew />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
