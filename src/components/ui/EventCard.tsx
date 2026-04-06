"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Event, formatDate } from "@/lib/events";
import { CATEGORY_STYLES } from "@/lib/brand";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  event: Event;
  variant?: "default" | "compact";
};

const categoryLabels: Record<string, { en: string; sw: string }> = {
  entertainment: { en: "Entertainment", sw: "Burudani" },
  empowerment:   { en: "Empowerment",   sw: "Uwezeshaji" },
  sports:        { en: "Sports",        sw: "Michezo" },
  awards:        { en: "Awards",        sw: "Tuzo" },
};

export default function EventCard({ event, variant = "default" }: Props) {
  const { language, t } = useLanguage();
  const styles = CATEGORY_STYLES[event.category];
  const catLabel = categoryLabels[event.category]?.[language] ??
    (event.category.charAt(0).toUpperCase() + event.category.slice(1));
  const title = language === "sw" ? event.titleSw : event.title;
  const description = language === "sw" ? event.descriptionSw : event.description;

  return (
    <Link href={`/events/${event.slug}`} className="card group block overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-[var(--background-elevated)] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Category badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${styles.bg} ${styles.text} ${styles.border}`}>
          {catLabel}
        </div>
        {event.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold bg-brand/80 text-white backdrop-blur-sm">
            {t.common.featured}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-base text-foreground group-hover:text-brand-light transition-colors line-clamp-2 mb-3">
          {title}
        </h3>

        {variant === "default" && (
          <p className="text-muted text-sm line-clamp-2 mb-4">{description}</p>
        )}

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-muted">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{event.venue}, {event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <Users className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{t.events.upTo} {event.capacity.toLocaleString()} {t.events.attendees}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-brand-light">
            {event.price === "Free Entry" ? t.events.freeEntry : event.price}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted group-hover:text-brand-light transition-colors">
            {t.events.viewDetails} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
