"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, TrendingDown } from "lucide-react";
import { useRef } from "react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const transition = { duration: 0.7, ease: [0.23, 1, 0.32, 1] };

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax for decorative elements
  const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const floatY3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center hero-gradient overflow-hidden">
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-brand-teal/[0.05]"
          style={prefersReducedMotion ? {} : { y: floatY1, opacity: fadeOut }}
        />
        <motion.div
          className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full bg-brand-gold/[0.07]"
          style={prefersReducedMotion ? {} : { y: floatY2, opacity: fadeOut }}
        />
        <motion.div
          className="absolute top-1/2 right-[25%] w-32 h-32 rounded-full bg-brand-teal/[0.04]"
          style={prefersReducedMotion ? {} : { y: floatY3 }}
        />
        {/* Grid dots */}
        <motion.div
          className="absolute top-32 left-[15%] grid grid-cols-4 gap-3 opacity-[0.15]"
          style={prefersReducedMotion ? {} : { y: floatY1 }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 lg:pt-32 w-full">
        <motion.div
          className="max-w-3xl"
          variants={prefersReducedMotion ? undefined : stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeUp}
            transition={transition}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/[0.07] border border-brand-teal/10 mb-8"
          >
            <Globe size={14} className="text-brand-teal" />
            <span className="text-xs font-semibold text-brand-teal tracking-wide uppercase">
              UK & Turkey Procurement Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={prefersReducedMotion ? undefined : fadeUp}
            transition={transition}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.08] tracking-tight text-brand-teal-dark"
          >
            Strategic Procurement,{" "}
            <span className="text-brand-gold inline-block">Simplified.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeUp}
            transition={transition}
            className="mt-6 text-lg sm:text-xl text-brand-slate leading-relaxed max-w-2xl"
          >
            Over 30 years of global procurement expertise. We connect UK and European
            businesses with vetted manufacturers across Europe and Turkey, saving you
            hundreds of thousands of pounds.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeUp}
            transition={transition}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-brand-teal rounded-xl
                         cursor-pointer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Start a Conversation
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-brand-teal bg-white border-2 border-brand-teal/15 rounded-xl
                         cursor-pointer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeUp}
            transition={transition}
            className="mt-14 flex flex-wrap gap-8"
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
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--brand-cream)] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-brand-teal/20 flex justify-center pt-2"
          animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-brand-teal/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
