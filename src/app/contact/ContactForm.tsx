"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-16 text-center flex flex-col items-center justify-center h-full">
        <CheckCircle className="w-16 h-16 text-empowerment mb-4" />
        <h2 className="text-2xl font-black mb-2">Message Sent!</h2>
        <p className="text-muted max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours to discuss your event.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-5 py-2.5 rounded-xl border border-[var(--border)] text-sm hover:border-brand/50 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <h2 className="text-xl font-bold mb-2">Event Inquiry Form</h2>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">Full Name *</label>
          <input
            required
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">Email Address *</label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      {/* Phone & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">Phone Number *</label>
          <input
            required
            type="tel"
            placeholder="+255 700 000 000"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">Organization / Company</label>
          <input
            type="text"
            placeholder="Your organization (optional)"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      {/* Event Type & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">Event Type *</label>
          <select
            required
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm text-foreground focus:outline-none focus:border-brand/50 transition-colors"
          >
            <option value="">Select event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">Preferred Event Date</label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm text-foreground focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      {/* Attendance & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-muted mb-1.5">Expected Attendance</label>
          <input
            type="number"
            placeholder="e.g. 500"
            min="1"
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1.5">Budget Range</label>
          <select
            className="w-full px-4 py-3 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-sm text-foreground focus:outline-none focus:border-brand/50 transition-colors"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs text-muted mb-1.5">Event Description / Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your event idea, requirements, or any questions you have..."
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
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
