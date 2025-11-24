import { Metadata } from "next";
import Link from "next/link";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Learning Modalities | DrLee.ai",
  description:
    "Choose how you learn best. Self-paced, cohort-based, founder's edition, or intensive bootcamp formats available.",
};

const modalities = [
  {
    id: "self-paced",
    name: "Self-Paced",
    tagline: "Learn on your schedule",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "blue",
    description:
      "Perfect for self-motivated learners who want flexibility. Access all course materials instantly and progress at your own pace. Ideal if you have unpredictable schedules or prefer to deep-dive on weekends.",
    duration: "Lifetime access",
    commitment: "Flexible, typically 5-15 hours/week",
    format: "Pre-recorded video lessons + written materials",
    features: [
      "Immediate, lifetime access to all course content",
      "Learn anytime, anywhere, on any device",
      "Downloadable resources and code repositories",
      "Community forum access for questions",
      "Certificate of completion",
      "30-day money-back guarantee",
    ],
    notIncluded: [
      "Live sessions with instructor",
      "Direct feedback on your projects",
      "Cohort community and accountability",
    ],
    bestFor: [
      "Self-starters who thrive with independent learning",
      "Professionals with unpredictable schedules",
      "Those who want to revisit material repeatedly",
      "Budget-conscious learners",
    ],
    priceRange: "$397 - $997 per course",
  },
  {
    id: "cohort",
    name: "Cohort-Based",
    tagline: "Learn together, build together",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "emerald",
    description:
      "Join a group of peers who start and finish together. Weekly live sessions with the instructor, structured deadlines, and a private community create accountability and deeper learning. This is how 85% of our successful students learn.",
    duration: "8-12 weeks (varies by course)",
    commitment: "8-12 hours/week recommended",
    format: "Live weekly sessions + async content + community",
    features: [
      "Everything in Self-Paced, plus:",
      "Weekly 90-minute live sessions with Dr. Lee",
      "Real-time Q&A and problem-solving",
      "Private Slack/Discord community with your cohort",
      "Structured weekly assignments and milestones",
      "Peer collaboration and networking",
      "All sessions recorded if you miss one",
      "Direct feedback on your work",
    ],
    notIncluded: [
      "1:1 mentorship sessions",
      "Custom project architecture review",
      "Priority support",
    ],
    bestFor: [
      "Those who thrive with structure and deadlines",
      "Learners who want community and networking",
      "People who learn best through discussion",
      "Anyone who's struggled to complete self-paced courses",
    ],
    priceRange: "$1,297 - $2,997 per course",
    popular: true,
  },
  {
    id: "founder",
    name: "Founder's Edition",
    tagline: "White-glove learning experience",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    color: "amber",
    description:
      "The premium experience for founders, executives, and serious builders who want personalized guidance. Includes everything in Cohort-Based plus dedicated 1:1 mentorship, custom project reviews, and direct access to Dr. Lee for strategic advice.",
    duration: "8-12 weeks + ongoing support",
    commitment: "10-15 hours/week recommended",
    format: "Cohort sessions + 1:1 mentorship + priority support",
    features: [
      "Everything in Cohort-Based, plus:",
      "4-6 private 1:1 sessions with Dr. Lee",
      "Custom project architecture review",
      "Direct Slack/email access for questions",
      "Priority response within 24 hours",
      "Implementation support for your specific use case",
      "Strategic advice for your AI initiatives",
      "Lifetime alumni network access",
      "VIP invites to exclusive events",
    ],
    notIncluded: [],
    bestFor: [
      "Funded founders building AI-first companies",
      "Executives leading AI transformation",
      "Technical leaders architecting AI systems",
      "Anyone who wants maximum support and accountability",
    ],
    priceRange: "$3,497 - $7,997 per course",
  },
  {
    id: "bootcamp",
    name: "Intensive Bootcamp",
    tagline: "Immersive, accelerated learning",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "purple",
    description:
      "An intensive, classroom-style experience compressed into consecutive days. Perfect for teams or individuals who want to immerse themselves completely and emerge transformed. Think of it as a traditional university intensive—but for AI builders.",
    duration: "3-5 consecutive days",
    commitment: "8 hours per day, full immersion",
    format: "Live instruction + hands-on labs + group projects",
    features: [
      "Full-day live instruction (8 hours/day)",
      "Hands-on coding labs with real-time support",
      "Small group size (max 20 participants)",
      "Intensive project work with immediate feedback",
      "Catered meals and networking breaks",
      "Take-home resources and continued access",
      "Certificate of intensive completion",
      "Alumni network access",
      "Available on-site or virtual",
    ],
    notIncluded: [
      "Extended post-bootcamp support (available as add-on)",
    ],
    bestFor: [
      "Teams who want to upskill together quickly",
      "Individuals who can dedicate focused time",
      "Companies with training budgets",
      "Those who learn best in immersive environments",
      "People who want rapid skill acquisition",
    ],
    priceRange: "$5,000 - $15,000 per person",
    enterprise: true,
  },
];

