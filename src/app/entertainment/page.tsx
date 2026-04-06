import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mic2, Trophy, Star, Music, ArrowRight } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import { getEventsByCategory } from "@/lib/events";

export const metadata: Metadata = {
  title: "Entertainment",
  description: "Talent searches, shows, concerts, and award ceremonies organized by Feyfay Events.",
};

const highlights = [
  {
    icon: Mic2,
    title: "Talent Search",
    description:
      "We discover and showcase the region's most gifted performers. Singers, dancers, comedians, spoken word artists — all competing for life-changing prizes and opportunities.",
    color: "text-entertainment",
    bg: "bg-entertainment/10",
    border: "border-entertainment/30",
  },
  {
    icon: Music,
    title: "Shows & Concerts",
    description:
      "From intimate acoustic sessions to massive outdoor concerts featuring top artists from Tanzania and across Africa. Unforgettable live music experiences.",
    color: "text-brand-light",
    bg: "bg-brand/10",
    border: "border-brand/30",
  },
  {
    icon: Trophy,
    title: "Awards Ceremonies",
    description:
      "Prestigious gala events celebrating excellence in music, arts, film, sports, and community service. Black-tie evenings that honor the best of the year.",
    color: "text-entertainment",
    bg: "bg-entertainment/10",
    border: "border-entertainment/30",
  },
  {
    icon: Star,
    title: "Sports Bonanza",
    description:
      "Multi-sport competitions bringing together athletes from across the region. Football, athletics, basketball, and more — with entertainment off the field too.",
    color: "text-sports",
    bg: "bg-sports/10",
    border: "border-sports/30",
  },
];

export default function EntertainmentPage() {
  const entertainmentEvents = getEventsByCategory("entertainment");

  return (
    <div className="min-h-screen bg-black pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80"
            alt="Entertainment event"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-entertainment/10 border border-entertainment/30 text-entertainment text-sm font-medium mb-6">
            <Mic2 className="w-4 h-4" />
            Entertainment Events
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6">
            <span className="gradient-text-entertainment">Entertain.</span>
            <br />
            <span className="text-white">Inspire. Celebrate.</span>
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto mb-8">
            From discovering raw talent to glamorous award nights — we create entertainment experiences that leave lasting memories.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-entertainment text-black font-bold hover:opacity-90 transition-opacity"
          >
            Book Entertainment Event <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
          What We <span className="gradient-text-entertainment">Organize</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`card p-8 bg-gradient-to-br ${item.bg} border ${item.border}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-[var(--background)] flex items-center justify-center mb-5 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Upcoming Entertainment Events */}
      {entertainmentEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-black mb-8">
            Upcoming <span className="text-entertainment">Entertainment</span> Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainmentEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
