"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/brand";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/events", label: t.nav.events },
    { href: "/entertainment", label: t.nav.entertainment },
    { href: "/empowerment", label: t.nav.empowerment },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main bar — always solid, elevates on scroll */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0A0A0F] border-[var(--border)] shadow-xl shadow-black/30"
            : "bg-[#0A0A0F]/90 backdrop-blur-xl border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/feyfaylogo-cropped.png"
                alt={BRAND.name}
                width={280}
                height={90}
                className="object-contain w-auto h-[56px]"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-brand/25 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={() => setLanguage(language === "en" ? "sw" : "en")}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-xs font-semibold tracking-wider transition-all"
                aria-label="Toggle language"
              >
                <span className={language === "en" ? "text-white" : "text-white/40"}>EN</span>
                <span className="text-white/30">|</span>
                <span className={language === "sw" ? "text-white" : "text-white/40"}>SW</span>
              </button>
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-brand-gradient text-white text-sm font-semibold glow-brand hover:opacity-90 transition-opacity"
              >
                {t.nav.bookEvent}
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Language toggle mobile */}
              <button
                onClick={() => setLanguage(language === "en" ? "sw" : "en")}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-white/20 text-white/70 hover:text-white text-xs font-semibold tracking-wider transition-all"
              >
                <span className={language === "en" ? "text-white" : "text-white/40"}>EN</span>
                <span className="text-white/30">|</span>
                <span className={language === "sw" ? "text-white" : "text-white/40"}>SW</span>
              </button>
              <ThemeToggle />
              <button
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0F] border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand/25 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 px-5 py-3 rounded-xl bg-brand-gradient text-white text-sm font-semibold text-center"
            >
              {t.nav.bookEvent}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
