// Problem Agitation: "The Builder's Dilemma" - Redesigned with gradient aesthetic
const Problem = () => {
  const problems = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
      title: "The Imposter in the Arena",
      description: "You're a respected leader, but you feel like an imposter in the new AI-driven world. You're nodding along in meetings, but you don't have the first-principles understanding to truly lead.",
      gradient: "from-purple-500/20 to-brand-blue/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      title: "Drowning in the Shallows",
      description: "You've consumed endless tutorials and hype-filled articles, but you're left with a collection of disconnected facts, not a true mental model. You're looking for depth in a sea of superficiality.",
      gradient: "from-brand-blue/20 to-cyan-500/20",
      iconColor: "text-brand-blue",
      borderColor: "border-brand-blue/30",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "A Builder Who Can't Build",
      description: "Your identity is tied to your ability to create. But the new tools feel like magic boxes you can't open. This isn't just a skills gap; it's an existential threat to who you are.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/30",
    }
  ];

  return (
    <section className="relative overflow-hidden" id="problem">
      {/* Gradient background matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-blue-deep/50 to-brand-slate"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 via-brand-green/10 to-brand-yellow/20 animate-pulse"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 md:py-32">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-red-500/20 mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-red-300">The Builder&apos;s Dilemma</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            The 2 AM Anxiety is{" "}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                Real
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-yellow-400/20 blur-lg"></span>
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Sound familiar? You&apos;re not alone. These are the fears that keep ambitious leaders awake at night.
          </p>
        </div>

        {/* 3-column grid of problems */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 border ${problem.borderColor} bg-gradient-to-br ${problem.gradient} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/10`}
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-xl"></div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon with gradient background */}
                <div className={`${problem.iconColor} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                    {problem.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-green transition-all duration-300">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {problem.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${problem.gradient} opacity-50`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional quote */}
        <div className="mt-20 text-center">
          <div className="relative inline-block max-w-3xl">
            {/* Quote background */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-green/10 to-brand-yellow/10 rounded-2xl blur-xl"></div>

            <blockquote className="relative glass rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="absolute -top-4 left-8 text-6xl text-brand-blue/40 font-serif">&ldquo;</div>
              <p className="text-2xl md:text-3xl font-medium text-white/90 italic leading-relaxed">
                How can I architect a company if I can&apos;t architect the core technology?
              </p>
              <footer className="mt-6 flex items-center justify-center gap-3">
                <span className="w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></span>
                <span className="text-white/50 text-sm">The question that keeps Architects up at night</span>
                <span className="w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></span>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Transition arrow */}
        <div className="mt-16 flex justify-center">
          <a href="#solution" className="group flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">There is a better way</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problem;
