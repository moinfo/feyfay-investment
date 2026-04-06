"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type GalleryItem = {
  id: number;
  category: "entertainment" | "empowerment" | "sports" | "awards";
  title: string;
  event: string;
  image: string;
  span?: "wide" | "tall" | "normal";
};

const galleryItems: GalleryItem[] = [
  {
    id: 1, category: "entertainment",
    title: "Talent Search Finals", event: "Feyfay Talent Search 2024",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    span: "wide",
  },
  {
    id: 2, category: "empowerment",
    title: "Women in Leadership Panel", event: "Women Conference 2024",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3, category: "sports",
    title: "Football Championship", event: "Sports Bonanza 2024",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80",
    span: "tall",
  },
  {
    id: 4, category: "awards",
    title: "Best Artist Award", event: "Feyfay Awards 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5, category: "entertainment",
    title: "Live Concert Night", event: "Mega Concert 2023",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6, category: "empowerment",
    title: "Youth Entrepreneurship Workshop", event: "Youth Seminar 2024",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
    span: "wide",
  },
  {
    id: 7, category: "sports",
    title: "Athletics Track Finals", event: "Sports Bonanza 2024",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8, category: "awards",
    title: "Red Carpet Arrivals", event: "Feyfay Awards 2024",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9, category: "entertainment",
    title: "Dance Competition", event: "Talent Search 2024",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10, category: "empowerment",
    title: "Community Dialogue Session", event: "Community Summit 2023",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11, category: "sports",
    title: "Basketball Finals", event: "Sports Bonanza 2024",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=900&q=80",
    span: "wide",
  },
  {
    id: 12, category: "awards",
    title: "Community Hero Award", event: "Feyfay Awards 2024",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80",
  },
];

type Filter = "all" | "entertainment" | "empowerment" | "sports" | "awards";

const heights: Record<string, string> = {
  wide: "250px",
  tall: "350px",
  normal: "220px",
};

export default function GalleryClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const { t } = useLanguage();

  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: t.gallery.tabs.all },
    { id: "entertainment", label: t.gallery.tabs.entertainment },
    { id: "empowerment", label: t.gallery.tabs.empowerment },
    { id: "sports", label: t.gallery.tabs.sports },
    { id: "awards", label: t.gallery.tabs.awards },
  ];

  const filtered =
    filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">
          {t.gallery.ourMoments}
        </p>
        <h1 className="text-4xl sm:text-6xl font-black mb-4">
          {t.gallery.title} <span className="gradient-text">{t.gallery.titleHighlight}</span>
        </h1>
        <p className="text-muted text-lg max-w-xl">
          {t.gallery.description}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === tab.id
                  ? "bg-brand text-white"
                  : "bg-[var(--background-elevated)] text-muted hover:text-foreground border border-[var(--border)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl bg-[var(--background-elevated)]"
              style={{ height: heights[item.span ?? "normal"] }}
              onClick={() => setSelected(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-white/70 text-xs">{item.event}</p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
              {/* Category pill */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-full text-xs bg-black/40 backdrop-blur-sm text-white capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold">{selected.title}</h3>
              <p className="text-white/70 text-sm mt-1">{selected.event}</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-white/10 text-white capitalize">
                {selected.category}
              </span>
            </div>
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
