import { EventCategory } from "./brand";

export type Event = {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  date: string;
  venue: string;
  location: string;
  image: string;
  description: string;
  longDescription: string;
  price: string;
  capacity: number;
  featured: boolean;
  tags: string[];
};

export const events: Event[] = [
  {
    id: "1",
    slug: "feyfay-talent-search-2025",
    title: "Feyfay Talent Search 2025",
    category: "entertainment",
    date: "2025-07-15",
    venue: "National Arts Theatre",
    location: "Dar es Salaam",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    description: "The biggest talent search competition in East Africa. Singers, dancers, comedians, and more compete for the grand prize.",
    longDescription: "Feyfay Talent Search is back and bigger than ever! This year we are searching for the most gifted individuals across all performing arts categories. Whether you sing, dance, act, or have a unique talent — this is your stage. Winners receive cash prizes, recording deals, and mentorship from industry professionals.",
    price: "Free Entry",
    capacity: 5000,
    featured: true,
    tags: ["Talent", "Competition", "Music", "Dance"],
  },
  {
    id: "2",
    slug: "women-empowerment-conference-2025",
    title: "Women Empowerment Conference 2025",
    category: "empowerment",
    date: "2025-08-10",
    venue: "Mlimani City Conference Hall",
    location: "Dar es Salaam",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    description: "A powerful gathering of women leaders, entrepreneurs, and change-makers sharing stories and building the future together.",
    longDescription: "The Feyfay Women Empowerment Conference brings together hundreds of women from all walks of life for a day of inspiration, networking, and skill-building. Keynote speakers, panel discussions, and workshops covering leadership, business, health, and community development.",
    price: "TZS 20,000",
    capacity: 800,
    featured: true,
    tags: ["Women", "Leadership", "Business", "Community"],
  },
  {
    id: "3",
    slug: "sports-bonanza-championship-2025",
    title: "Sports Bonanza Championship 2025",
    category: "sports",
    date: "2025-09-05",
    venue: "Benjamin Mkapa Stadium",
    location: "Dar es Salaam",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    description: "The ultimate multi-sport competition featuring football, athletics, basketball, and more. Teams from across the region compete.",
    longDescription: "Sports Bonanza Championship brings the heat with thrilling competitions across multiple sports disciplines. Watch elite athletes battle for glory while enjoying entertainment, food, and the electric atmosphere that only Feyfay Events can deliver.",
    price: "TZS 5,000",
    capacity: 20000,
    featured: true,
    tags: ["Football", "Athletics", "Basketball", "Sports"],
  },
  {
    id: "4",
    slug: "feyfay-awards-night-2025",
    title: "Feyfay Awards Night 2025",
    category: "entertainment",
    date: "2025-10-18",
    venue: "Hyatt Regency Dar es Salaam",
    location: "Dar es Salaam",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    description: "A glamorous awards evening celebrating excellence in music, arts, sports, and community service across the region.",
    longDescription: "The Feyfay Awards Night is the most prestigious event on our calendar. Dressed in black tie, industry leaders, artists, athletes, and community heroes come together to celebrate the best of the year. Live performances, celebrity appearances, and unforgettable moments.",
    price: "TZS 150,000",
    capacity: 500,
    featured: false,
    tags: ["Awards", "Gala", "Music", "Celebrity"],
  },
  {
    id: "5",
    slug: "youth-leadership-seminar-2025",
    title: "Youth Leadership Seminar",
    category: "empowerment",
    date: "2025-06-20",
    venue: "University of Dar es Salaam",
    location: "Dar es Salaam",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    description: "Empowering young leaders aged 18-35 with skills in entrepreneurship, civic leadership, and personal development.",
    longDescription: "Feyfay Youth Leadership Seminar is a transformative one-day program designed to equip young Tanzanians with the tools they need to lead, innovate, and create change. Sessions cover entrepreneurship, digital skills, civic engagement, and mental wellness.",
    price: "Free",
    capacity: 300,
    featured: false,
    tags: ["Youth", "Leadership", "Entrepreneurship", "Skills"],
  },
  {
    id: "6",
    slug: "mega-concert-2025",
    title: "Feyfay Mega Concert 2025",
    category: "entertainment",
    date: "2025-12-31",
    venue: "Uhuru Gardens",
    location: "Dar es Salaam",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    description: "Ring in the New Year with the biggest concert event of the year featuring top artists from Tanzania and across Africa.",
    longDescription: "The Feyfay Mega Concert is the ultimate New Year's Eve celebration. Over 10 hours of non-stop music, performances from Tanzania's biggest artists and special guests from across the continent. Fireworks, food, and festivities like you've never experienced before.",
    price: "TZS 30,000",
    capacity: 30000,
    featured: true,
    tags: ["Concert", "Music", "New Year", "Live Performance"],
  },
];

export const getFeaturedEvents = () => events.filter((e) => e.featured);
export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);
export const getEventsByCategory = (category: EventCategory) =>
  events.filter((e) => e.category === category);

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
