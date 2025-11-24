import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";

// Featured testimonial (large format)
const featuredTestimonial = {
  name: "Sarah Chen",
  role: "Founder & CEO",
  company: "AI Startup (YC W24)",
  text: "I went from calling APIs to building our own fine-tuned model in 12 weeks. The 'Build Your Own LLM' masterclass gave me the confidence to architect our entire AI stack. We raised our seed round partly because investors saw we had deep technical understanding, not just an API wrapper. This wasn't just education—it was the foundation of our technical moat.",
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  metric: "Raised $4.2M Seed",
};

// Grid testimonials
const testimonials: {
  name: string;
  role: string;
  company: string;
  text: string;
  img?: string | StaticImageData;
  metric?: string;
}[] = [
  {
    name: "Marcus Rodriguez",
    role: "Principal Engineer",
    company: "Series B Startup",
    text: "The first-principles approach completely changed how I think about AI systems. I used to nod along in architecture meetings. Now I'm the one at the whiteboard, designing multi-agent systems from scratch.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    metric: "Promoted to Staff",
  },
  {
    name: "Dr. Emily Nakamura",
    role: "Director of ML",
    company: "Fortune 500",
    text: "I have a PhD in ML but the landscape changed so fast. These masterclasses filled in the gaps I didn't know I had—especially around reasoning models and agentic systems.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    metric: "Leading AI Division",
  },
  {
    name: "James Wilson",
    role: "Technical Founder",
    company: "B2B SaaS",
    text: "Built our entire RAG pipeline from scratch after the GraphRAG masterclass. Our retrieval accuracy went from 72% to 94%. Customers noticed immediately.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    metric: "94% Retrieval Accuracy",
  },
  {
    name: "Priya Sharma",
    role: "VP of Engineering",
    company: "Healthcare Tech",
    text: "The Agentic Systems course helped me architect our autonomous clinical workflow system. We reduced processing time by 80% and got FDA clearance faster than expected.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    metric: "80% Faster Processing",
  },
  {
    name: "David Kim",
    role: "ML Architect",
    company: "FinTech Unicorn",
    text: "The MoE masterclass was mind-blowing. Implemented sparse experts for our fraud detection model—inference costs dropped 60% while accuracy improved.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    metric: "60% Cost Reduction",
  },
  {
    name: "Alexandra Torres",
    role: "Founding Engineer",
    company: "AI Agent Startup",
    text: "Multi-Agent Systems course taught me how to build AI teams, not just AI tools. Our agents now collaborate better than most human teams I've worked with.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    metric: "Shipped to 10K Users",
  },
];

const Testimonials3 = () => {
  return (
    <section className="bg-base-200 relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 md:py-32">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            From API Users to{" "}
            <span className="gradient-text-blue">AI Architects</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            These builders transformed their understanding of AI—and their careers.
            Now they architect systems instead of just calling them.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-12">
          <figure className="relative bg-gradient-to-br from-brand-blue/10 via-brand-green/5 to-transparent rounded-3xl p-8 md:p-12 border border-brand-blue/20">
            <div className="absolute top-6 right-8 md:top-8 md:right-12">
              <span className="px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-sm font-semibold">
                {featuredTestimonial.metric}
              </span>
            </div>

            <svg className="w-12 h-12 text-brand-blue/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="mb-8">
              <p className="text-xl md:text-2xl text-base-content/90 leading-relaxed font-medium">
                &ldquo;{featuredTestimonial.text}&rdquo;
              </p>
            </blockquote>

            <figcaption className="flex items-center gap-4">
              <div className="overflow-hidden rounded-full bg-base-300 shrink-0 ring-2 ring-brand-blue/30">
                {featuredTestimonial.img && (
                  <Image
                    className="w-14 h-14 rounded-full object-cover"
                    src={featuredTestimonial.img}
                    alt={`${featuredTestimonial.name}'s testimonial for ${config.appName}`}
                    width={56}
                    height={56}
                  />
                )}
              </div>
              <div>
                <div className="font-bold text-lg text-base-content">
                  {featuredTestimonial.name}
                </div>
                <div className="text-base-content/70">
                  {featuredTestimonial.role}, {featuredTestimonial.company}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="group relative bg-base-100 rounded-2xl p-6 border border-base-300 hover:border-brand-blue/50 transition-all duration-300 card-hover"
            >
              {/* Metric badge */}
              {testimonial.metric && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-brand-green/10 text-brand-green font-medium">
                    {testimonial.metric}
                  </span>
                </div>
              )}

              <blockquote className="mb-6 pr-16">
                <p className="text-base-content/80 leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-base-200">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  {testimonial.img ? (
                    <Image
                      className="w-10 h-10 rounded-full object-cover"
                      src={testimonial.img}
                      alt={`${testimonial.name}'s testimonial for ${config.appName}`}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <span className="w-10 h-10 rounded-full flex justify-center items-center text-sm font-medium bg-base-300">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-sm text-base-content">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-base-content/60">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Company logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-base-content/50 mb-6">
            Join builders from leading companies and startups
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {["Google", "Meta", "Stripe", "Anthropic", "Y Combinator", "a16z Portfolio"].map((company) => (
              <span key={company} className="text-base-content/30 font-semibold text-lg hover:text-base-content/50 transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;
