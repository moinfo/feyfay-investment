"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/lib/i18n/en";
import sw from "@/lib/i18n/sw";
import type { Translations } from "@/lib/i18n/en";

type Language = "en" | "sw";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("feyfay-lang") as Language | null;
    if (saved === "sw" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("feyfay-lang", lang);
  }

  const t = language === "sw" ? sw : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
