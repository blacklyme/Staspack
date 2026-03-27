"use client";

import { ArrowRight, Globe, ShieldCheck, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-brand-teal/[0.04] animate-float" />
        <div className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full bg-brand-gold/[0.06] animate-float"
             style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-[25%] w-32 h-32 rounded-full bg-brand-teal/[0.03] animate-pulse-soft" />
        {/* Grid dots */}
        <div className="absolute top-32 left-[15%] grid grid-cols-4 gap-3 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 lg:pt-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/[0.07] border border-brand-teal/10 mb-8 transition-all duration-700"
            style={{
              transitionTimingFunction: "var(--ease-out)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <Globe size={14} className="text-brand-teal" />
            <span className="text-xs font-semibold text-brand-teal tracking-wide uppercase">
              UK & Turkey Procurement Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.08] tracking-tight text-brand-teal-dark transition-all duration-700"
            style={{
              transitionTimingFunction: "var(--ease-out)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "100ms",
            }}
          >
            Strategic Procurement,{" "}
            <span className="text-brand-gold">Simplified.</span>
          </h1>

          {/* Sub */}
          <p
            className="mt-6 text-lg sm:text-xl text-brand-slate leading-relaxed max-w-2xl transition-all duration-700"
            style={{
              transitionTimingFunction: "var(--ease-out)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "200ms",
            }}
          >
            Over 30 years of global procurement expertise. We connect UK and European
            businesses with vetted manufacturers across Europe and Turkey, saving you
            hundreds of thousands of pounds.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700"
            style={{
              transitionTimingFunction: "var(--ease-out)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "300ms",
            }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-brand-teal rounded-xl
                         cursor-pointer transition-all duration-200 hover:bg-brand-teal-dark hover:gap-3 active:scale-[0.97]"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              Start a Conversation
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-brand-teal bg-white border-2 border-brand-teal/15 rounded-xl
                         cursor-pointer transition-all duration-200 hover:border-brand-teal/30 hover:bg-brand-teal/[0.03] active:scale-[0.97]"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              Explore Services
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-14 flex flex-wrap gap-8 transition-all duration-700"
            style={{
              transitionTimingFunction: "var(--ease-out)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "500ms",
            }}
          >
            {[
              { icon: ShieldCheck, text: "Vetted Suppliers" },
              { icon: TrendingDown, text: "Cost Reduction" },
              { icon: Globe, text: "UK + Turkey Ops" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-sm text-brand-slate/70">
                <div className="w-8 h-8 rounded-lg bg-brand-teal/[0.06] flex items-center justify-center">
                  <Icon size={16} className="text-brand-teal" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--brand-cream)] to-transparent" />
    </section>
  );
}
