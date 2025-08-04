import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './FloatingElements.module.css'

interface FloatingElementsProps {
  variant: 'default' | 'radical' | 'minimal'
}

export function FloatingElements({ variant }: FloatingElementsProps) {
  const { i18n } = useTranslation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (variant === 'minimal') return null

  return (
    <div className={styles.floatingContainer} aria-hidden="true">
      {/* Organic Shapes */}
      <div 
        className={`${styles.floatingElement} ${styles.organic1}`}
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div 
        className={`${styles.floatingElement} ${styles.organic2}`}
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.03}px)`,
        }}
      />
      
      {/* Geometric Elements */}
      <div 
        className={`${styles.floatingElement} ${styles.geometric1}`}
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.025}px) rotate(${mousePosition.x * 0.1}deg)`,
        }}
      />
      
      {/* Text Fragments */}
      <div 
        className={`${styles.floatingElement} ${styles.textFragment}`}
        style={{
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.012}px)`,
        }}
      >
        {i18n.language === 'ar' ? 'جذور' : 'ROOTS'}
      </div>
      
      {/* Dopamine Color Accent */}
      {variant === 'radical' && (
        <div 
          className={`${styles.floatingElement} ${styles.dopamineAccent}`}
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
      )}
    </div>
  )
}
