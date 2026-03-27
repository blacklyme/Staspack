"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import {
  Search,
  ClipboardCheck,
  Truck,
  FileCheck,
  Leaf,
  ShieldCheck,
  BarChart3,
  Handshake,
} from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    title: "Sourcing & Supplier Qualification",
    description:
      "We identify and vet manufacturers across Europe and Turkey, ensuring quality, reliability, and competitive pricing for your specific needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Procurement Consultancy",
    description:
      "Strategic procurement guidance that aligns purchasing decisions with your broader business objectives for sustainable growth.",
  },
  {
    icon: Handshake,
    title: "Supplier Onboarding & Management",
    description:
      "End-to-end supplier relationship management, from initial qualification through ongoing performance monitoring and compliance reviews.",
  },
  {
    icon: Truck,
    title: "Logistics & Documentation",
    description:
      "Complete coordination of customs, cross-border logistics, and documentation to ensure smooth delivery from supplier to your door.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Oversight",
    description:
      "Factory checks, pilot sampling, and regular quality audits. Our on-the-ground presence in Turkey ensures standards are met first-hand.",
  },
  {
    icon: BarChart3,
    title: "Cost Optimisation",
    description:
      "Category-led expertise to drive down total cost of ownership. We identify savings opportunities most procurement teams miss.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Risk Management",
    description:
      "Navigating regulatory complexity across borders. Regular compliance reviews ensure your supply chain meets all requirements.",
  },
  {
    icon: Leaf,
    title: "Sustainable Procurement",
    description:
      "Focus on eco-friendly, recycled, and recyclable materials. We help you meet sustainability targets without compromising on quality.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-gold tracking-wide uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal-dark leading-tight">
            End-to-end procurement, from sourcing to delivery
          </h2>
          <p className="mt-4 text-brand-slate leading-relaxed">
            We handle the complexity so you can focus on growing your business.
            Every service is backed by 30+ years of hands-on expertise.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  className="group relative p-6 rounded-2xl border border-brand-teal/[0.06] bg-[var(--brand-cream)]
                             cursor-pointer shimmer-hover h-full
                             transition-shadow duration-250 hover:border-brand-teal/15 hover:shadow-[0_8px_30px_rgba(15,76,92,0.06)]"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/[0.06] flex items-center justify-center mb-5
                                  transition-colors duration-250 group-hover:bg-brand-teal/10">
                    <Icon size={22} className="text-brand-teal" />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-brand-teal-dark mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-slate/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
