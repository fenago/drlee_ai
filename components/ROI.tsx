// ROI Section: "This is Not an Expense. It is How You Build Your Moat."
const ROI = () => {
  const metrics = [
    {
      title: "Build Defensible Products",
      subtitle: "For Entrepreneurs",
      description: "Create proprietary AI that gives you a technical moat VCs pay premium for.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "Lead High-Stakes Projects",
      subtitle: "For Intrapreneurs",
      description: "Become the go-to AI expert who architects critical systems and earns the big promotions.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      )
    },
    {
      title: "Join the Top 1%",
      subtitle: "For Both",
      description: "Develop first-principles understanding that puts you in the elite tier of AI talent.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-brand-slate relative overflow-hidden" id="roi">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 md:py-32">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            This is Not an Expense.
            <br />
            <span className="gradient-text">It&apos;s How You Build Your Moat.</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The skills you forge here don&apos;t just make you a better employee—they make you a more
            formidable founder and a more valuable leader. You will learn to build the defensible
            systems and products that create lasting value.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all duration-300 hover-lift"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white mb-6 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{metric.title}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-sm font-medium mb-4">
                {metric.subtitle}
              </span>
              <p className="text-white/70">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison diagram */}
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Two Paths. One Choice.</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Commoditized Path */}
            <div className="relative p-6 rounded-xl bg-white/5 border border-red-500/30">
              <div className="absolute -top-3 left-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
                  The Commoditized Path
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white/80 mb-3">Learning to Use Tools</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">-</span> Copy-paste from tutorials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">-</span> Dependent on APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">-</span> Can&apos;t debug or innovate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">-</span> Easily replaceable
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-red-400 font-semibold">Result:</span>
                  <span className="text-white/70 ml-2">Flat career trajectory</span>
                </div>
              </div>
            </div>

            {/* Architect Path */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 border border-brand-green/30">
              <div className="absolute -top-3 left-4">
                <span className="px-3 py-1 bg-brand-green/20 text-brand-green text-sm font-medium rounded-full">
                  The Architect Path
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white mb-3">Learning to Build</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-green">+</span> First-principles understanding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-green">+</span> Build proprietary AI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-green">+</span> Debug and innovate freely
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-green">+</span> Irreplaceable expertise
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <span className="text-brand-green font-semibold">Result:</span>
                  <span className="text-white ml-2">Exponential value creation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#pricing" className="btn btn-lg bg-white text-brand-slate hover:bg-white/90 border-0 btn-animated">
            Choose the Architect Path
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ROI;
