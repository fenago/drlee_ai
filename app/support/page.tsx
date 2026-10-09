import Link from "next/link";
import { Metadata } from "next";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";

// Support page (App Store Connect "Support URL").
const SUPPORT_EMAIL = "support@drlee.ai";

export const metadata: Metadata = {
  title: "Support | DrLee.ai",
  description: "Get help with the DrLee.ai app and website.",
  alternates: { canonical: "/support" },
};

const FAQ: [string, React.ReactNode][] = [
  [
    "How do I sign in?",
    "Enter your email address in the app and we'll send you a one-time code. There's no password to remember.",
  ],
  [
    "A masterclass I expected isn't unlocked",
    "Masterclasses included with a DrLee.ai program unlock automatically when you sign in with the same email address you used for the program. If you signed in with a different address, sign out and sign in again with that one. Still stuck? Email us and tell us both addresses.",
  ],
  [
    "Video won't play or keeps buffering",
    "Check your connection, then close and reopen the app. Downloaded lessons play offline. If it keeps happening, email us the lesson name and your device model.",
  ],
  [
    "How do I report a comment or block someone?",
    "Tap the \"...\" next to any comment to report it or block its author. Blocked users' comments disappear right away. We review every report within 24 hours.",
  ],
  [
    "How do I change the app language?",
    "Go to Profile, then Settings, then Language. The app is available in English, Spanish and Portuguese.",
  ],
  [
    "How do I delete my account?",
    <>
      In the app: Profile, then Settings, then Delete Account. You can also{" "}
      <Link href="/delete-account" className="text-[#61D8FE] underline">
        request deletion by email
      </Link>
      .
    </>,
  ],
];

export default function SupportPage() {
  return (
    <>
      <HeaderNew />
      <main className="min-h-screen bg-[#0D1117] pt-28 pb-24 text-white">
        <section className="mx-auto max-w-2xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8458B]">Support</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight">How can we help?</h1>
          <p className="mt-4 text-lg text-white/70">
            Email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#61D8FE] underline">
              {SUPPORT_EMAIL}
            </a>
            . We usually reply within one business day.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("DrLee.ai support")}`}
            className="mt-6 inline-block rounded-full bg-[#61D8FE] px-7 py-3 font-bold text-[#04121B] transition hover:brightness-110"
          >
            Contact support
          </a>

          <h2 className="mt-14 text-2xl font-bold">Common questions</h2>
          <div className="mt-6 space-y-4">
            {FAQ.map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-bold">{q}</p>
                <p className="mt-2 text-sm text-white/70">{a}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-white/50">
            DrLee.ai is operated by Learning Science Inc.{" "}
            <Link href="/privacy-policy" className="text-[#61D8FE] underline">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href="/tos" className="text-[#61D8FE] underline">
              Terms of Use
            </Link>{" "}
            ·{" "}
            <Link href="/app" className="text-[#61D8FE] underline">
              Get the app
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
