"use client";

import { useEffect, useRef, useState } from "react";

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative -mt-12 z-10 max-w-6xl mx-auto px-5 sm:px-8">
      <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(15,76,92,0.06)] border border-brand-teal/[0.06] p-8 sm:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < STATS.length - 1 ? "lg:border-r lg:border-brand-teal/[0.08]" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-brand-teal">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <div className="mt-1.5 text-sm font-medium text-brand-slate/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
