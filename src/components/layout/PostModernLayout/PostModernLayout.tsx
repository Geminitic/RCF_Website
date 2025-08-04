import React from 'react'
import { useAppStore } from '../../../stores/appStore'
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
  const theme = useAppStore((state) => state.theme)

  return (
    <div className={`${styles.layout} ${styles[variant]} ${styles[theme]}`}>
      {showFloatingElements && <FloatingElements variant={variant} />}
      <RadicalGrid>{children}</RadicalGrid>
    </div>
  )
}
