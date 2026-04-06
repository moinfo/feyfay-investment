import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowLeft, Share2, Tag, Clock } from "lucide-react";
import { events, getEventBySlug, formatDate, getEventsByCategory } from "@/lib/events";
import { CATEGORY_STYLES } from "@/lib/brand";
import EventCard from "@/components/ui/EventCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const styles = CATEGORY_STYLES[event.category];
  const related = getEventsByCategory(event.category)
    .filter((e) => e.id !== event.id)
    .slice(0, 3);

  const categoryLabel =
    event.category.charAt(0).toUpperCase() + event.category.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand-light transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Event hero image */}
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
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles.bg} ${styles.text} ${styles.border}`}
                >
                  {categoryLabel}
                </span>
                {event.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand/20 text-brand-light border border-brand/30">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Title & description */}
            <h1 className="text-3xl sm:text-5xl font-black mb-4">{event.title}</h1>
            <p className="text-muted text-lg leading-relaxed mb-8">{event.longDescription}</p>

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

            {/* Share */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] text-sm text-muted hover:text-foreground hover:border-brand/50 transition-all">
              <Share2 className="w-4 h-4" /> Share Event
            </button>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-28">
              <h2 className="font-bold text-lg mb-5">Event Details</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">Date</p>
                    <p className="text-sm font-medium">{formatDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">Time</p>
                    <p className="text-sm font-medium">Doors open 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">Venue</p>
                    <p className="text-sm font-medium">{event.venue}</p>
                    <p className="text-xs text-muted">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">Capacity</p>
                    <p className="text-sm font-medium">{event.capacity.toLocaleString()} people</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--border)] pt-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted">Entry</span>
                  <span className="font-bold text-lg gradient-text">{event.price}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold glow-brand hover:opacity-90 transition-opacity"
              >
                Register / Book Tickets
              </Link>
              <p className="text-xs text-muted text-center mt-3">
                Contact us for group bookings & sponsorships
              </p>
            </div>
          </div>
        </div>

        {/* Related Events */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-black mb-8">
              More <span className="gradient-text">{categoryLabel}</span> Events
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
