"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin, Send, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-gold tracking-wide uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal-dark leading-tight">
            Ready to optimise your procurement?
          </h2>
          <p className="mt-4 text-brand-slate leading-relaxed">
            Tell us about your needs and we will get back to you within 24 hours
            with a tailored proposal.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <ScrollReveal variant="left" className="lg:col-span-3">
            {submitted ? (
              <div className="bg-brand-teal/[0.04] rounded-2xl border border-brand-teal/10 p-10 sm:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-5">
                  <Send size={24} className="text-brand-teal" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-teal-dark mb-2">
                  Message Sent
                </h3>
                <p className="text-brand-slate/70">
                  Thank you for reaching out. We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[var(--brand-cream)] rounded-2xl border border-brand-teal/[0.06] p-8 sm:p-10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-brand-teal-dark mb-1.5">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-teal/10 text-brand-teal-dark text-sm
                                 placeholder:text-brand-slate/40 outline-none
                                 transition-all duration-200 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/10"
                      style={{ transitionTimingFunction: "var(--ease-out)" }}
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-brand-teal-dark mb-1.5">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-teal/10 text-brand-teal-dark text-sm
                                 placeholder:text-brand-slate/40 outline-none
                                 transition-all duration-200 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/10"
                      style={{ transitionTimingFunction: "var(--ease-out)" }}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-teal-dark mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-teal/10 text-brand-teal-dark text-sm
                               placeholder:text-brand-slate/40 outline-none
                               transition-all duration-200 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/10"
                    style={{ transitionTimingFunction: "var(--ease-out)" }}
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-teal-dark mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-teal/10 text-brand-teal-dark text-sm
                               placeholder:text-brand-slate/40 outline-none
                               transition-all duration-200 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/10"
                    style={{ transitionTimingFunction: "var(--ease-out)" }}
                    placeholder="+44 (0)7890 000000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-teal-dark mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-teal/10 text-brand-teal-dark text-sm
                               placeholder:text-brand-slate/40 outline-none resize-none
                               transition-all duration-200 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/10"
                    style={{ transitionTimingFunction: "var(--ease-out)" }}
                    placeholder="Tell us about your procurement needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-brand-teal rounded-xl
                             cursor-pointer transition-all duration-200 hover:bg-brand-teal-dark active:scale-[0.97]"
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal variant="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-brand-teal rounded-2xl text-white">
                <h3 className="text-lg font-heading font-bold mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <a
                    href="mailto:sales@staspack.com"
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0
                                    transition-colors duration-200 group-hover:bg-white/15">
                      <Mail size={18} className="text-brand-gold-light" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-0.5">Email</div>
                      <div className="text-sm font-medium text-white/90 transition-colors duration-200 group-hover:text-white">
                        sales@staspack.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+447890823840"
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0
                                    transition-colors duration-200 group-hover:bg-white/15">
                      <Phone size={18} className="text-brand-gold-light" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-0.5">Phone</div>
                      <div className="text-sm font-medium text-white/90 transition-colors duration-200 group-hover:text-white">
                        +44 (0)7890 823840
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-gold-light" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-0.5">Address</div>
                      <div className="text-sm font-medium text-white/90">
                        4 Ash Way, Didcot<br />
                        OX11 6AN, United Kingdom
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/company/staspack-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-brand-teal/[0.08] bg-[var(--brand-cream)]
                           cursor-pointer transition-all duration-250 hover:border-brand-teal/20 hover:shadow-[0_4px_16px_rgba(15,76,92,0.05)] group"
                style={{ transitionTimingFunction: "var(--ease-out)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center">
                  <Linkedin size={20} className="text-[#0A66C2]" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-brand-teal-dark">Follow us on LinkedIn</div>
                  <div className="text-xs text-brand-slate/60 mt-0.5">Latest articles & industry insights</div>
                </div>
                <ArrowUpRight size={16} className="text-brand-slate/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="p-5 rounded-xl border border-brand-gold/15 bg-brand-gold/[0.04]">
                <p className="text-sm text-brand-teal-dark font-medium leading-relaxed">
                  Prefer a direct conversation? Call Beyza on{" "}
                  <a href="tel:+447890823840" className="font-semibold text-brand-teal underline decoration-brand-teal/30 cursor-pointer hover:decoration-brand-teal/60 transition-colors duration-200">
                    +44 (0)7890 823840
                  </a>{" "}
                  for an initial, no-obligation chat about your procurement needs.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
