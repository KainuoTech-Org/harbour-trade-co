"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dictionary, Language, Dictionary } from "./i18n";

interface LanguageContextType {
  language: Language;
  dict: Dictionary;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "zh")) {
      setLanguageState(savedLang);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "zh" : "en";
    setLanguage(newLang);
  };

  // Prevent hydration mismatch by rendering children only after load
  // or just render with default and update. To avoid flash, we might accept default.
  // For simplicity in this "lightweight" approach without server-side cookies, 
  // we will just render. The initial render on server is "en". 
  // If client has "zh", it will re-render. 
  
  const value = {
    language,
    dict: dictionary[language],
    setLanguage,
    toggleLanguage,
  };

  // To avoid hydration mismatch errors for text content, 
  // strictly speaking we should suppress hydration warning or wait for mount.
  // But for this specific request, let's just return the provider.
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
