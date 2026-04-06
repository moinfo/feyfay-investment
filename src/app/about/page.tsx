"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Target, Eye, ArrowRight, CheckCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/context/LanguageContext";

const milestones = [
  {
    year: "2019",
    title: { en: "Founded", sw: "Ilianzishwa" },
    desc: { en: "Feyfay Events was born with a vision to transform the event industry in East Africa.", sw: "Feyfay Events ilizaliwa na maono ya kubadilisha tasnia ya matukio Afrika Mashariki." },
  },
  {
    year: "2020",
    title: { en: "First Major Event", sw: "Tukio la Kwanza Kubwa" },
    desc: { en: "Successfully organized our first talent search competition with 500+ participants.", sw: "Tulipanga kwa mafanikio mashindano yetu ya kwanza ya utafutaji wa vipaji na washiriki 500+." },
  },
  {
    year: "2021",
    title: { en: "Empowerment Launch", sw: "Uzinduzi wa Uwezeshaji" },
    desc: { en: "Launched our empowerment programs for youth and women, reaching 1,000+ people.", sw: "Tulizindua programu zetu za uwezeshaji kwa vijana na wanawake, tukifikia watu 1,000+." },
  },
  {
    year: "2022",
    title: { en: "Sports Bonanza", sw: "Bonanza ya Michezo" },
    desc: { en: "Introduced the Sports Bonanza series, attracting athletes from across the region.", sw: "Tulianzisha mfululizo wa Bonanza ya Michezo, ukivutia wanariadha kutoka mkoa mzima." },
  },
  {
    year: "2023",
    title: { en: "Awards Night", sw: "Usiku wa Tuzo" },
    desc: { en: "Hosted the inaugural Feyfay Awards Night, celebrating excellence across industries.", sw: "Tuliandaa Usiku wa Kwanza wa Tuzo wa Feyfay, ukisherehekea ubora katika tasnia zote." },
  },
  {
    year: "2024",
    title: { en: "150+ Events", sw: "Matukio 150+" },
    desc: { en: "Crossed 150 events organized and 50,000+ total attendees served.", sw: "Tulipita matukio 150 yaliyopangwa na jumla ya washiriki 50,000+ waliohudumika." },
  },
];

const values = {
  en: [
    "Excellence in every detail — no shortcuts",
    "Community-first approach to every event",
    "Innovation in formats, technology, and experience",
    "Inclusivity — events for all backgrounds and ages",
    "Reliability — we deliver on every promise",
    "Sustainability — conscious event management",
  ],
  sw: [
    "Ubora katika kila undani — hakuna njia za mkato",
    "Mbinu ya kwanza ya jamii kwa kila tukio",
    "Uvumbuzi katika miundo, teknolojia, na uzoefu",
    "Ujumuishi — matukio kwa asili zote na rika zote",
    "Uaminifu — tunatimiza kila ahadi",
    "Uendelevu — usimamizi wa matukio wenye ufahamu",
  ],
};

const team = [
  { name: "Amina Hassan", role: { en: "Founder & CEO", sw: "Mwanzilishi & Mkurugenzi Mtendaji" }, emoji: "👩🏾‍💼" },
  { name: "John Mwangi", role: { en: "Creative Director", sw: "Mkurugenzi wa Ubunifu" }, emoji: "👨🏾‍🎨" },
  { name: "Fatuma Said", role: { en: "Events Manager", sw: "Meneja wa Matukio" }, emoji: "👩🏾‍💻" },
  { name: "David Omondi", role: { en: "Sports Coordinator", sw: "Mratibu wa Michezo" }, emoji: "👨🏾‍⚽" },
  { name: "Grace Kibiru", role: { en: "Empowerment Lead", sw: "Kiongozi wa Uwezeshaji" }, emoji: "👩🏾‍🏫" },
  { name: "Ali Rashid", role: { en: "Production Manager", sw: "Meneja wa Uzalishaji" }, emoji: "👨🏾‍🔧" },
];

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-brand-light text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              {t.about.ourStory}
            </div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6">
              {t.about.title} <span className="gradient-text">{BRAND.name}</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-6">
              {t.about.description1}
            </p>
            <p className="text-muted leading-relaxed mb-8">
              {t.about.description2}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {t.about.workWithUs} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
              alt="Feyfay Events team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "150+", label: t.stats.eventsOrganized },
              { value: "50K+", label: t.stats.happyAttendees },
              { value: "200+", label: t.stats.clientsServed },
              { value: "5+", label: t.stats.yearsExperience },
            ].map((stat) => (
              <div key={stat.label} className="card p-8 text-center border border-brand/20 relative overflow-hidden">
                <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card p-10 border border-brand/30 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-brand-light" />
            </div>
            <h2 className="text-2xl font-black mb-4">{t.about.missionTitle}</h2>
            <p className="text-muted leading-relaxed">{t.about.missionText}</p>
          </div>
          <div className="card p-10 border border-empowerment/30 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-empowerment/20 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-empowerment" />
            </div>
            <h2 className="text-2xl font-black mb-4">{t.about.visionTitle}</h2>
            <p className="text-muted leading-relaxed">{t.about.visionText}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-[var(--background-card)] border border-[var(--border)] p-12">
          <h2 className="text-3xl font-black mb-2 text-center">
            {t.about.ourValues} <span className="gradient-text">{t.about.valuesHighlight}</span>
          </h2>
          <p className="text-muted text-center mb-10">{t.about.valuesSub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values[language].map((value) => (
              <div key={value} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                <span className="text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-black text-center mb-12">
          {t.about.ourJourney} <span className="gradient-text">{t.about.journeyHighlight}</span>
        </h2>
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {m.year.slice(2)}
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--border)] mt-2" />
                )}
              </div>
              <div className="card p-5 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-brand-light font-semibold">{m.year}</span>
                  <h3 className="font-bold">{m.title[language]}</h3>
                </div>
                <p className="text-muted text-sm">{m.desc[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-black text-center mb-12">
          {t.about.meetThe} <span className="gradient-text">{t.about.teamHighlight}</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((member) => (
            <div key={member.name} className="card p-5 text-center">
              <div className="text-4xl mb-3">{member.emoji}</div>
              <h3 className="font-bold text-sm mb-1">{member.name}</h3>
              <p className="text-xs text-muted">{member.role[language]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
