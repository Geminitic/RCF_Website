import React, { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './OptimizedImage.module.css'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  priority = false,
  objectFit = 'cover',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState('')
  const [hasError, setHasError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    skip: priority, // Skip intersection observer for priority images
  })

  const shouldLoad = priority || inView

  // Generate different image formats and sizes
  const generateSrcSet = (baseSrc: string, format: string) => {
    const baseName = baseSrc.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
    const sizes = [320, 640, 960, 1280, 1920]
    
    return sizes
      .map(size => `${baseName}-${size}w.${format} ${size}w`)
      .join(', ')
  }

  const webpSrcSet = generateSrcSet(src, 'webp')
  const avifSrcSet = generateSrcSet(src, 'avif')
  const originalSrcSet = generateSrcSet(src, src.split('.').pop() || 'jpg')

  useEffect(() => {
    if (!shouldLoad) return

    const img = new Image()
    img.onload = () => {
      setImageSrc(img.src)
      setImageLoaded(true)
      onLoad?.()
    }
    img.onerror = () => {
      setHasError(true)
      onError?.()
    }

    // Use the most supported format as fallback
    img.src = src
  }, [shouldLoad, src, onLoad, onError])

  // Create a low-quality placeholder
  const placeholderSrc = `data:image/svg+xml;base64,${btoa(`
    <svg width="${width || 800}" height="${height || 600}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999" font-family="sans-serif" font-size="14">
        ${alt}
      </text>
    </svg>
  `)}`

  if (hasError) {
    return (
      <div 
        className={`${styles.imagePlaceholder} ${className}`}
        style={{ width, height }}
        aria-label={alt}
      >
        <span className={styles.errorText}>Image failed to load</span>
      </div>
    )
  }

  return (
    <div 
      ref={inViewRef}
      className={`${styles.imageContainer} ${className}`}
      style={{ width, height }}
    >
      {shouldLoad ? (
        <picture className={styles.picture}>
          <source srcSet={avifSrcSet} sizes={sizes} type="image/avif" />
          <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" />
          <img
            ref={imageRef}
            src={imageLoaded ? imageSrc : placeholderSrc}
            srcSet={imageLoaded ? originalSrcSet : undefined}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`${styles.image} ${imageLoaded ? styles.loaded : styles.loading}`}
            style={{ objectFit }}
          />
        </picture>
      ) : (
        <div 
          className={styles.placeholder}
          style={{ width, height }}
          aria-label={`Loading ${alt}`}
        />
      )}
      
      {!imageLoaded && shouldLoad && (
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner} />
        </div>
      )}
    </div>
  )
}
