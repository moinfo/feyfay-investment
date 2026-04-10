"use client";

import Image from "next/image";
import Link from "next/link";
import { Mic2, Trophy, Star, Music, ArrowRight } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import { getEventsByCategory } from "@/lib/events";
import { useLanguage } from "@/context/LanguageContext";
import RockCityFestivalSection from "@/components/sections/RockCityFestivalSection";
import SifaZivumeFestivalSection from "@/components/sections/SifaZivumeFestivalSection";

const highlights = [
  {
    icon: Mic2,
    title: { en: "Talent Search", sw: "Utafutaji wa Vipaji" },
    description: {
      en: "We discover and showcase the region's most gifted performers. Singers, dancers, comedians, spoken word artists — all competing for life-changing prizes and opportunities.",
      sw: "Tunagundua na kuonyesha waigizaji wenye kipaji zaidi katika mkoa. Waimbaji, wachezaji, wakomediani, wasanii wa maneno — wote wakishindana kwa zawadi na fursa zinazobadilisha maisha.",
    },
    color: "text-entertainment",
    bg: "bg-entertainment/10",
    border: "border-entertainment/30",
  },
  {
    icon: Music,
    title: { en: "Shows & Concerts", sw: "Maonyesho & Matamasha" },
    description: {
      en: "From intimate acoustic sessions to massive outdoor concerts featuring top artists from Tanzania and across Africa. Unforgettable live music experiences.",
      sw: "Kuanzia vikao vya akustika vya karibu hadi matamasha makubwa ya nje yanayojumuisha wasanii wakuu kutoka Tanzania na Afrika nzima. Uzoefu wa muziki wa moja kwa moja usiosahaulika.",
    },
    color: "text-brand-light",
    bg: "bg-brand/10",
    border: "border-brand/30",
  },
  {
    icon: Trophy,
    title: { en: "Awards Ceremonies", sw: "Sherehe za Tuzo" },
    description: {
      en: "Prestigious gala events celebrating excellence in music, arts, film, sports, and community service. Black-tie evenings that honor the best of the year.",
      sw: "Matukio ya gala ya hadhi yanayosherehekea ubora katika muziki, sanaa, filamu, michezo, na huduma za jamii. Usiku wa mavazi rasmi unaoheshimu bora zaidi wa mwaka.",
    },
    color: "text-entertainment",
    bg: "bg-entertainment/10",
    border: "border-entertainment/30",
  },
  {
    icon: Star,
    title: { en: "Sports Bonanza", sw: "Bonanza ya Michezo" },
    description: {
      en: "Multi-sport competitions bringing together athletes from across the region. Football, athletics, basketball, and more — with entertainment off the field too.",
      sw: "Mashindano ya michezo mingi yanayokusanya wanariadha kutoka mkoa mzima. Soka, atletiki, mpira wa kikapu, na zaidi — pamoja na burudani nje ya uwanja pia.",
    },
    color: "text-sports",
    bg: "bg-sports/10",
    border: "border-sports/30",
  },
];

export default function EntertainmentPage() {
  const entertainmentEvents = getEventsByCategory("entertainment");
  const { language, t } = useLanguage();

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
            {t.entertainment.badge}
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6">
            <span className="gradient-text-entertainment">{t.entertainment.title1}</span>
            <br />
            <span className="text-white">{t.entertainment.title2}</span>
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto mb-8">
            {t.entertainment.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-entertainment text-black font-bold hover:opacity-90 transition-opacity"
          >
            {t.entertainment.bookBtn} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Rock City Festival */}
      <RockCityFestivalSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/5" />
      </div>

      {/* Sifa Zivume Festival */}
      <SifaZivumeFestivalSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/5" />
      </div>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
          <span className="gradient-text-entertainment">{t.entertainment.whatWeOrganize}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title.en}
                className={`card p-8 border ${item.border} relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} pointer-events-none opacity-60`} />
                <div className={`relative w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="relative font-bold text-xl mb-3">{item.title[language]}</h3>
                <p className="relative text-muted leading-relaxed">{item.description[language]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Upcoming Entertainment Events */}
      {entertainmentEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-black mb-8">
            {t.entertainment.upcomingTitle}{" "}
            <span className="text-entertainment">{t.entertainment.upcomingHighlight}</span>{" "}
            {t.entertainment.upcomingEvents}
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
