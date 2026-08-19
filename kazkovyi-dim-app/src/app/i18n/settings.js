import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";

import esTranslations from "./locales/es/common.json";
import enTranslations from "./locales/en/common.json";
import ukTranslations from "./locales/uk/common.json";

const i18n = createInstance();

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: esTranslations,
    },
    en: {
      translation: enTranslations,
    },
    uk: {
      translation: ukTranslations,
    },
  },

  lng: "es",
  fallbackLng: "es",

  interpolation: {
    escapeValue: false,
  },

  react: {
    bindI18n: "languageChanged",
    useSuspense: false,
  },
});

export default i18n;
