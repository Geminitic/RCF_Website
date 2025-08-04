import React from 'react'
import { LanguageSwitcher } from '../features/LanguageSwitcher/LanguageSwitcher'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>RCF</div>
      <LanguageSwitcher />
    </header>
  )
}
