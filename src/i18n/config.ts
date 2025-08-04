import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const RTL_LANGUAGES = ['ar', 'he', 'fa']

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = RTL_LANGUAGES.includes(lng) ? 'rtl' : 'ltr'

  const root = document.documentElement
  if (RTL_LANGUAGES.includes(lng)) {
    root.style.setProperty('--text-align-start', 'right')
    root.style.setProperty('--text-align-end', 'left')
    root.style.setProperty('--border-radius-start', '0 8px 8px 0')
    root.style.setProperty('--border-radius-end', '8px 0 0 8px')
  } else {
    root.style.setProperty('--text-align-start', 'left')
    root.style.setProperty('--text-align-end', 'right')
    root.style.setProperty('--border-radius-start', '8px 0 0 8px')
    root.style.setProperty('--border-radius-end', '0 8px 8px 0')
  }
})

export default i18n
