import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "./locales/pt-BR.json";
import enUS from "./locales/en-US.json";

const savedLanguage = localStorage.getItem("language") || "pt";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: ptBR,
    },
    en: {
      translation: enUS,
    },
  },

  lng: savedLanguage,
  fallbackLng: "pt",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
