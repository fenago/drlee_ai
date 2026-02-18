"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const forYouItems = [
  "You\u2019re a VP, C-Suite executive, or senior leader responsible for strategy",
  "You know AI is critical but don\u2019t have a clear implementation plan",
  "Your team is using AI tools without coordination or strategy",
  "Your staff doesn\u2019t know where to start or how AI impacts their daily work",
  "You\u2019re tired of wasting resources on pilots that don\u2019t scale",
  "You want a data-driven approach, not guesswork",
  "You\u2019re ready to lead your organization through AI transformation",
  "You need to empower your team with clear guidance and training",
];

const notForYouItems = [
  "You\u2019re looking for a quick-fix AI tool to buy",
  "You want someone else to \u201Cdo AI\u201D for you without your involvement",
  "You\u2019re not willing to invest 15 minutes in strategic planning",
  "You already have a comprehensive, working AI strategy and execution plan",
  "You\u2019re a solo entrepreneur or very early-stage startup (built for established organizations with teams)",
  "You\u2019re looking for generic advice, not personalized recommendations",
];

const GreenCheck = () => (
  <svg
    className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const RedX = () => (
  <svg
    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const blurSlide = {
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
  },
};

const listItemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export default function AudienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0a0e27] py-20 md:py-28">
      {/* === Premium Background Layers === */}

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(74,108,247,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gradient Mesh: green glow on left, red glow on right */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-[#10b981]/8 dark:bg-[#10b981]/12 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-[#ef4444]/8 dark:bg-[#ef4444]/12 blur-[100px]" />
      </div>

      {/* === Content === */}
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={blurSlide}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Is This Assessment{" "}
            <span className="text-[#4a6cf7] font-medium">Right for You</span>?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#a0aec0] max-w-3xl mx-auto">
            This is designed for business leaders who are ready to move from{" "}
            <span className="text-[#4a6cf7] font-medium">confusion</span> to{" "}
            <span className="text-[#4a6cf7] font-medium">clarity</span>.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* For You Card */}
          <motion.div
            className="bg-white dark:bg-[#1a1f3a] rounded-xl border border-[#10b981]/30 p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            variants={blurSlide}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                This is for you if...
              </h3>
            </div>

            <ul className="space-y-4">
              {forYouItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  variants={listItemVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  custom={i}
                >
                  <GreenCheck />
                  <span className="text-sm md:text-base text-slate-600 dark:text-[#a0aec0] leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You Card */}
          <motion.div
            className="bg-white dark:bg-[#1a1f3a] rounded-xl border border-[#ff4444]/30 p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            variants={blurSlide}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                This is NOT for you if...
              </h3>
            </div>

            <ul className="space-y-4">
              {notForYouItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  variants={listItemVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  custom={i}
                >
                  <RedX />
                  <span className="text-sm md:text-base text-slate-600 dark:text-[#a0aec0] leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent mt-20 md:mt-28" />
    </section>
  );
}
