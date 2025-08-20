"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en/texts.json";
import pt from "../locales/pt-br/texts.json";

type Locale = "en" | "pt";

type LanguageData = typeof en;

type LanguageContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  texts: LanguageData;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type Props = { children: ReactNode };

export function LanguageProvider({ children }: Props) {
  const [locale, setLocale] = useState<Locale>("pt");

  const texts = locale === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, texts }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}
