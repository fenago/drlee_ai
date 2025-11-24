// Solution Section: "The First-Principles Path to Mastery"
const Solution = () => {
  const methodology = [
    {
      step: "01",
      title: "Intuitive Concept",
      subtitle: "TED Talk-Style Lesson",
      description: "Every module starts with a clear, visual explanation of the 'why'. We build your mental model before touching any code.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Hands-On Building",
      subtitle: "Build From Scratch",
      description: "You don't just learn the theory—you build the technology from a blank file. This is how true understanding is forged.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Career & Company Velocity",
      subtitle: "Build Your Moat",
      description: "Apply your new skills to create defensible value—whether that's landing a top-tier role or building a startup with proprietary AI.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-base-100 relative overflow-hidden" id="solution">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 md:py-32">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
            The DrLee.ai Methodology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            The First-Principles Path to{" "}
            <span className="gradient-text-blue">Mastery</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Narrative */}
          <div className="space-y-6">
            <p className="text-lg text-base-content/80 leading-relaxed">
              We don&apos;t teach you how to use the tools. <span className="font-semibold text-base-content">We teach you how to build them.</span> DrLee.ai was founded on a single belief: true mastery comes from a deep, intuitive understanding of the core concepts, not from memorizing API calls.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Our methodology is different. Every masterclass follows a proven format: an intuitive, <span className="font-semibold text-brand-blue">TED Talk-style lesson</span> to build your mental model, followed by immediate <span className="font-semibold text-brand-green">hands-on application</span> where you build the technology from scratch. It&apos;s the perfect blend of theory and practice, designed for builders who need to see results.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              This is how you forge an unshakeable <span className="font-semibold text-base-content">intellectual moat</span>—for your career or your company. This is how you move from being a consumer of AI to a creator of it.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a href="#catalog" className="btn btn-primary btn-lg btn-animated">
                Explore the Curriculum
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Methodology steps */}
          <div className="space-y-6">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="group relative bg-base-200 rounded-2xl p-6 hover:bg-base-300 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-brand-blue">{item.step}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-base-content/70">{item.description}</p>
                  </div>
                </div>

                {/* Connector line */}
                {index < methodology.length - 1 && (
                  <div className="absolute left-[3.5rem] top-full w-0.5 h-6 bg-gradient-to-b from-brand-blue/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
