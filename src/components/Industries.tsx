"use client";

import ScrollReveal from "./ScrollReveal";
import {
  ShoppingCart,
  Truck,
  Factory,
  Pill,
  Car,
  Building2,
  Droplets,
  Rocket,
  Warehouse,
  Coffee,
} from "lucide-react";

const INDUSTRIES = [
  { icon: ShoppingCart, name: "E-commerce & Retail" },
  { icon: Warehouse, name: "3PL & Distribution" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Coffee, name: "FMCG" },
  { icon: Pill, name: "Pharmaceuticals" },
  { icon: Car, name: "Automotive" },
  { icon: Building2, name: "Building Products" },
  { icon: Droplets, name: "Hygiene" },
  { icon: Truck, name: "Logistics" },
  { icon: Rocket, name: "Startups" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-gold tracking-wide uppercase mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal-dark leading-tight">
            From startups to international retail chains
          </h2>
          <p className="mt-4 text-brand-slate leading-relaxed">
            We work with procurement teams, founders, directors, and operations leaders
            across every sector that relies on packaging and supply chain efficiency.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="stagger">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-brand-teal/[0.06] bg-[var(--brand-cream)]
                             cursor-default transition-all duration-250 hover:border-brand-teal/15 hover:shadow-[0_4px_16px_rgba(15,76,92,0.05)]"
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/[0.06] flex items-center justify-center
                                  transition-colors duration-250 group-hover:bg-brand-teal/10"
                       style={{ transitionTimingFunction: "var(--ease-out)" }}>
                    <Icon size={22} className="text-brand-teal" />
                  </div>
                  <span className="text-sm font-medium text-brand-teal-dark text-center leading-snug">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
