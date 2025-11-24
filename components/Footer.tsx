import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    curriculum: [
      { label: "Hardcore Developers", href: "/#catalog" },
      { label: "Citizen Developer", href: "/#catalog" },
      { label: "All 21 Courses", href: "/#catalog" },
      { label: "Bundles", href: "/#pricing" },
      { label: "Take Assessment", href: "/#assessment" },
    ],
    company: [
      { label: "About", href: "/#solution" },
      { label: "Learning Modalities", href: "/modalities" },
      { label: "Financing Options", href: "/financing" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: `mailto:${config.resend.supportEmail}` },
    ],
    legal: [
      { label: "Terms of Service", href: "/tos" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund Policy", href: "/tos" },
    ],
  };

  return (
    <footer className="relative bg-brand-slate overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/DrLeeAI_Logo.png"
                alt={`${config.appName} logo`}
                priority={true}
                className="h-12 w-auto invert brightness-200"
                width={180}
                height={48}
              />
            </Link>

            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              Premium masterclasses for founders, engineers, and leaders who want to build AI from first principles. Stop consuming the future. Start building it.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://twitter.com/drlee_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/drlee-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@drlee-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Newsletter CTA */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/60 text-sm mb-3">
                Get weekly insights on AI engineering and leadership.
              </p>
              <a
                href="https://courses.drlee.ai/newsletter-subscription"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Subscribe to Newsletter
              </a>
            </div>
          </div>

          {/* Curriculum links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Curriculum
            </h4>
            <ul className="space-y-3">
              {footerLinks.curriculum.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} {config.appName}. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Built with</span>
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>for builders everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
