import AssessmentForm from "@/components/assessment/AssessmentForm";

export const metadata = {
  title: "AI Reality Gap Assessment | DrLee.ai",
  description:
    "Discover your true AI readiness with a brutally honest assessment. Get a personalized Reality Gap Report with your score, gaps, and a specific action plan.",
};

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <AssessmentForm />
      </div>
    </main>
  );
}
