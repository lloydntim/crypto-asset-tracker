import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './locales/en/common.json';
import loginEn from './locales/en/login.json';
import welcomeEn from './locales/en/welcome.json';

import commonDe from './locales/de/common.json';
import loginDe from './locales/de/login.json';
import welcomeDe from './locales/de/welcome.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: commonEn,
        login: loginEn,
        welcome: welcomeEn,
      },
      de: {
        common: commonDe,
        login: loginDe,
        welcome: welcomeDe,
      }
    },
    detection: {
      order: [
        'cookie',
        'navigator',
        'localStorage',
        'querystring',
        'htmlTag',
        'path',
        'subdomain',
      ],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      caches: ['localStorage', 'cookie'],
    },
    ns: ['common', 'welcome', 'login'],
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
  });

export default i18n;
