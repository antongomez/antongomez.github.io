// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import gl from './locales/gl.json'
import es from './locales/es.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      gl: { translation: gl },
      es: { translation: es },
    },
    lng: localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

// Keep <html lang> in sync so crawlers and screen readers see the real language
const syncHtmlLang = (lng) => {
  document.documentElement.setAttribute('lang', lng)
}
syncHtmlLang(i18n.language)
i18n.on('languageChanged', syncHtmlLang)

export default i18n
