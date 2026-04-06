"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, GraduationCap, Globe, ArrowRight, CheckCircle } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import { getEventsByCategory } from "@/lib/events";
import { useLanguage } from "@/context/LanguageContext";

const programs = [
  {
    icon: GraduationCap,
    title: { en: "Youth Seminars", sw: "Semina za Vijana" },
    description: {
      en: "Transformative programs for young people aged 18-35. Covering entrepreneurship, digital skills, leadership, and civic engagement to build the next generation of changemakers.",
      sw: "Programu za mabadiliko kwa vijana wenye umri wa miaka 18-35. Zinashughulikia ujasiriamali, ujuzi wa kidijitali, uongozi, na ushirikiano wa kiraia ili kujenga kizazi kinachofuata cha mabadiliko.",
    },
    audience: { en: "Ages 18–35", sw: "Miaka 18–35" },
    color: "text-empowerment",
    bg: "bg-empowerment/10",
    border: "border-empowerment/30",
  },
  {
    icon: Heart,
    title: { en: "Women Conferences", sw: "Mikutano ya Wanawake" },
    description: {
      en: "Powerful gatherings of women leaders, entrepreneurs, and activists. Sessions on business, health, financial literacy, and breaking barriers — building solidarity and shared power.",
      sw: "Makusanyiko yenye nguvu ya wanawake viongozi, wajasiriamali, na waanaharakati. Vikao vya biashara, afya, elimu ya fedha, na kuvunja vikwazo — kujenga mshikamano na nguvu ya pamoja.",
    },
    audience: { en: "Women of all ages", sw: "Wanawake wa rika zote" },
    color: "text-brand-light",
    bg: "bg-brand/10",
    border: "border-brand/30",
  },
  {
    icon: Users,
    title: { en: "Community Gatherings", sw: "Makusanyiko ya Jamii" },
    description: {
      en: "Events designed for specific community groups and organizations — bringing people together, sharing resources, and strengthening bonds within special groups.",
      sw: "Matukio yaliyoundwa kwa makundi maalum ya jamii na mashirika — kuunganisha watu, kushiriki rasilimali, na kuimarisha mshikamano ndani ya makundi maalum.",
    },
    audience: { en: "All community groups", sw: "Makundi yote ya jamii" },
    color: "text-empowerment",
    bg: "bg-empowerment/10",
    border: "border-empowerment/30",
  },
  {
    icon: Globe,
    title: { en: "Regional Conferences", sw: "Mikutano ya Kikanda" },
    description: {
      en: "Large-scale conferences bringing together leaders, NGOs, government, and communities to address shared challenges and drive regional development.",
      sw: "Mikutano ya kiwango kikubwa inayokusanya viongozi, mashirika yasiyo ya kiserikali, serikali, na jamii kushughulikia changamoto za pamoja na kuendesha maendeleo ya kikanda.",
    },
    audience: { en: "Leaders & organizations", sw: "Viongozi & mashirika" },
    color: "text-brand-light",
    bg: "bg-brand/10",
    border: "border-brand/30",
  },
];

const impacts = {
  en: [
    "5,000+ youth trained in entrepreneurship skills",
    "2,000+ women reached through empowerment programs",
    "30+ community organizations supported",
    "15+ successful regional conferences hosted",
    "Partnerships with NGOs, government & private sector",
    "Ongoing mentorship networks established",
  ],
  sw: [
    "Vijana 5,000+ wamefunzwa ujuzi wa ujasiriamali",
    "Wanawake 2,000+ wamefikiwa kupitia programu za uwezeshaji",
    "Mashirika ya jamii 30+ yamesaidiwa",
    "Mikutano ya kikanda 15+ imefanikiwa",
    "Ushirikiano na mashirika yasiyo ya serikali, serikali & sekta binafsi",
    "Mitandao ya ushauri inayoendelea imeanzishwa",
  ],
};

export default function EmpowermentPage() {
  const empowermentEvents = getEventsByCategory("empowerment");
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-black pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80"
            alt="Empowerment conference"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-empowerment/10 border border-empowerment/30 text-empowerment text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            {t.empowerment.badge}
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6">
            <span className="gradient-text-empowerment">{t.empowerment.title1}</span>
            <br />
            <span className="text-white">{t.empowerment.title2}</span>
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto mb-8">
            {t.empowerment.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-empowerment text-white font-bold hover:opacity-90 transition-opacity"
          >
            {t.empowerment.bookBtn} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
          {t.empowerment.ourPrograms}{" "}
          <span className="gradient-text-empowerment">{t.empowerment.programsHighlight}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((item) => {
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
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl">{item.title[language]}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full bg-[var(--background)] ${item.color} border ${item.border}`}>
                    {item.audience[language]}
                  </span>
                </div>
                <p className="text-muted leading-relaxed">{item.description[language]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-[var(--background-card)] border border-[var(--border)] p-12">
          <h2 className="text-3xl font-black mb-2 text-center">
            {t.empowerment.ourImpact}{" "}
            <span className="gradient-text-empowerment">{t.empowerment.impactHighlight}</span>
          </h2>
          <p className="text-muted text-center mb-10">{t.empowerment.impactSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impacts[language].map((impact) => (
              <div key={impact} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-empowerment flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted">{impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {empowermentEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-black mb-8">
            {t.empowerment.upcomingTitle}{" "}
            <span className="text-empowerment">{t.empowerment.upcomingHighlight}</span>{" "}
            {t.empowerment.upcomingEvents}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {empowermentEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
