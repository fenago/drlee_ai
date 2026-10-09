import Link from "next/link";
import { Metadata } from "next";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";

// Public account-deletion page (required by Google Play's Data safety form; linked from the
// App Store review notes). Explains in-app deletion and offers an email fallback.
const SUPPORT_EMAIL = "support@drlee.ai";
const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "Delete my DrLee.ai account"
)}&body=${encodeURIComponent(
  "Please delete my DrLee.ai account and its data.\n\nAccount email address: \n\n(Send this from the email address you use to sign in, so we can verify the request.)"
)}`;

export const metadata: Metadata = {
  title: "Delete Your Account | DrLee.ai",
  description: "How to delete your DrLee.ai account and the data associated with it.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <>
      <HeaderNew />
      <main className="min-h-screen bg-[#0D1117] pt-28 pb-24 text-white">
        <section className="mx-auto max-w-2xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8458B]">Account</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight">Delete your DrLee.ai account</h1>
          <p className="mt-4 text-lg text-white/70">
            You can delete your account at any time. Deleting it is permanent and can&apos;t be undone.
          </p>

          <h2 className="mt-12 text-2xl font-bold">In the app (fastest)</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-white/80">
            <li>Open the DrLee.ai app and sign in.</li>
            <li>
              Go to <strong>Profile</strong>, then <strong>Settings</strong>.
            </li>
            <li>
              Tap <strong>Delete Account</strong> and confirm.
            </li>
          </ol>
          <p className="mt-3 text-white/60">Your account is deleted right away.</p>

          <h2 className="mt-12 text-2xl font-bold">By email</h2>
          <p className="mt-4 text-white/80">
            If you can&apos;t use the app, email{" "}
            <a href={MAILTO} className="text-[#61D8FE] underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            from the address you sign in with and ask us to delete your account. We confirm by email and
            complete the deletion within 30 days (usually much sooner).
          </p>
          <a
            href={MAILTO}
            className="mt-6 inline-block rounded-full bg-[#61D8FE] px-7 py-3 font-bold text-[#04121B] transition hover:brightness-110"
          >
            Email a deletion request
          </a>

          <h2 className="mt-12 text-2xl font-bold">What gets deleted</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>Your account, profile, name, email address and profile photo</li>
            <li>Your watch progress, saved masterclasses, certificates and study notebooks</li>
            <li>Your comments, AI assistant conversations and uploaded notes or documents</li>
          </ul>
          <p className="mt-4 text-white/60">
            We may keep a limited record where the law requires it (for example, records of purchases made
            outside the app for tax purposes) and anonymized, aggregated statistics that no longer identify
            you. Backups are overwritten within 30 days. See our{" "}
            <Link href="/privacy-policy" className="text-[#61D8FE] underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>

          <p className="mt-12 text-sm text-white/50">
            DrLee.ai is operated by Learning Science Inc. Questions? See{" "}
            <Link href="/support" className="text-[#61D8FE] underline">
              Support
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
