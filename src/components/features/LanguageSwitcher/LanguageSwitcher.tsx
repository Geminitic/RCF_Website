import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppStore } from '../../../stores/appStore'
import styles from './LanguageSwitcher.module.css'

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const setLanguage = useAppStore((state) => state.setLanguage)

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setLanguage(langCode as 'en' | 'ar')
    const newPath = location.pathname.replace(/^\/[a-z]{2}/, `/${langCode}`)
    navigate(newPath, { replace: true })
  }

  return (
    <div className={styles.languageSwitcher} role="group" aria-label="Language selector">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`${styles.langButton} ${i18n.language === lang.code ? styles.active : ''}`}
          aria-pressed={i18n.language === lang.code}
          lang={lang.code}
        >
          <span className={styles.langCode}>{lang.code.toUpperCase()}</span>
          <span className={styles.langName}>{lang.nativeName}</span>
        </button>
      ))}
    </div>
  )
}
