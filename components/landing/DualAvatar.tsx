"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface AvatarSectionProps {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
  ctaText: string;
  ctaHref: string;
  stats: { value: string; label: string }[];
  isReversed?: boolean;
}

function AvatarSection({
  id,
  badge,
  title,
  subtitle,
  description,
  painPoints,
  outcomes,
  ctaText,
  ctaHref,
  stats,
  isReversed = false,
}: AvatarSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 overflow-hidden ${
        isReversed
          ? "bg-slate-900 dark:bg-slate-950"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isReversed ? "white" : "black"} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className={isReversed ? "lg:col-start-2" : ""}
          >
            {/* Badge */}
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
                isReversed
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
              }`}
            >
              {badge}
            </span>

            {/* Title */}
            <h2
              className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
                isReversed ? "text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p
              className={`text-xl md:text-2xl font-medium mb-6 ${
                isReversed
                  ? "text-emerald-400"
                  : "text-blue-600 dark:text-blue-400"
              }`}
            >
              {subtitle}
            </p>

            {/* Description */}
            <p
              className={`text-lg mb-8 leading-relaxed ${
                isReversed ? "text-white/70" : "text-slate-600 dark:text-white/70"
              }`}
            >
              {description}
            </p>

            {/* Pain Points */}
            <div className="mb-8">
              <h4
                className={`text-sm uppercase tracking-wider font-semibold mb-4 ${
                  isReversed ? "text-white/50" : "text-slate-500 dark:text-white/50"
                }`}
              >
                You might be thinking...
              </h4>
              <ul className="space-y-3">
                {painPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className={`flex items-start gap-3 ${
                      isReversed ? "text-white/60" : "text-slate-500 dark:text-white/60"
                    }`}
                  >
                    <span className="text-red-400 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span className="italic">&quot;{point}&quot;</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href={ctaHref}
              className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                isReversed
                  ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20"
                  : "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:shadow-xl hover:shadow-slate-900/20"
              }`}
            >
              {ctaText}
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Outcomes Card */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className={isReversed ? "lg:col-start-1" : ""}
          >
            <div
              className={`rounded-3xl p-8 md:p-10 ${
                isReversed
                  ? "bg-white/5 border border-white/10"
                  : "bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  isReversed ? "text-white" : "text-slate-900 dark:text-white"
                }`}
              >
                After completing the masterclass:
              </h3>

              <ul className="space-y-4 mb-8">
                {outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        isReversed ? "bg-emerald-500/20" : "bg-blue-500/20"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 ${
                          isReversed ? "text-emerald-400" : "text-blue-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span
                      className={
                        isReversed ? "text-white/80" : "text-slate-700 dark:text-white/80"
                      }
                    >
                      {outcome}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/50 dark:border-white/10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold ${
                        isReversed
                          ? "text-emerald-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs uppercase tracking-wider ${
                        isReversed ? "text-white/40" : "text-slate-500 dark:text-white/40"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function DualAvatar() {
  return (
    <>
      {/* Intrapreneurs - Career Advancers */}
      <AvatarSection
        id="intrapreneurs"
        badge="For Intrapreneurs"
        title="Build Your Career Moat"
        subtitle="Transform from API user to AI architect"
        description="You're a senior engineer or tech lead who feels the ground shifting. Junior devs are using ChatGPT, but you know there's a deeper game. You want the skills that can't be automated—the ability to build the systems everyone else just uses."
        painPoints={[
          "I know prompt engineering isn't a real moat",
          "I'm worried junior devs with AI tools will outpace me",
          "I need skills that put me in the top 1%",
        ]}
        outcomes={[
          "Land staff/principal roles at $300K-$500K",
          "Build portfolio projects that demonstrate real understanding",
          "Become the AI expert your company turns to",
          "Future-proof your career with first-principles knowledge",
        ]}
        stats={[
          { value: "100x", label: "ROI" },
          { value: "$200K+", label: "Salary Impact" },
          { value: "Top 1%", label: "Engineer" },
        ]}
        ctaText="Explore Career Paths"
        ctaHref="#catalog"
      />

      {/* Entrepreneurs - Founders/Builders */}
      <AvatarSection
        id="entrepreneurs"
        badge="For Entrepreneurs"
        title="Build Your Company Moat"
        subtitle="Own your AI stack, compete with giants"
        description="You're a founder who knows that dependence on OpenAI or Anthropic APIs is a liability, not a strategy. You want to build proprietary AI that VCs value at a 20%+ premium—technology that becomes your unfair advantage."
        painPoints={[
          "I can't afford a $500K ML engineering team",
          "API costs are killing my margins at scale",
          "My competitors could copy my prompts tomorrow",
        ]}
        outcomes={[
          "Build proprietary LLMs without a massive team",
          "Reduce AI costs by 10-100x with custom models",
          "Create defensible IP that VCs pay premium for",
          "Eliminate vendor lock-in and API dependency",
        ]}
        stats={[
          { value: "1000x", label: "ROI" },
          { value: "90%", label: "Cost Reduction" },
          { value: "20%+", label: "Valuation Boost" },
        ]}
        ctaText="Explore Founder Paths"
        ctaHref="#catalog"
        isReversed
      />
    </>
  );
}
