import i18next, { type Resource } from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './locales/en/translation.json'
import translationRU from './locales/ru/translation.json'
import type { App } from 'vue'

const resources: Resource = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
}

i18next.use(LanguageDetector).init({
  debug: true,
  supportedLngs: ['en', 'ru'],
  interpolation: { escapeValue: false },
  fallbackLng: false,
  resources,
})

export default function (app: App<Element>) {
  app.use(I18NextVue, { i18next })
  return app
}
