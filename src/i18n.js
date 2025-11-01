import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// ✅ Only keep the languages you listed
import translationEN from "./lang/en/translation.json";
import translationAR from "./lang/ar/translation.json";
import translationZHCN from "./lang/zh-CN/translation.json";
import translationTR from "./lang/tr/translation.json";
import translationIT from "./lang/it/translation.json";
import translationRU from "./lang/ru/translation.json";
import translationMK from "./lang/mk/translation.json";
import translationSR from "./lang/sr/translation.json";
import translationID from "./lang/id/translation.json";
import translationES from "./lang/es/translation.json";
import translationPT from "./lang/pt/translation.json";
import translationFR from "./lang/fr/translation.json";
import translationKO from "./lang/ko/translation.json";

// Define the resources (only requested languages)
const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
  "zh-CN": { translation: translationZHCN },
  tr: { translation: translationTR },
  it: { translation: translationIT },
  ru: { translation: translationRU },
  mk: { translation: translationMK },
  sr: { translation: translationSR },
  id: { translation: translationID },
  es: { translation: translationES },
  pt: { translation: translationPT },
  fr: { translation: translationFR },
  ko: { translation: translationKO },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: [
      "ar",
      "en",
      "zh-CN",
      "tr",
      "it",
      "ru",
      "mk",
      "sr",
      "id",
      "es",
      "pt",
      "fr",
      "ko",
    ],
    nonExplicitSupportedLngs: true, // map en-US -> en, etc.
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
