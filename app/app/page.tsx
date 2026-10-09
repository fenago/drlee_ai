import Link from "next/link";
import { Metadata } from "next";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";
import { getCourseBySlug } from "@/lib/courses";

// "Get the app" page. The DrLee.ai mobile app shares links here for masterclasses
// that don't have their own /courses/<slug> page (lib/share.ts in the app repo).
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL;
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL;

export const metadata: Metadata = {
  title: "Get the DrLee.ai App | Short, Practical AI Masterclasses",
  description:
    "Short, practical AI masterclasses from Dr. Ernesto Lee for leaders and builders. Watch on iPhone and Android.",
  alternates: { canonical: "/app" },
};

function StoreButton({ href, label, sub }: { href?: string; label: string; sub: string }) {
  const body = (
    <span className="flex flex-col items-start leading-tight">
      <span className="text-xs opacity-80">{href ? sub : "Coming soon to"}</span>
      <span className="text-lg font-bold">{label}</span>
    </span>
  );
  return href ? (
    <a
      href={href}
      className="rounded-full bg-[#61D8FE] px-7 py-3 text-[#04121B] transition hover:brightness-110"
    >
      {body}
    </a>
  ) : (
    <span className="rounded-full border border-white/20 px-7 py-3 text-white/70">{body}</span>
  );
}

export default function GetTheAppPage({ searchParams }: { searchParams: { c?: string } }) {
  const course = searchParams.c ? getCourseBySlug(searchParams.c) : undefined;

  return (
    <>
      <HeaderNew />
      <main className="min-h-screen bg-[#0D1117] pt-28 pb-24 text-white">
        <section className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8458B]">The DrLee.ai app</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            {course ? (
              <>
                Watch <span className="text-[#61D8FE]">{course.name}</span> in the app
              </>
            ) : (
              <>
                Short, practical <span className="text-[#61D8FE]">AI masterclasses</span>, in your pocket
              </>
            )}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            {course?.hook ??
              "Expert-led lessons from Dr. Ernesto Lee for leaders who decide and engineers who ship. Finish one between meetings and use it today."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <StoreButton href={APP_STORE_URL} label="App Store" sub="Download on the" />
            <StoreButton href={PLAY_STORE_URL} label="Google Play" sub="Get it on" />
          </div>

          <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
            {[
              ["Short and dense", "Built for a busy calendar. No filler, straight to what matters."],
              ["Your progress syncs", "Pick up where you left off on any device, even offline."],
              ["Certificates", "Finish a masterclass and share your certificate."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-bold">{title}</p>
                <p className="mt-1 text-sm text-white/60">{body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-white/50">
            Prefer the web?{" "}
            <Link href={course ? `/courses/${course.slug}` : "/catalog"} className="text-[#61D8FE] underline">
              {course ? "See this masterclass on drlee.ai" : "Browse the catalog"}
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
