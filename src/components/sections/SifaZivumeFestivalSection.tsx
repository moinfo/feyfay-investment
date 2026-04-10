"use client";

import Image from "next/image";
import { Music2, Sparkles, Heart, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [Music2, Sparkles, Heart, Users];
const pillarColors = [
  { text: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  { text: "text-brand-light", bg: "bg-brand/10", border: "border-brand/30" },
  { text: "text-entertainment", bg: "bg-entertainment/10", border: "border-entertainment/30" },
  { text: "text-empowerment", bg: "bg-empowerment/10", border: "border-empowerment/30" },
];

export default function SifaZivumeFestivalSection() {
  const { t } = useLanguage();
  const sz = t.sifaZivume;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-6">
          {sz.badge}
        </span>

        {/* Logo — mix-blend-multiply makes white background transparent on dark surfaces */}
        <div className="flex justify-center mb-8">
          <div className="relative w-52 h-32 sm:w-64 sm:h-40">
            <Image
              src="/sifa-zivume-logo.jpeg"
              alt="Sifa Zivume Festival"
              fill
              className="object-contain"
              style={{ mixBlendMode: "luminosity" }}
              sizes="(max-width: 640px) 208px, 256px"
            />
          </div>
        </div>

        <p className="text-yellow-400 font-bold text-lg sm:text-xl italic mb-6">
          &ldquo;{sz.tagline}&rdquo;
        </p>

        <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
          {sz.description}
        </p>
        <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
          {sz.paragraph2}
        </p>
      </div>

      {/* Heritage callout */}
      <div className="relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 sm:p-8 mb-14">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-l-2xl" />
        <p className="text-white/70 text-sm sm:text-base leading-relaxed pl-4">
          {sz.heritage}
        </p>
      </div>

      {/* Four Pillars */}
      <div className="mb-14">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
          <span className="text-yellow-400">{sz.pillarsTitle}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sz.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            const color = pillarColors[i];
            return (
              <div
                key={pillar.name}
                className={`card p-6 border ${color.border} relative overflow-hidden`}
              >
                <div className={`absolute inset-0 ${color.bg} opacity-40 pointer-events-none`} />
                <div className={`relative w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4 ${color.text}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`relative font-bold text-sm mb-2 ${color.text}`}>{pillar.name}</h3>
                <p className="relative text-muted text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Attribution footer */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-sm text-white/50">
        <span>
          {sz.organizedBy}{" "}
          <span className="text-yellow-400 font-semibold">{sz.brand}</span>
        </span>
        <span className="hidden sm:block text-white/20">·</span>
        <span className="text-brand-light font-semibold">Feyfay Investment</span>
        <span className="hidden sm:block text-white/20">·</span>
        <span>{sz.location}</span>
      </div>
    </section>
  );
}
