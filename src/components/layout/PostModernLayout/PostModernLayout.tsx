import React from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { FloatingElements } from './FloatingElements'
import { RadicalGrid } from './RadicalGrid'
import styles from './PostModernLayout.module.css'

interface PostModernLayoutProps {
  children: React.ReactNode
  variant?: 'default' | 'radical' | 'minimal'
  showFloatingElements?: boolean
}

export function PostModernLayout({
  children,
  variant = 'default',
  showFloatingElements = true,
}: PostModernLayoutProps) {
  const { currentLanguage } = useLanguage()

  return (
    <div className={`${styles.layout} ${styles[variant]}`} dir={currentLanguage.direction}>
      {showFloatingElements && <FloatingElements variant={variant} />}
      <RadicalGrid>{children}</RadicalGrid>
    </div>
  )
}

export default PostModernLayout
