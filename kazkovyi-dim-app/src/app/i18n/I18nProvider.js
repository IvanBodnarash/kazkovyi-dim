"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

import { createI18n } from "./settings";

export default function I18nProvider({ children, language = "es" }) {
  const [i18n] = useState(() => createI18n(language));

  useEffect(() => {
    if (i18n.resolvedLanguage !== language) {
      i18n.changeLanguage(language);
    }

    document.documentElement.lang = language;
  }, [language, i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
