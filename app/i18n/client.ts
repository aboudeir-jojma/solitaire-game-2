"use client";

import i18n from "./config";

if (typeof window !== "undefined") {
  Promise.all([
    import("react-i18next"),
    import("i18next-browser-languagedetector")
  ]).then(([reactI18nextMod, detectorMod]) => {
    const { initReactI18next } = reactI18nextMod;
    const LanguageDetector = detectorMod.default;

    if (!i18n.isInitialized) {
      i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          fallbackLng: "en",
          supportedLngs: ["en", "fr"],
          ns: ["global", "about", "privacy", "terms"],
          defaultNS: "global",
          resources: {
            en: {
              global: require("../../lib/locales/en/global.js").default,
              about: require("../../lib/locales/en/global.js").default.about,
              privacy: require("../../lib/locales/en/privacy.js").default,
              terms: require("../../lib/locales/en/global.js").default.terms,
            },
            fr: {
              global: require("../../lib/locales/fr/global.js").default,
              about: require("../../lib/locales/fr/global.js").default.about,
              privacy: require("../../lib/locales/fr/privacy.js").default,
              terms: require("../../lib/locales/fr/global.js").default.terms,
            },
          },
          detection: {
            order: ["navigator"],
            caches: [],
          },
          interpolation: { escapeValue: false },
          returnObjects: true,
          returnNull: false,
          parseMissingKeyHandler: (key) => key,
        });
    }
  });
}

export default i18n;
