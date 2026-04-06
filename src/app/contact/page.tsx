"use client";

import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  const contactDetails = [
    { icon: Mail, label: t.contact.details.email, value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: Phone, label: t.contact.details.phone, value: BRAND.phone, href: `tel:${BRAND.phone}` },
    { icon: MapPin, label: t.contact.details.location, value: t.contact.details.locationValue, href: "#" },
    { icon: Clock, label: t.contact.details.officeHours, value: t.contact.details.officeHoursValue, href: "#" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">
            {t.contact.getInTouch}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black mb-4">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="card p-5 flex items-start gap-4 hover:border-brand/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-light" />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </a>
            ))}

            {/* Event types */}
            <div className="card p-6 mt-4">
              <h3 className="font-bold mb-4">{t.contact.eventsWeOrganize}</h3>
              <div className="space-y-2">
                {[
                  { label: "Talent Shows & Searches", color: "text-entertainment" },
                  { label: "Concerts & Live Music", color: "text-entertainment" },
                  { label: "Awards Ceremonies", color: "text-brand-light" },
                  { label: "Sports Bonanza", color: "text-sports" },
                  { label: "Youth Seminars", color: "text-empowerment" },
                  { label: "Women Conferences", color: "text-empowerment" },
                  { label: "Community Events", color: "text-empowerment" },
                  { label: "Corporate Events", color: "text-muted" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace("text-", "bg-")}`} />
                    <span className="text-muted">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
