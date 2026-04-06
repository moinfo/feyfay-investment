"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowLeft, Share2, Tag, Clock } from "lucide-react";
import { formatDate, getEventsByCategory } from "@/lib/events";
import { CATEGORY_STYLES } from "@/lib/brand";
import EventCard from "@/components/ui/EventCard";
import { useLanguage } from "@/context/LanguageContext";
import type { Event } from "@/lib/events";

const categoryLabels: Record<string, { en: string; sw: string }> = {
  entertainment: { en: "Entertainment", sw: "Burudani" },
  empowerment:   { en: "Empowerment",   sw: "Uwezeshaji" },
  sports:        { en: "Sports",        sw: "Michezo" },
  awards:        { en: "Awards",        sw: "Tuzo" },
};

export default function EventDetailClient({ event }: { event: Event }) {
  const { language, t } = useLanguage();
  const styles = CATEGORY_STYLES[event.category];
  const catLabel = categoryLabels[event.category]?.[language] ??
    (event.category.charAt(0).toUpperCase() + event.category.slice(1));
  const title = language === "sw" ? event.titleSw : event.title;
  const longDescription = language === "sw" ? event.longDescriptionSw : event.longDescription;

  const related = getEventsByCategory(event.category)
    .filter((e) => e.id !== event.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand-light transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> {t.events.backToEvents}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Hero image */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[var(--background-elevated)] mb-8">
              <Image
                src={event.image}
                alt={event.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles.bg} ${styles.text} ${styles.border}`}>
                  {catLabel}
                </span>
                {event.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand/20 text-brand-light border border-brand/30">
                    {t.common.featured}
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black mb-4">{title}</h1>
            <p className="text-muted text-lg leading-relaxed mb-8">{longDescription}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--background-elevated)] border border-[var(--border)] text-xs text-muted"
                >
                  <Tag className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] text-sm text-muted hover:text-foreground hover:border-brand/50 transition-all">
              <Share2 className="w-4 h-4" /> {t.events.shareEvent}
            </button>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-28">
              <h2 className="font-bold text-lg mb-5">{t.events.eventDetails}</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">{t.events.date}</p>
                    <p className="text-sm font-medium">{formatDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">{t.events.time}</p>
                    <p className="text-sm font-medium">{t.events.doorsOpen}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">{t.events.venue}</p>
                    <p className="text-sm font-medium">{event.venue}</p>
                    <p className="text-xs text-muted">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">{t.events.capacity}</p>
                    <p className="text-sm font-medium">{event.capacity.toLocaleString()} {t.events.people}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--border)] pt-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted">{t.events.entry}</span>
                  <span className="font-bold text-lg gradient-text">
                    {event.price === "Free Entry" ? t.events.freeEntry : event.price}
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold glow-brand hover:opacity-90 transition-opacity"
              >
                {t.events.register}
              </Link>
              <p className="text-xs text-muted text-center mt-3">
                {t.events.groupBookings}
              </p>
            </div>
          </div>
        </div>

        {/* Related Events */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-black mb-8">
              {t.events.moreEvents}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
