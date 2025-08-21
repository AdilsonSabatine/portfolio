"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Textos gerais
import en from "../locales/en/texts.json";
import pt from "../locales/pt-br/texts.json";

// Projetos
import enProjects from "../locales/en/projects.json";
import ptProjects from "../locales/pt-br/projects.json";

type Locale = "en" | "pt";

type ProjectData = typeof enProjects;

type LanguageContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  texts;
  projects: ProjectData;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type Props = { children: ReactNode };

export function LanguageProvider({ children }: Props) {
  const [locale, setLocale] = useState<Locale>("pt");

  const texts = locale === "pt" ? pt : en;
  const projects = locale === "pt" ? ptProjects : enProjects;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, texts, projects }}>
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
