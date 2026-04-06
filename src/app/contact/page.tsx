import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Feyfay Events to book your next entertainment or empowerment event.",
};

const contactDetails = [
  { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: Phone, label: "Phone", value: BRAND.phone, href: `tel:${BRAND.phone}` },
  { icon: MapPin, label: "Location", value: "Dar es Salaam, Tanzania", href: "#" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri, 8:00 AM – 6:00 PM", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-6xl font-black mb-4">
            Let&apos;s Plan Your <span className="gradient-text">Event</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Whether you have an idea or a full brief — we&apos;re here to make it happen. Fill in the form and we&apos;ll respond within 24 hours.
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

            {/* Event types we handle */}
            <div className="card p-6 mt-4">
              <h3 className="font-bold mb-4">Events We Organize</h3>
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
