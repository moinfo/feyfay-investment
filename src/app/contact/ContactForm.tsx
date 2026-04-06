"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const eventTypes = [
  "Talent Search",
  "Concert / Show",
  "Awards Ceremony",
  "Sports Bonanza",
  "Youth Seminar",
  "Women Conference",
  "Community Event",
  "Corporate Event",
  "Other",
];

const budgetRanges = [
  "Under TZS 1M",
  "TZS 1M – 5M",
  "TZS 5M – 20M",
  "TZS 20M – 50M",
  "TZS 50M+",
  "To be discussed",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const f = t.contact.form;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-16 text-center flex flex-col items-center justify-center h-full">
        <CheckCircle className="w-16 h-16 text-empowerment mb-4" />
        <h2 className="text-2xl font-black mb-2">{f.successTitle}</h2>
        <p className="text-muted max-w-sm">{f.successDesc}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-5 py-2.5 rounded-xl border border-[var(--border)] text-sm hover:border-brand/50 transition-colors"
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <h2 className="text-xl font-bold mb-2">{f.title}</h2>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.fullName} *</label>
          <input
            required
            type="text"
            placeholder={f.fullNamePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.email} *</label>
          <input
            required
            type="email"
            placeholder={f.emailPlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      {/* Phone & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.phone} *</label>
          <input
            required
            type="tel"
            placeholder={f.phonePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.organization}</label>
          <input
            type="text"
            placeholder={f.organizationPlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      {/* Event Type & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.eventType} *</label>
          <select
            required
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm text-foreground focus:outline-none focus:border-brand/50 transition-colors"
          >
            <option value="">{f.eventTypePlaceholder}</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.preferredDate}</label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm text-foreground focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      {/* Attendance & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.expectedAttendance}</label>
          <input
            type="number"
            placeholder={f.attendancePlaceholder}
            min="1"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">{f.budgetRange}</label>
          <select
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm text-foreground focus:outline-none focus:border-brand/50 transition-colors"
          >
            <option value="">{f.budgetPlaceholder}</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs text-muted mb-1.5">{f.message} *</label>
        <textarea
          required
          rows={5}
          placeholder={f.messagePlaceholder}
          className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-gradient text-white font-semibold glow-brand hover:opacity-90 transition-all disabled:opacity-60"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {f.sending}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> {f.send}
          </>
        )}
      </button>
    </form>
  );
}
