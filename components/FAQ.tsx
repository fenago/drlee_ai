"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a list of <Item> components
// FAQ content tailored for "The Architect" avatar

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "Is this just another surface-level AI course?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          No. This is the opposite. We don&apos;t teach you to call APIs—we teach you to
          build the systems behind them. In &quot;Build Your Own LLM,&quot; you&apos;ll start with
          a blank Python file and build every component of a transformer: tokenization,
          embeddings, attention mechanisms, the decoder. By the end, you&apos;ll have
          built something that actually generates coherent text.
        </p>
        <p>
          This is first-principles learning. It&apos;s hard. It&apos;s demanding. But
          it&apos;s the only way to truly understand AI.
        </p>
      </div>
    ),
  },
  {
    question: "I'm a founder, not a researcher. Is this too technical?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          These masterclasses are specifically designed for technical founders and
          senior engineers who need to make architectural decisions—not become
          full-time ML researchers. We start every concept with a TED Talk-style
          explanation of the &quot;why&quot; before diving into implementation.
        </p>
        <p>
          The goal is to give you enough depth to architect AI systems, evaluate
          technical hires, and make defensible technology decisions for your startup.
          You&apos;ll understand trade-offs that API-only founders never grasp.
        </p>
      </div>
    ),
  },
  {
    question: "What makes these masterclasses 'rare'?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Search for &quot;Build your own LLM from scratch&quot; or &quot;Reasoning models course&quot;—
          you won&apos;t find much. Sebastian Raschka&apos;s book exists, but there&apos;s no live
          course teaching this systematically. Reasoning models (like OpenAI&apos;s o1)
          are cutting-edge—the technology was just released. Mixture of Experts
          architecture? That&apos;s how Mistral competes with OpenAI at 1/10th the cost.
        </p>
        <p>
          We&apos;re teaching frontier AI that most courses won&apos;t cover for years.
        </p>
      </div>
    ),
  },
  {
    question: "What if I can't keep up with the cohort?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          You have lifetime access to all materials regardless of your tier. The
          cohort provides live instruction and accountability, but you can always
          revisit content at your own pace. Many students go through materials
          twice—first with the cohort for structure, then again independently
          for deeper understanding.
        </p>
        <p>
          We also offer office hours specifically for students who want extra help
          on challenging concepts.
        </p>
      </div>
    ),
  },
  {
    question: "Is the Founder's Edition worth the premium?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          If you&apos;re building an AI startup, the 1:1 architecture sessions alone
          are worth the premium. You get direct access to review your specific
          system design, discuss trade-offs for your use case, and get guidance
          on technical decisions that could cost you months of wrong turns.
        </p>
        <p>
          Compare to hiring an ML consultant at $300-500/hour or making expensive
          architecture mistakes. For serious founders, it&apos;s a fraction of the
          alternative cost.
        </p>
      </div>
    ),
  },
  {
    question: "Can my employer reimburse this?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Yes. Most tech companies have professional development budgets of
          $2,000-$5,000 that rarely get used. Our pricing is designed to fit
          within these thresholds. We provide invoices and certificates of
          completion that satisfy most L&D requirements.
        </p>
        <p>
          We&apos;ve had students from Google, Meta, Stripe, and numerous startups
          get full reimbursement.
        </p>
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
