import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeaderNew from "@/components/landing/HeaderNew";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Financing Options | DrLee.ai",
  description:
    "Flexible payment plans to invest in your AI education. Pay over time with 0% interest financing.",
};

export default function FinancingPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
              Flexible Payment Options
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Invest in Your Future,{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                On Your Terms
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              We believe financial constraints shouldn't limit your potential. That's why we offer
              multiple ways to pay for your AI education.
            </p>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Option 1: Pay in Full */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Pay in Full
                </h3>
                <p className="text-slate-600 dark:text-white/60 mb-6">
                  Get the best value by paying upfront. Full access starts immediately.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    Immediate full access
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    Best price guaranteed
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    30-day money-back guarantee
                  </li>
                </ul>
                <div className="text-sm text-slate-500 dark:text-white/40">
                  Accepted: Credit Card, Debit Card, PayPal
                </div>
              </div>

              {/* Option 2: Payment Plan */}
              <div className="bg-gradient-to-b from-emerald-500/10 to-teal-500/10 rounded-3xl p-8 border-2 border-emerald-500/30 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  3-Month Payment Plan
                </h3>
                <p className="text-slate-600 dark:text-white/60 mb-6">
                  Split your investment into 3 equal monthly payments. 0% interest.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    0% interest, no hidden fees
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    Full access from day one
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    Automatic monthly billing
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    30-day money-back guarantee
                  </li>
                </ul>
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
                  <p className="text-sm text-slate-600 dark:text-white/60 mb-1">Example:</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    $2,997 course = 3 × $999/mo
                  </p>
                </div>
              </div>

              {/* Option 3: 6-Month Plan */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  6-Month Payment Plan
                </h3>
                <p className="text-slate-600 dark:text-white/60 mb-6">
                  Spread your payments over 6 months for maximum flexibility.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    Lowest monthly payment
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    Full access from day one
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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
                    Small processing fee (5%)
                  </li>
                </ul>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
                  <p className="text-sm text-slate-600 dark:text-white/60 mb-1">Example:</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    $2,997 course = 6 × $525/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is a Cohort Section */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                Understanding Our Model
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                What is Cohort-Based Learning?
              </h2>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-white/70 mb-6">
                  A <strong>cohort</strong> is a group of students who start and progress through a
                  course together. Unlike self-paced courses where you learn alone, cohort-based
                  learning provides structure, accountability, and community.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
                        1
                      </span>
                      Fixed Duration
                    </h3>
                    <p className="text-slate-600 dark:text-white/60">
                      Each cohort runs for <strong>8-12 weeks</strong> depending on the course.
                      This creates healthy urgency and ensures you actually complete the material.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
                        2
                      </span>
                      Live Sessions
                    </h3>
                    <p className="text-slate-600 dark:text-white/60">
                      Weekly live sessions (typically 90 minutes) with Dr. Lee for Q&A, deep dives,
                      and real-time problem solving. All sessions are recorded.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
                        3
                      </span>
                      Community
                    </h3>
                    <p className="text-slate-600 dark:text-white/60">
                      Private Slack/Discord with your cohort peers. Collaborate, share progress,
                      and build connections with other builders on the same journey.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
                        4
                      </span>
                      Accountability
                    </h3>
                    <p className="text-slate-600 dark:text-white/60">
                      Weekly assignments and milestones keep you on track. You're not just
                      watching videos—you're building alongside others who expect you to show up.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-6 mt-8">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                    Cohort Schedule Example:
                  </h4>
                  <ul className="space-y-2 text-slate-600 dark:text-white/60">
                    <li>
                      <strong>Week 1-2:</strong> Foundations & Environment Setup
                    </li>
                    <li>
                      <strong>Week 3-6:</strong> Core Implementation (weekly builds)
                    </li>
                    <li>
                      <strong>Week 7-8:</strong> Advanced Topics & Optimization
                    </li>
                    <li>
                      <strong>Week 9-10:</strong> Capstone Project & Presentations
                    </li>
                    <li>
                      <strong>Week 11-12:</strong> Deployment & Production Readiness
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Paced vs Cohort Comparison */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Self-Paced vs. Cohort-Based
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-500 dark:text-white/50 font-medium">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 text-slate-900 dark:text-white font-bold">
                      Self-Paced
                    </th>
                    <th className="text-center py-4 px-4 text-blue-600 dark:text-blue-400 font-bold bg-blue-500/5 rounded-t-xl">
                      Cohort-Based
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Video Content", "Full access", "Full access"],
                    ["Live Sessions", "—", "Weekly (recorded)"],
                    ["Community Access", "—", "Private Slack/Discord"],
                    ["Direct Q&A with Instructor", "—", "Weekly sessions"],
                    ["Accountability", "Self-driven", "Structured deadlines"],
                    ["Project Feedback", "—", "Instructor review"],
                    ["Certificate", "Completion", "Completion + Portfolio"],
                    ["Completion Rate", "~15%", "~85%"],
                    ["Price", "Lower", "Higher"],
                  ].map(([feature, selfPaced, cohort], i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-100 dark:border-slate-800"
                    >
                      <td className="py-4 px-4 text-slate-700 dark:text-white/80 font-medium">
                        {feature}
                      </td>
                      <td className="py-4 px-4 text-center text-slate-600 dark:text-white/60">
                        {selfPaced}
                      </td>
                      <td className="py-4 px-4 text-center text-slate-900 dark:text-white bg-blue-500/5">
                        {cohort}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Enterprise / Team Section */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Training Your Team?
            </h2>
            <p className="text-xl text-slate-600 dark:text-white/60 mb-10 max-w-2xl mx-auto">
              We offer volume discounts for teams and custom enterprise packages with dedicated
              support, private cohorts, and tailored curriculum.
            </p>

            <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Team Discounts
              </h3>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex justify-between text-slate-600 dark:text-white/60">
                  <span>5-10 seats</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">20% off</span>
                </li>
                <li className="flex justify-between text-slate-600 dark:text-white/60">
                  <span>11-25 seats</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">30% off</span>
                </li>
                <li className="flex justify-between text-slate-600 dark:text-white/60">
                  <span>26-50 seats</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">40% off</span>
                </li>
                <li className="flex justify-between text-slate-600 dark:text-white/60">
                  <span>51+ seats</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">Custom</span>
                </li>
              </ul>
              <Link
                href="mailto:enterprise@drlee.ai"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
              >
                Contact for Enterprise Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Payment FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. For enterprise purchases, we can arrange invoice billing.",
                },
                {
                  q: "Is there a money-back guarantee?",
                  a: "Yes! All courses come with a 30-day money-back guarantee. If you're not satisfied with the course content, contact us within 30 days for a full refund—no questions asked.",
                },
                {
                  q: "Can I upgrade from Self-Paced to Cohort?",
                  a: "Absolutely. If you start with Self-Paced and want to join a cohort later, you can upgrade by paying the difference. Contact us when a cohort is starting.",
                },
                {
                  q: "What happens if I miss a payment?",
                  a: "We'll send reminders before each payment. If a payment fails, you'll have 7 days to update your payment method. Access is paused (not revoked) until payment is resolved.",
                },
                {
                  q: "Do you offer scholarships?",
                  a: "We reserve a limited number of scholarships for underrepresented groups in tech. Apply through our scholarship form when enrolling.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-white/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Choose the path that's right for you and start your AI journey today.
            </p>
            <Link
              href="/#catalog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:scale-105 transition-transform"
            >
              Explore Courses
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
