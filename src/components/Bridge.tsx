"use client";

import ScrollReveal from "./ScrollReveal";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const UK_BENEFITS = [
  "Strategic direction from Oxfordshire HQ",
  "UK market expertise and compliance",
  "Direct client relationship management",
  "Local communication, no timezone barriers",
];

const TURKEY_BENEFITS = [
  "Boots on the ground for supplier validation",
  "Factory checks and quality audits",
  "Faster issue resolution with manufacturers",
  "Access to competitive Turkish production",
];

export default function Bridge() {
  return (
    <section className="py-24 sm:py-32 bg-brand-teal-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-teal/30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-gold/5 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-gold-light tracking-wide uppercase mb-3">
            Our Unique Model
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
            UK Strategy. Turkish Execution.
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            A dual-country presence that gives you the best of both worlds:
            strategic oversight from the UK, hands-on sourcing from Turkey.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* UK Card */}
          <ScrollReveal variant="left">
            <div className="relative p-8 sm:p-10 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center">
                  <MapPin size={22} className="text-brand-gold-light" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">United Kingdom</h3>
                  <p className="text-sm text-white/50">Didcot, Oxfordshire</p>
                </div>
              </div>
              <div className="space-y-3">
                {UK_BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-gold-light mt-0.5 shrink-0" />
                    <span className="text-sm text-white/75 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Turkey Card */}
          <ScrollReveal variant="right">
            <div className="relative p-8 sm:p-10 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-teal-light/20 flex items-center justify-center">
                  <MapPin size={22} className="text-brand-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Turkey</h3>
                  <p className="text-sm text-white/50">On-the-ground operations</p>
                </div>
              </div>
              <div className="space-y-3">
                {TURKEY_BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-teal-light mt-0.5 shrink-0" />
                    <span className="text-sm text-white/75 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Connector */}
        <ScrollReveal className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-brand-gold/10 border border-brand-gold/20">
            <span className="text-sm font-semibold text-brand-gold-light">Seamless Collaboration</span>
            <ArrowRight size={16} className="text-brand-gold-light" />
            <span className="text-sm text-white/60">Faster, Cheaper, Better</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
