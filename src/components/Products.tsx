"use client";

import ScrollReveal from "./ScrollReveal";
import {
  Package,
  Box,
  FileText,
  Layers,
  ShoppingBag,
  Scissors,
  CircleDot,
  Leaf,
} from "lucide-react";

const PRODUCTS = [
  { icon: Layers, name: "Stretch Film & Shrink Wrap", desc: "Industrial wrapping solutions for pallets and products" },
  { icon: Box, name: "Corrugated Boxes", desc: "Custom and standard cardboard packaging" },
  { icon: FileText, name: "Protective Paper & Kraft Rolls", desc: "Industrial paper, VCI paper, PE Kraft paper" },
  { icon: CircleDot, name: "Paper Cores & Postal Tubes", desc: "Precision-manufactured cores in all dimensions" },
  { icon: Package, name: "Backing Boards", desc: "Greyboards in variable thickness and size" },
  { icon: ShoppingBag, name: "Paper Bags", desc: "Grocery and shopping bags in custom designs" },
  { icon: Scissors, name: "Strapping Solutions", desc: "PET and PP strapping for secure loads" },
  { icon: Leaf, name: "Sustainable Packaging", desc: "Recycled and recyclable eco-friendly materials" },
];

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-gold tracking-wide uppercase mb-3">
            Products We Source
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal-dark leading-tight">
            Packaging products for every industry
          </h2>
          <p className="mt-4 text-brand-slate leading-relaxed">
            From stretch film to sustainable materials, we source from vetted
            European and Turkish manufacturers at competitive prices.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="stagger">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-brand-teal/[0.06]
                             cursor-default transition-all duration-250 hover:border-brand-gold/20 hover:shadow-[0_4px_20px_rgba(212,160,18,0.06)]"
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/[0.08] flex items-center justify-center shrink-0
                                  transition-colors duration-250 group-hover:bg-brand-gold/15"
                       style={{ transitionTimingFunction: "var(--ease-out)" }}>
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-semibold text-brand-teal-dark leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-brand-slate/60 mt-1 leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
