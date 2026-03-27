"use client";

import ScrollReveal from "./ScrollReveal";
import { Award, Briefcase, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual card */}
          <ScrollReveal variant="left">
            <div className="relative">
              <div className="bg-brand-teal rounded-2xl p-10 sm:p-12 text-white relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/[0.04] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-brand-gold/10 translate-y-1/2 -translate-x-1/2" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-brand-gold/20 flex items-center justify-center mb-6">
                    <Award size={28} className="text-brand-gold-light" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
                    Beyza Metherell Stas
                  </h3>
                  <p className="text-white/70 font-medium text-lg mb-6">
                    Founder & Managing Director
                  </p>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      With over three decades of global procurement and supply chain
                      experience, Beyza has worked with multinational corporations and
                      SMEs across the world, saving businesses hundreds of thousands of
                      pounds through strategic sourcing and supplier management.
                    </p>
                    <p>
                      Her dual presence in the UK and Turkey gives Staspack a unique edge:
                      UK-based strategic direction combined with boots on the ground in
                      Turkey for supplier validation, quality control, and faster resolution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-8 bg-white rounded-xl shadow-lg border border-brand-teal/[0.08] px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                  <Briefcase size={18} className="text-brand-gold" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-teal-dark">30+ Years</div>
                  <div className="text-xs text-brand-slate/60">Procurement Expert</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Company story */}
          <ScrollReveal variant="right">
            <div>
              <p className="text-sm font-semibold text-brand-gold tracking-wide uppercase mb-3">
                About Staspack
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal-dark leading-tight mb-6">
                Taking the stress out of procurement
              </h2>
              <div className="space-y-4 text-brand-slate leading-relaxed">
                <p>
                  Staspack Procurement Services was founded on a clear vision: make
                  procurement simple, strategic, and scalable. We work as your dedicated
                  procurement partner, aligning purchasing decisions with your broader
                  business objectives to drive sustainable and competitive growth.
                </p>
                <p>
                  Based in Didcot, Oxfordshire with on-the-ground operations in Turkey,
                  we bridge UK and European brands with trusted manufacturers. Our
                  category-led expertise, regular compliance reviews, and hands-on supplier
                  management ensure you get the best quality at the best price.
                </p>
              </div>

              {/* Company details */}
              <div className="mt-8 p-5 rounded-xl bg-brand-teal/[0.04] border border-brand-teal/[0.08]">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-teal mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-brand-teal-dark">
                      Staspack Procurement Services Ltd
                    </div>
                    <div className="text-sm text-brand-slate/70 mt-0.5">
                      Company No. 15361486
                    </div>
                    <div className="text-sm text-brand-slate/70">
                      4 Ash Way, Didcot, OX11 6AN, United Kingdom
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
