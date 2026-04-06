import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Feyfay Events — Creation, Innovation & Entertainment",
    template: "%s | Feyfay Events",
  },
  description:
    "Feyfay Events organizes world-class entertainment and empowerment events — talent searches, shows, awards, sports bonanzas, youth seminars, and women conferences.",
  keywords: [
    "feyfay events",
    "event management",
    "entertainment events",
    "talent search",
    "sports bonanza",
    "youth empowerment",
    "women conference",
    "awards ceremony",
  ],
  openGraph: {
    title: "Feyfay Events — Creation, Innovation & Entertainment",
    description:
      "World-class event management for entertainment and empowerment events.",
    type: "website",
    url: "https://www.feyfayinvestment.co.tz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
