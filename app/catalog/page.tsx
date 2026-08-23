import { Metadata } from "next";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "All 32 AI Masterclasses | DrLee.ai Catalog",
  description:
    "Browse all 32 DrLee.ai masterclasses. Every masterclass starts with an AI assessment that maps your knowledge gaps, adapts to close them, and ends with a custom deliverable you build and own.",
  alternates: { canonical: "/catalog" },
  openGraph: {
    title: "All 32 AI Masterclasses | DrLee.ai Catalog",
    description:
      "AI-personalized masterclasses: assessed to your gaps, adapted to you, and finished with a custom deliverable you own.",
    url: "/catalog",
  },
};

export default function CatalogPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-20">
        <CatalogClient />
      </main>
      <Footer />
    </>
  );
}
