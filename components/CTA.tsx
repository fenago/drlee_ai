// Final CTA Section with animated gradient background
const CTA = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background - same as Hero for completion */}
      <div className="absolute inset-0 animated-gradient opacity-90"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl floating" style={{ animationDelay: '-2s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 bg-brand-green rounded-full pulse-ring"></span>
          <span className="text-sm font-medium text-white/90">
            Join 500+ Architects Building the Future
          </span>
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight text-glow">
          Your Future is Not a
          <br />
          Spectator Sport.
          <br />
          <span className="gradient-text">It&apos;s Time to Build.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop waiting for the future to happen to you. Join a community of elite builders,
          founders, and architects who are shaping the next decade of technology.
        </p>

        {/* CTA Button */}
        <a
          href="#catalog"
          className="btn btn-lg bg-white text-brand-slate hover:bg-white/90 border-0 px-10 btn-animated hover-lift text-lg"
        >
          <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Explore the Full Catalog
        </a>

        {/* Trust elements */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Lifetime Access</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Private Community</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