export default function ModalitiesPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
              4 Ways to Learn
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Learning Style
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              Everyone learns differently. That's why we offer four distinct ways to master AI—from
              flexible self-paced learning to intensive bootcamp immersion.
            </p>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {modalities.map((mod) => (
                <a
                  key={mod.id}
                  href={`#${mod.id}`}
                  className={`p-4 rounded-2xl border-2 text-center transition-all hover:scale-105 ${
                    mod.popular
                      ? "border-emerald-500 bg-emerald-500/5"
                      : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  {mod.popular && (
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-bold text-slate-900 dark:text-white mt-1">{mod.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-white/50 mt-1">{mod.duration}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Modality Sections */}
        {modalities.map((mod, index) => (
          <section
            key={mod.id}
            id={mod.id}
            className={`py-20 md:py-28 ${
              index % 2 === 0
                ? "bg-white dark:bg-slate-950"
                : "bg-slate-50 dark:bg-slate-900/50"
            }`}
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Info */}
                <div>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      mod.color === "blue"
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : mod.color === "emerald"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : mod.color === "amber"
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        : "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                    }`}
                  >
                    {mod.icon}
                  </div>

                  {mod.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-4">
                      Most Popular — 85% Completion Rate
                    </span>
                  )}
                  {mod.enterprise && (
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold mb-4">
                      Great for Teams
                    </span>
                  )}

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {mod.name}
                  </h2>
                  <p
                    className={`text-lg font-medium mb-6 ${
                      mod.color === "blue"
                        ? "text-blue-600 dark:text-blue-400"
                        : mod.color === "emerald"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : mod.color === "amber"
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-purple-600 dark:text-purple-400"
                    }`}
                  >
                    {mod.tagline}
                  </p>

                  <p className="text-lg text-slate-600 dark:text-white/70 mb-8">
                    {mod.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4">
                      <p className="text-sm text-slate-500 dark:text-white/50 mb-1">Duration</p>
                      <p className="font-bold text-slate-900 dark:text-white">{mod.duration}</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4">
                      <p className="text-sm text-slate-500 dark:text-white/50 mb-1">Commitment</p>
                      <p className="font-bold text-slate-900 dark:text-white">{mod.commitment}</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4 col-span-2">
                      <p className="text-sm text-slate-500 dark:text-white/50 mb-1">Format</p>
                      <p className="font-bold text-slate-900 dark:text-white">{mod.format}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div
                    className={`inline-block px-6 py-3 rounded-xl ${
                      mod.color === "blue"
                        ? "bg-blue-500/10"
                        : mod.color === "emerald"
                        ? "bg-emerald-500/10"
                        : mod.color === "amber"
                        ? "bg-amber-500/10"
                        : "bg-purple-500/10"
                    }`}
                  >
                    <p className="text-sm text-slate-500 dark:text-white/50">Price Range</p>
                    <p
                      className={`text-xl font-bold ${
                        mod.color === "blue"
                          ? "text-blue-600 dark:text-blue-400"
                          : mod.color === "emerald"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : mod.color === "amber"
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-purple-600 dark:text-purple-400"
                      }`}
                    >
                      {mod.priceRange}
                    </p>
                  </div>
                </div>

                {/* Right: Features */}
                <div className="space-y-6">
                  {/* What's Included */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {mod.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-600 dark:text-white/70"
                        >
                          <svg
                            className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included (if any) */}
                  {mod.notIncluded.length > 0 && (
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Not Included
                      </h3>
                      <ul className="space-y-2">
                        {mod.notIncluded.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-500 dark:text-white/50"
                          >
                            <svg
                              className="w-5 h-5 text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Best For */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Best For
                    </h3>
                    <ul className="space-y-2">
                      {mod.bestFor.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-600 dark:text-white/70"
                        >
                          <span className="text-blue-500">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Comparison Table */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Side-by-Side Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-500 dark:text-white/50 font-medium">
                      Feature
                    </th>
                    <th className="text-center py-4 px-3 text-blue-600 dark:text-blue-400 font-bold">
                      Self-Paced
                    </th>
                    <th className="text-center py-4 px-3 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/5">
                      Cohort
                    </th>
                    <th className="text-center py-4 px-3 text-amber-600 dark:text-amber-400 font-bold">
                      Founder's
                    </th>
                    <th className="text-center py-4 px-3 text-purple-600 dark:text-purple-400 font-bold">
                      Bootcamp
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Video Content", "✓", "✓", "✓", "✓"],
                    ["Duration", "Lifetime", "8-12 weeks", "8-12 weeks", "3-5 days"],
                    ["Live Sessions", "—", "Weekly", "Weekly", "All day"],
                    ["Community Access", "Forum", "Private", "Private + VIP", "Cohort"],
                    ["1:1 Mentorship", "—", "—", "4-6 sessions", "Office hours"],
                    ["Project Feedback", "—", "Group", "Personalized", "Real-time"],
                    ["Completion Rate", "~15%", "~85%", "~95%", "~98%"],
                    ["Best For", "Flexible", "Structure", "Premium", "Immersive"],
                  ].map(([feature, sp, cohort, founder, bootcamp], i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-100 dark:border-slate-800"
                    >
                      <td className="py-4 px-4 text-slate-700 dark:text-white/80 font-medium">
                        {feature}
                      </td>
                      <td className="py-4 px-3 text-center text-slate-600 dark:text-white/60">
                        {sp}
                      </td>
                      <td className="py-4 px-3 text-center text-slate-900 dark:text-white bg-emerald-500/5 font-medium">
                        {cohort}
                      </td>
                      <td className="py-4 px-3 text-center text-slate-600 dark:text-white/60">
                        {founder}
                      </td>
                      <td className="py-4 px-3 text-center text-slate-600 dark:text-white/60">
                        {bootcamp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Format is Right for You?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Take our quick assessment to get a personalized recommendation based on your goals,
              schedule, and learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:scale-105 transition-transform"
              >
                Take the Assessment
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/#catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
