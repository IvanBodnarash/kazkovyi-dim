"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "./settings";

export default function I18nProvider({ children }) {
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("language");

    if (savedLanguage && ["es", "en", "uk"].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const handleLanguageChanged = (language) => {
      console.log("EVENT languageChanged:", language);
      
      document.documentElement.lang = language;
    };

    document.documentElement.lang = i18n.resolvedLanguage || "es";

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
