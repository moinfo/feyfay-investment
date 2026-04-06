import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, Target, Eye, ArrowRight, CheckCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Feyfay Events — our story, mission, vision and the team behind every unforgettable event.",
};

const milestones = [
  { year: "2019", title: "Founded", desc: "Feyfay Events was born with a vision to transform the event industry in East Africa." },
  { year: "2020", title: "First Major Event", desc: "Successfully organized our first talent search competition with 500+ participants." },
  { year: "2021", title: "Empowerment Launch", desc: "Launched our empowerment programs for youth and women, reaching 1,000+ people." },
  { year: "2022", title: "Sports Bonanza", desc: "Introduced the Sports Bonanza series, attracting athletes from across the region." },
  { year: "2023", title: "Awards Night", desc: "Hosted the inaugural Feyfay Awards Night, celebrating excellence across industries." },
  { year: "2024", title: "150+ Events", desc: "Crossed 150 events organized and 50,000+ total attendees served." },
];

const values = [
  "Excellence in every detail — no shortcuts",
  "Community-first approach to every event",
  "Innovation in formats, technology, and experience",
  "Inclusivity — events for all backgrounds and ages",
  "Reliability — we deliver on every promise",
  "Sustainability — conscious event management",
];

const team = [
  { name: "Amina Hassan", role: "Founder & CEO", emoji: "👩🏾‍💼" },
  { name: "John Mwangi", role: "Creative Director", emoji: "👨🏾‍🎨" },
  { name: "Fatuma Said", role: "Events Manager", emoji: "👩🏾‍💻" },
  { name: "David Omondi", role: "Sports Coordinator", emoji: "👨🏾‍⚽" },
  { name: "Grace Kibiru", role: "Empowerment Lead", emoji: "👩🏾‍🏫" },
  { name: "Ali Rashid", role: "Production Manager", emoji: "👨🏾‍🔧" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-brand-light text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              Our Story
            </div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6">
              We Are <span className="gradient-text">{BRAND.name}</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Founded with a bold vision, Feyfay Events has grown to become one of the most trusted event management companies in East Africa. We don't just organize events — we craft experiences that move, inspire, and unite people.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              From the energy of a packed stadium during Sports Bonanza to the quiet power of a room full of young women discovering their potential — every event we organize is infused with purpose.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Work With Us <ArrowRight className="w-5 h-5" />
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
              { value: "150+", label: "Events Organized" },
              { value: "50K+", label: "Happy Attendees" },
              { value: "200+", label: "Clients Served" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card p-8 text-center bg-gradient-to-br from-brand/10 to-brand/5 border-brand/20"
              >
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
          <div className="card p-10 bg-gradient-to-br from-brand/15 to-brand/5 border-brand/30">
            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-brand-light" />
            </div>
            <h2 className="text-2xl font-black mb-4">Our Mission</h2>
            <p className="text-muted leading-relaxed">
              To organize world-class events that bring people together, celebrate talent, empower communities, and create lasting memories — while setting new standards for event excellence in East Africa.
            </p>
          </div>
          <div className="card p-10 bg-gradient-to-br from-empowerment/15 to-empowerment/5 border-empowerment/30">
            <div className="w-12 h-12 rounded-xl bg-empowerment/20 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-empowerment" />
            </div>
            <h2 className="text-2xl font-black mb-4">Our Vision</h2>
            <p className="text-muted leading-relaxed">
              To be the leading event management company across Africa — known for innovation, community impact, and extraordinary experiences that transform both individuals and societies.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-[var(--background-card)] border border-[var(--border)] p-12">
          <h2 className="text-3xl font-black mb-2 text-center">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-muted text-center mb-10">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
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
          Our <span className="gradient-text">Journey</span>
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
              <div className="card p-5 flex-1 mb-0" style={{ marginBottom: i < milestones.length - 1 ? "0" : undefined }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-brand-light font-semibold">{m.year}</span>
                  <h3 className="font-bold">{m.title}</h3>
                </div>
                <p className="text-muted text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-black text-center mb-12">
          Meet the <span className="gradient-text">Team</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((member) => (
            <div key={member.name} className="card p-5 text-center">
              <div className="text-4xl mb-3">{member.emoji}</div>
              <h3 className="font-bold text-sm mb-1">{member.name}</h3>
              <p className="text-xs text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
