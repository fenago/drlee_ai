"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const blurSlide = {
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
  },
};

export default function AboutDrLee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0f1329] py-20 md:py-28">
      {/* === Premium Background Layers === */}

      {/* Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4a6cf7]/10 dark:bg-[#4a6cf7]/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/15 blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* === Content === */}
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={blurSlide}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Meet Your Guide:{" "}
            <span className="bg-gradient-to-r from-[#4a6cf7] to-[#8b5cf6] bg-clip-text text-transparent">
              Dr. Lee
            </span>
          </h2>
        </motion.div>

        {/* Content: headshot + bio */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
          {/* Left: Headshot (2/5 width) */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center"
            variants={blurSlide}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#4a6cf7]/20 to-[#8b5cf6]/20 rounded-full blur-2xl" />

              {/* Gradient border wrapper */}
              <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-[#4a6cf7] to-[#8b5cf6]">
                <div className="bg-white dark:bg-[#1a1f3a] rounded-2xl w-64 h-72 md:w-72 md:h-80 overflow-hidden">
                  <Image
                    src="/images/dr-lee-headshot.png"
                    alt="Dr. Ernesto Lee"
                    width={400}
                    height={500}
                    className="rounded-2xl object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio (3/5 width) */}
          <motion.div
            className="w-full lg:w-3/5 space-y-6"
            variants={blurSlide}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {/* Paragraph 1 */}
            <p className="text-base md:text-lg text-slate-600 dark:text-[#a0aec0] leading-relaxed">
              Dr. Lee is the founder of DrLee.ai, the leading platform for{" "}
              <span className="text-[#4a6cf7] font-medium">
                executive AI education
              </span>{" "}
              and{" "}
              <span className="text-[#4a6cf7] font-medium">
                strategic implementation
              </span>
              . With deep expertise in both AI technology and business strategy,
              Dr. Lee has guided leaders from{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                JPMC, Cisco, Federal and Local Governments
              </span>
              , and dozens of other organizations through successful AI
              transformations.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base md:text-lg text-slate-600 dark:text-[#a0aec0] leading-relaxed">
              Unlike consultants who offer theoretical advice or vendors who push
              products, Dr. Lee provides a unique combination of{" "}
              <span className="text-[#4a6cf7] font-medium">
                diagnostic precision
              </span>
              ,{" "}
              <span className="text-[#4a6cf7] font-medium">
                personalized education
              </span>
              , and{" "}
              <span className="text-[#4a6cf7] font-medium">
                hands-on implementation support
              </span>
              .
            </p>

            {/* Paragraph 3 */}
            <p className="text-base md:text-lg text-slate-600 dark:text-[#a0aec0] leading-relaxed">
              Dr. Lee&apos;s philosophy is simple:{" "}
              <span className="text-[#4a6cf7] font-medium">
                AI transformation starts with clarity.
              </span>{" "}
              Understand where you are, learn what you need to know, and build
              what will drive real business value.
            </p>

            {/* Paragraph 4 */}
            <p className="text-base md:text-lg text-slate-600 dark:text-[#a0aec0] leading-relaxed">
              Whether you need a diagnostic roadmap, executive education, or a
              Fractional CTO to guide your technical strategy, Dr. Lee meets you
              where you are and helps you get where you need to go.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4a6cf7]/20 dark:via-[#4a6cf7]/30 to-transparent mt-20 md:mt-28" />
    </section>
  );
}
