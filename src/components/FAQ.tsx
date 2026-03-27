"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What does Staspack actually help with?",
    a: "We handle the entire procurement and supply chain process: from sourcing and qualifying suppliers, to logistics coordination, quality oversight, and ongoing supplier management. Whether you need a specific packaging product or a complete procurement overhaul, we act as your dedicated partner.",
  },
  {
    q: "Do you only work with packaging projects?",
    a: "While packaging is our core speciality, our procurement and supply chain expertise extends across broader categories. If it involves sourcing, supplier management, or supply chain optimisation, we can help.",
  },
  {
    q: "Who do you typically work with?",
    a: "We work with procurement teams, company founders, operations directors, and supply chain leaders. Our clients range from startups scaling their first production run to international retail chains optimising their global supply chain.",
  },
  {
    q: "What is the benefit of your UK and Turkey model?",
    a: "Our dual-country presence gives you strategic oversight from our UK headquarters combined with boots on the ground in Turkey. This means faster supplier validation, hands-on quality control, and quicker issue resolution, all while maintaining clear UK-based communication with you.",
  },
  {
    q: "Can you help if we already have suppliers but things are not running smoothly?",
    a: "Absolutely. We regularly step in to optimise existing supplier relationships, renegotiate terms, improve quality outcomes, and streamline logistics. Sometimes a fresh, expert perspective is all it takes to turn a struggling supply chain around.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "We will get back to you within 24 hours. Typically, we start with a brief discovery call to understand your needs, then provide a tailored proposal outlining how we can help, expected timelines, and potential cost savings.",
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-brand-teal/[0.08] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer
                   transition-colors duration-200 hover:text-brand-teal"
        style={{ transitionTimingFunction: "var(--ease-out)" }}
        aria-expanded={open}
      >
        <span className="text-base font-heading font-semibold text-brand-teal-dark pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`text-brand-teal shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          style={{ transitionTimingFunction: "var(--ease-out)" }}
        />
      </button>
      <div
        className="grid transition-all duration-300"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-brand-slate/75 leading-relaxed pr-10">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-gold tracking-wide uppercase mb-3">
            Questions & Answers
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal-dark leading-tight">
            Frequently asked questions
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-brand-teal/[0.06] shadow-[0_2px_12px_rgba(15,76,92,0.04)] px-6 sm:px-8">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
