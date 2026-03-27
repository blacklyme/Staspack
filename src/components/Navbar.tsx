"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/85 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,76,92,0.08)]"
          : "py-5 bg-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--ease-out)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-brand-teal flex items-center justify-center transition-transform duration-200"
               style={{ transitionTimingFunction: "var(--ease-out)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 6h16M4 10h12M4 14h16M4 18h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex items-baseline">
            <span className="text-xl font-heading font-bold text-brand-gold tracking-tight">stas</span>
            <span className="text-xl font-heading font-bold text-brand-teal tracking-tight">pack</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-brand-slate rounded-lg cursor-pointer
                         transition-colors duration-200 hover:text-brand-teal hover:bg-brand-teal/5"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-brand-teal rounded-lg cursor-pointer
                       transition-all duration-200 hover:bg-brand-teal-dark active:scale-[0.97]"
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-brand-teal cursor-pointer
                     transition-colors duration-150 hover:bg-brand-teal/5 active:scale-[0.95]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 bg-white transition-all duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ transitionTimingFunction: "var(--ease-out)" }}
      >
        <div className="pt-20 px-6 flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-lg font-medium text-brand-teal-dark rounded-xl cursor-pointer
                         transition-all duration-200 hover:bg-brand-teal/5"
              style={{
                transitionTimingFunction: "var(--ease-out)",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-3.5 text-center text-lg font-semibold text-white bg-brand-teal rounded-xl
                       cursor-pointer transition-all duration-200 hover:bg-brand-teal-dark active:scale-[0.97]"
            style={{
              transitionTimingFunction: "var(--ease-out)",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              transitionDelay: `${NAV_LINKS.length * 50}ms`,
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
