const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-90"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue-deep/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 py-20 text-center">
        {/* Pre-headline badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-brand-green rounded-full pulse-ring"></span>
          <span className="text-sm font-medium text-white/90">
            For the Builders, the Founders, and the Intellectually Restless
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight text-glow animate-slide-up">
          Stop Consuming the Future.
          <br />
          <span className="gradient-text">Start Building It.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          You&apos;re a builder, but you feel like you&apos;ve forgotten how to build.
          You&apos;re tired of the shallow hype and the dense theory. It&apos;s time to go
          back to first principles and forge the deep, practical skills to architect
          the future. <span className="text-brand-green font-semibold">This is where you build your moat.</span>
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#catalog"
            className="btn btn-lg bg-white text-brand-slate hover:bg-white/90 border-0 px-8 btn-animated hover-lift"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Explore the Masterclasses
          </a>
          <a
            href="#solution"
            className="btn btn-lg btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch the Manifesto
          </a>
        </div>

        {/* Trust indicators - Company logos as styled text */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-white/50 mb-6 uppercase tracking-wider">
            Trusted by builders from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {/* Google - Product Sans style */}
            <span className="text-white/40 hover:text-white/70 transition-colors text-xl md:text-2xl font-medium tracking-tight" style={{ fontFamily: 'system-ui' }}>
              Google
            </span>
            {/* Meta */}
            <span className="text-white/40 hover:text-white/70 transition-colors text-xl md:text-2xl font-semibold tracking-tight">
              Meta
            </span>
            {/* Amazon */}
            <span className="text-white/40 hover:text-white/70 transition-colors text-xl md:text-2xl font-bold tracking-tight italic">
              amazon
            </span>
            {/* Microsoft - with squares icon */}
            <span className="text-white/40 hover:text-white/70 transition-colors text-xl md:text-2xl font-light tracking-tight flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 23 23" fill="currentColor">
                <path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z"/>
              </svg>
              Microsoft
            </span>
            {/* Apple - with apple icon */}
            <span className="text-white/40 hover:text-white/70 transition-colors text-xl md:text-2xl font-medium tracking-tight flex items-center gap-1">
              <svg className="w-5 h-5" viewBox="0 0 17 20" fill="currentColor">
                <path d="M14.25 10.73c-.02-2.08 1.7-3.08 1.77-3.13-1-1.42-2.5-1.61-3.03-1.63-1.27-.14-2.52.76-3.18.76-.67 0-1.68-.75-2.77-.73-1.4.02-2.72.83-3.44 2.09-1.49 2.58-.38 6.38 1.05 8.47.72 1.02 1.56 2.16 2.66 2.12 1.08-.04 1.48-.68 2.78-.68 1.29 0 1.66.68 2.77.66 1.15-.02 1.87-1.03 2.56-2.06.83-1.17 1.16-2.32 1.18-2.38-.03-.01-2.24-.86-2.26-3.42l-.09-.07zm-2.11-6.3C12.85 3.57 13.35 2.4 13.2 1.24c-1.02.04-2.3.7-3.03 1.54-.65.75-1.24 1.98-1.09 3.13 1.15.08 2.33-.58 3.06-1.48z"/>
              </svg>
              Apple
            </span>
            {/* Netflix */}
            <span className="text-white/40 hover:text-white/70 transition-colors text-xl md:text-2xl font-bold tracking-tighter">
              NETFLIX
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
