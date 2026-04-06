"use client";

import Link from "next/link";
import { ArrowRight, Mic2, Trophy, Dumbbell, Heart } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import EventCard from "@/components/ui/EventCard";
import { getFeaturedEvents } from "@/lib/events";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  const { t } = useLanguage();

  const categories = [
    {
      icon: Mic2,
      title: t.home.categories.talentShows.title,
      description: t.home.categories.talentShows.desc,
      href: "/entertainment",
      gradient: "from-entertainment/20 to-entertainment/5",
      border: "border-entertainment/30",
      iconColor: "text-entertainment",
    },
    {
      icon: Trophy,
      title: t.home.categories.awards.title,
      description: t.home.categories.awards.desc,
      href: "/entertainment",
      gradient: "from-brand/20 to-brand/5",
      border: "border-brand/30",
      iconColor: "text-brand-light",
    },
    {
      icon: Dumbbell,
      title: t.home.categories.sports.title,
      description: t.home.categories.sports.desc,
      href: "/events?category=sports",
      gradient: "from-sports/20 to-sports/5",
      border: "border-sports/30",
      iconColor: "text-sports",
    },
    {
      icon: Heart,
      title: t.home.categories.empowerment.title,
      description: t.home.categories.empowerment.desc,
      href: "/empowerment",
      gradient: "from-empowerment/20 to-empowerment/5",
      border: "border-empowerment/30",
      iconColor: "text-empowerment",
    },
  ];

  return (
    <>
      <HeroSection />

      {/* What We Do */}
      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">
            {t.home.whatWeDo}
          </p>
          <h2 className="text-3xl sm:text-5xl font-black">
            {t.home.everyTypeTitle}{" "}
            <span className="gradient-text-entertainment">{t.home.everyTypeHighlight}</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            {t.home.everyTypeDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className={`card p-6 border ${cat.border} group overflow-hidden relative`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} pointer-events-none`} />
                <div className={`relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 ${cat.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="relative font-bold text-base mb-2">{cat.title}</h3>
                <p className="relative text-muted text-sm leading-relaxed mb-4">{cat.description}</p>
                <span className={`relative flex items-center gap-1 text-sm font-medium ${cat.iconColor}`}>
                  {t.home.learnMore} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Events */}
      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">
              {t.home.comingUp}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black">
              {t.home.featuredTitle} <span className="gradient-text">{t.home.featuredHighlight}</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="hidden sm:flex items-center gap-2 text-sm text-muted hover:text-brand-light transition-colors"
          >
            {t.home.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-sm font-medium hover:border-brand/50 transition-all"
          >
            {t.home.viewAllEvents} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-12 text-center glow-brand">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {t.home.ctaTitle}
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              {t.home.ctaDesc}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand font-bold text-base hover:bg-white/90 transition-all"
            >
              {t.home.getInTouch} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
