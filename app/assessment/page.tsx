import UnifiedAssessment from "@/components/assessment/UnifiedAssessment";

export const metadata = {
  title: "AI Reality Gap Assessment | DrLee.ai",
  description:
    "Discover your true AI readiness with a 15-question assessment covering 5 areas. Get a personalized Reality Gap Report with maturity scores, gaps, and a 90-day action plan.",
};

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <UnifiedAssessment />
    </main>
  );
}
