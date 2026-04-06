// Feyfay brand constants — used across all components

export const BRAND = {
  name: "Feyfay Investment",
  tagline: "Creation, Innovation & Entertainment",
  description:
    "We organize world-class events that inspire, entertain, and empower communities.",
  email: "info@feyfayinvestment.co.tz",
  phone: "+255 714 921 589",
  website: "https://www.feyfayinvestment.co.tz",
  socials: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
    youtube: "#",
    tiktok: "#",
  },
} as const;

export const EVENT_CATEGORIES = [
  {
    id: "entertainment",
    label: "Entertainment",
    color: "entertainment",
    description: "Shows, concerts, awards & talent searches",
  },
  {
    id: "empowerment",
    label: "Empowerment",
    color: "empowerment",
    description: "Seminars, conferences & community programs",
  },
  {
    id: "sports",
    label: "Sports Bonanza",
    color: "sports",
    description: "Tournaments, competitions & sports events",
  },
] as const;

export type EventCategory = (typeof EVENT_CATEGORIES)[number]["id"];

// Category badge color mapping
export const CATEGORY_STYLES: Record<
  EventCategory,
  { bg: string; text: string; border: string }
> = {
  entertainment: {
    bg: "bg-entertainment/10",
    text: "text-entertainment",
    border: "border-entertainment/30",
  },
  empowerment: {
    bg: "bg-empowerment/10",
    text: "text-empowerment",
    border: "border-empowerment/30",
  },
  sports: {
    bg: "bg-sports/10",
    text: "text-sports",
    border: "border-sports/30",
  },
};
