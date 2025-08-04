import React from 'react'
import styles from './RadicalGrid.module.css'

interface RadicalGridProps {
  children: React.ReactNode
  columns?: number
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  asymmetric?: boolean
}

export function RadicalGrid({
  children,
  columns = 12,
  gap = 'md',
  asymmetric = true,
}: RadicalGridProps) {
  return (
    <div
      className={`${styles.grid} ${styles[`gap-${gap}`]} ${
        asymmetric ? styles.asymmetric : ''
      }`}
      style={{ '--grid-columns': columns } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

export default RadicalGrid
