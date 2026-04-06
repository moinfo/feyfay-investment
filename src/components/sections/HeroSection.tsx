"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/brand";

const stats = [
  { value: 150, label: "Events Organized", suffix: "+" },
  { value: 50000, label: "Happy Attendees", suffix: "+" },
  { value: 200, label: "Clients Served", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            el.textContent = Math.floor(current).toLocaleString() + suffix;
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80"
          alt="Concert crowd"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        {/* Brand color tint */}
        <div className="absolute inset-0 bg-brand/10" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-brand-light text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          {BRAND.tagline}
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="gradient-text">Events That</span>
          <br />
          <span className="text-white">Move You</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          From electrifying talent shows and sports bonanzas to life-changing
          empowerment conferences — we create experiences that inspire, entertain, and unite.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/events"
            className="px-8 py-4 rounded-xl bg-brand-gradient text-white font-semibold text-base glow-brand hover:opacity-90 transition-all flex items-center gap-2"
          >
            Explore Events <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl border-2 border-white/60 text-white font-semibold text-base hover:bg-white/10 hover:border-white transition-all"
          >
            Plan Your Event
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-xs">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-brand-light rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
