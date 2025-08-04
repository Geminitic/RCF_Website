import React, { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import { useTranslation } from 'react-i18next'
import { useSyriaMapData } from '@/hooks/useSyriaMapData'
import styles from './SyriaMap.module.css'

interface SyriaLocation {
  id: string
  name: string
  nameAr: string
  coordinates: [number, number]
  population?: number
  province: string
  type: 'city' | 'town' | 'village'
}

// Placeholder components for MapControls and MapTooltip
function MapControls(_: { map: maplibregl.Map | null }) {
  return null
}
function MapTooltip(_: { location: SyriaLocation; position: { x: number; y: number }; language: string }) {
  return null
}

export function SyriaMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const { t, i18n } = useTranslation()
  const [tooltipData, _setTooltipData] = useState<{
    location: SyriaLocation
    position: { x: number; y: number }
  } | null>(null)
  
  const { data: _locations, loading, error } = useSyriaMapData()

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [38.9637, 35.2433],
      zoom: 6,
      minZoom: 5,
      maxZoom: 12,
    })

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right')
    map.current.addControl(new maplibregl.ScaleControl({ maxWidth: 100, unit: 'metric' }), 'bottom-left')

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  // Additional map logic omitted for brevity

  if (loading) {
    return (
      <div className={styles.mapContainer}>
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner} />
          <p>{t('map.loading')}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.mapContainer}>
        <div className={styles.errorOverlay}>
          <p>{t('map.error')}</p>
          <button onClick={() => window.location.reload()}>
            {t('map.retry')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.mapWrapper}>
      <MapControls map={map.current} />
      <div ref={mapContainer} className={styles.mapContainer} />
      {tooltipData && (
        <MapTooltip
          location={tooltipData.location}
          position={tooltipData.position}
          language={i18n.language}
        />
      )}
    </div>
  )
}
