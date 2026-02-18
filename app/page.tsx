"use client";

import { Suspense } from "react";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";

// V2 landing page sections
import HeroV2 from "@/components/landing/v2/HeroV2";
import ProblemSection from "@/components/landing/v2/ProblemSection";
import ThreePillars from "@/components/landing/v2/ThreePillars";
import StatsSection from "@/components/landing/v2/StatsSection";
import JourneyTimeline from "@/components/landing/v2/JourneyTimeline";
import ReportPreview from "@/components/landing/v2/ReportPreview";
import ComparisonTable from "@/components/landing/v2/ComparisonTable";
import AudienceSection from "@/components/landing/v2/AudienceSection";
import AboutDrLee from "@/components/landing/v2/AboutDrLee";
import FAQSection from "@/components/landing/v2/FAQSection";
import TrainingComparison from "@/components/landing/v2/TrainingComparison";
import MaturityLevels from "@/components/landing/v2/MaturityLevels";
import FinalCTA from "@/components/landing/v2/FinalCTA";

export default function Home() {
  return (
    <>
      <Suspense>
        <HeaderNew />
      </Suspense>

      <main>
        {/* Section 1: Hero */}
        <HeroV2 />

        {/* Section 2: The Problem (Pain Points) */}
        <ProblemSection />

        {/* Section 3: Three Pillars — Diagnose, Educate, Implement */}
        <ThreePillars />

        {/* Section 4: By The Numbers */}
        <StatsSection />

        {/* Section 5: Your Complete Journey (6-Step Path) */}
        <JourneyTimeline />

        {/* Section 6: What You'll Get (Report Preview) */}
        <ReportPreview />

        {/* Section 7: Why This Approach Works (Comparison) */}
        <ComparisonTable />

        {/* Section 8: Training Comparison — Traditional vs DrLee.ai */}
        <TrainingComparison />

        {/* Section 9: AI Maturity Levels Framework */}
        <MaturityLevels />

        {/* Section 10: Who This Is For */}
        <AudienceSection />

        {/* Section 11: About Dr. Lee */}
        <AboutDrLee />

        {/* Section 12: FAQ */}
        <FAQSection />

        {/* Section 13: Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
