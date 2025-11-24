"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";

const navItems = [
  { href: "/#solution", label: "Methodology" },
  { href: "/#catalog", label: "Catalog" },
  { href: "/#roi", label: "Why Learn" },
  { href: "/#testimonials", label: "Stories" },
  { href: "/#pricing", label: "Pricing" },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with logo and mobile menu */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-brand-slate/95 backdrop-blur-2xl shadow-2xl shadow-black/20"
            : "bg-gradient-to-b from-brand-slate/80 via-brand-slate/50 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/40 to-brand-blue/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"></div>
                <div className="relative bg-gradient-to-br from-brand-slate to-brand-blue-deep p-2 rounded-xl border border-white/10 group-hover:border-brand-green/30 transition-all duration-300">
                  <Image
                    src={logo}
                    alt={`${config.appName} logo`}
                    className="w-7 h-7 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    priority={true}
                    width={28}
                    height={28}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {config.appName}
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] -mt-0.5 hidden sm:block">
                  AI Masterclasses
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Floating Pill */}
            <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <div className="relative flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5 shadow-2xl shadow-black/20">
                {/* Glow effect behind the nav */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-transparent to-brand-green/10 rounded-full blur-xl opacity-50"></div>

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setActiveItem(item.href)}
                    onMouseLeave={() => setActiveItem(null)}
                    className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full group"
                  >
                    {/* Active/Hover background */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        activeItem === item.href
                          ? "bg-white/10 scale-100"
                          : "bg-transparent scale-95"
                      }`}
                    ></span>

                    {/* Glowing dot indicator */}
                    <span
                      className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                        activeItem === item.href
                          ? "bg-brand-green opacity-100 shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]"
                          : "bg-transparent opacity-0"
                      }`}
                    ></span>

                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#catalog"
                className="group relative px-6 py-2.5 rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
              >
                {/* Animated gradient border */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue bg-[length:200%_100%] animate-gradient-x"></span>

                {/* Inner background */}
                <span className="absolute inset-[2px] rounded-full bg-brand-slate group-hover:bg-transparent transition-colors duration-300"></span>

                {/* Glow effect */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-blue to-brand-green blur-xl"></span>

                <span className="relative z-10 flex items-center gap-2 text-sm font-semibold text-white">
                  Start Building
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col items-center justify-center gap-1">
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "w-5 rotate-45 translate-y-1.5" : "w-5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? "w-0 opacity-0" : "w-3.5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="mx-4 mt-2 rounded-2xl bg-brand-slate/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
          {/* Gradient accent line */}
          <div className="h-0.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow"></div>

          <div className="p-4 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Number indicator */}
                <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-white/5 text-xs font-mono text-white/40 group-hover:bg-brand-green/20 group-hover:text-brand-green transition-all duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-base">{item.label}</span>
                <svg
                  className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="/#catalog"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30"
              >
                <span>Start Building</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
