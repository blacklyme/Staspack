"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";

const STATS = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "K+", label: "Pounds Saved", prefix: "\u00A3" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 2, suffix: "", label: "Countries of Operation" },
];

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  inView,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  inView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, {
      duration: 2,
      ease: [0.23, 1, 0.32, 1],
    });

    return controls.stop;
  }, [inView, target, count, prefersReducedMotion]);

  return (
    <span className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative -mt-12 z-10 max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(15,76,92,0.06)] border border-brand-teal/[0.06] p-8 sm:p-10"
        initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center ${
                i < STATS.length - 1 ? "lg:border-r lg:border-brand-teal/[0.08]" : ""
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <div className="mt-1.5 text-sm font-medium text-brand-slate/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
