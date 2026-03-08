"use client";

import { createContext, useContext, useState } from "react";

export type Lang = "fr" | "en";

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "fr",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang((l) => (l === "fr" ? "en" : "fr")) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
