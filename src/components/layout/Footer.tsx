import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Camera, Globe, Play, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

const footerLinks = {
  Events: [
    { href: "/entertainment", label: "Entertainment" },
    { href: "/empowerment", label: "Empowerment" },
    { href: "/events", label: "All Events" },
    { href: "/gallery", label: "Gallery" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Book an Event" },
  ],
};

const socialLinks = [
  { icon: Camera, href: BRAND.socials.instagram, label: "Instagram" },
  { icon: Globe, href: BRAND.socials.facebook, label: "Facebook" },
  { icon: MessageCircle, href: BRAND.socials.twitter, label: "Twitter/X" },
  { icon: Play, href: BRAND.socials.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/feyfaylogo-cropped.png"
                alt={BRAND.name}
                width={150}
                height={48}
                className="object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
              {BRAND.description} From talent searches to youth empowerment conferences — we make every event unforgettable.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[var(--background-elevated)] border border-[var(--border)] flex items-center justify-center text-muted hover:text-brand-light hover:border-brand/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted text-sm hover:text-brand-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted">
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-brand-light transition-colors">
              <Mail className="w-4 h-4" />
              {BRAND.email}
            </a>
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-brand-light transition-colors">
              <Phone className="w-4 h-4" />
              {BRAND.phone}
            </a>
          </div>
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
