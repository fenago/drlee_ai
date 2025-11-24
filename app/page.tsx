"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// New landing page components
import HeaderNew from "@/components/landing/HeaderNew";
import HeroNew from "@/components/landing/HeroNew";
import ProblemNew from "@/components/landing/ProblemNew";
import SolutionNew from "@/components/landing/SolutionNew";
import DualAvatar from "@/components/landing/DualAvatar";
import CatalogNew from "@/components/landing/CatalogNew";
import BundlesNew from "@/components/landing/BundlesNew";
import AssessmentNew from "@/components/landing/AssessmentNew";
import CTANew from "@/components/landing/CTANew";

// Keep existing components that work well
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Dynamic import for backgrounds to reduce initial bundle
const ParticlesBackground = dynamic(
  () => import("@/components/backgrounds/ParticlesBackground").then((mod) => mod.ParticlesBackground),
  { ssr: false }
);

const VortexBackground = dynamic(
  () => import("@/components/backgrounds/VortexBackground").then((mod) => mod.VortexBackground),
  { ssr: false }
);

// Loading placeholder
function LoadingPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingPlaceholder />}>
        <HeaderNew />
      </Suspense>

      <main>
        {/* Hero with animated background - uses theme to switch between particles/vortex */}
        <div className="relative">
          {/* Light mode: Particles */}
          <div className="block dark:hidden">
            <Suspense fallback={<div className="min-h-screen bg-[#FAFAFC]" />}>
              <ParticlesBackground>
                <HeroNew />
              </ParticlesBackground>
            </Suspense>
          </div>

          {/* Dark mode: Vortex */}
          <div className="hidden dark:block">
            <Suspense fallback={<div className="min-h-screen bg-[#0A0A14]" />}>
              <VortexBackground>
                <HeroNew />
              </VortexBackground>
            </Suspense>
          </div>
        </div>

        {/* Problem Section - Why you need this */}
        <ProblemNew />

        {/* Solution Section - Our methodology */}
        <SolutionNew />

        {/* Path Assessment - Help users choose */}
        <AssessmentNew />

        {/* Dual Avatar Sections - For both audiences */}
        <DualAvatar />

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

        {/* Final CTA */}
        <CTANew />
      </main>

      <Footer />
    </>
  );
}
