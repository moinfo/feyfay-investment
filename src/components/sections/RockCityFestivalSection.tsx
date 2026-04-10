"use client";

import Image from "next/image";
import { Trophy, Mic2, Music, Star, MapPin, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const eventIcons = [Trophy, Mic2, Music, Star, MapPin, Briefcase];
const eventColors = [
  { text: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  { text: "text-entertainment", bg: "bg-entertainment/10", border: "border-entertainment/30" },
  { text: "text-brand-light", bg: "bg-brand/10", border: "border-brand/30" },
  { text: "text-entertainment", bg: "bg-entertainment/10", border: "border-entertainment/30" },
  { text: "text-sports", bg: "bg-sports/10", border: "border-sports/30" },
  { text: "text-empowerment", bg: "bg-empowerment/10", border: "border-empowerment/30" },
];

export default function RockCityFestivalSection() {
  const { t } = useLanguage();
  const rcf = t.rockCityFestival;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-entertainment/10 border border-entertainment/30 text-entertainment text-sm font-semibold tracking-widest uppercase mb-6">
          {rcf.badge}
        </span>

        {/* Festival Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-32 sm:w-80 sm:h-40">
            <Image
              src="/rock-city-festival-logo.jpeg"
              alt="Rock City Festival"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 256px, 320px"
            />
          </div>
        </div>

        <p className="text-entertainment font-bold text-lg sm:text-xl italic mb-4">
          &ldquo;{rcf.tagline}&rdquo;
        </p>
        <p className="text-muted text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {rcf.description}
        </p>
      </div>

      {/* Season Events Grid */}
      <div className="mb-14">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
          <span className="gradient-text-entertainment">{rcf.eventsTitle}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rcf.events.map((event, i) => {
            const Icon = eventIcons[i];
            const color = eventColors[i];
            const isCup = i === 0;
            return (
              <div
                key={event.name}
                className={`card p-6 border ${color.border} relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 ${color.bg} opacity-40 pointer-events-none`} />
                <div className="relative flex items-start gap-4">
                  {isCup ? (
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden border border-yellow-400/30">
                      <Image
                        src="/rock-city-cup-logo.jpeg"
                        alt="Rock City Cup"
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 flex-shrink-0 rounded-xl bg-white/10 flex items-center justify-center ${color.text}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h3 className={`font-bold text-base mb-1 ${color.text}`}>{event.name}</h3>
                    <p className="text-muted text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
                <span className="absolute top-3 right-3 text-xs font-bold text-white/20">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Season Note + Attribution */}
      <div className="relative overflow-hidden rounded-2xl border border-entertainment/20 bg-entertainment/5 p-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-entertainment/5 to-transparent pointer-events-none" />
        <p className="relative text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-4">
          {rcf.seasonNote}
        </p>
        <p className="relative text-white/50 text-sm">
          {rcf.organizedBy}{" "}
          <span className="text-entertainment font-semibold">{rcf.brand}</span>
          {rcf.brandSuffix ? ` ${rcf.brandSuffix}` : ""}
          {" "}—{" "}
          <span className="text-brand-light font-semibold">Feyfay Investment</span>
        </p>
      </div>
    </section>
  );
}