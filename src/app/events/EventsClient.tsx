"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import { events } from "@/lib/events";
import { EventCategory } from "@/lib/brand";
import { useLanguage } from "@/context/LanguageContext";

type FilterTab = "all" | EventCategory;

export default function EventsClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const tabs: { id: FilterTab; label: string }[] = [
    { id: "all", label: t.events.tabs.all },
    { id: "entertainment", label: t.events.tabs.entertainment },
    { id: "empowerment", label: t.events.tabs.empowerment },
    { id: "sports", label: t.events.tabs.sports },
  ];

  const filtered = events.filter((e) => {
    const matchesTab = activeTab === "all" || e.category === activeTab;
    const matchesSearch =
      search === "" ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">
          {t.events.allEvents}
        </p>
        <h1 className="text-4xl sm:text-6xl font-black mb-4">
          {t.events.upcomingTitle} <span className="gradient-text">{t.events.upcomingHighlight}</span>
        </h1>
        <p className="text-muted text-lg max-w-xl">
          {t.events.description}
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-brand text-white"
                    : "bg-[var(--background-elevated)] text-muted hover:text-foreground border border-[var(--border)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder={t.events.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--background-elevated)] border border-[var(--border)] text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-brand/50"
            />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted">
            <p className="text-5xl mb-4">🎭</p>
            <p className="text-lg font-medium">{t.events.noEventsFound}</p>
            <p className="text-sm mt-2">{t.events.tryDifferent}</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted mb-6">
              {t.events.showing} {filtered.length} {filtered.length !== 1 ? t.events.events : t.events.event}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
