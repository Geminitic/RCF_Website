import { useState, useEffect } from 'react'
import { useAppStore } from '@/stores/appStore'

interface SyriaLocation {
  id: string
  name: string
  nameAr: string
  coordinates: [number, number]
  population?: number
  province: string
  type: 'city' | 'town' | 'village'
}

export function useSyriaMapData() {
  const [data, setData] = useState<SyriaLocation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const setSyriaMapData = useAppStore(state => state.setSyriaMapData)

  useEffect(() => {
    const loadMapData = async () => {
      try {
        setLoading(true)
        
        // Check if data is already cached in localStorage
        const cachedData = localStorage.getItem('syria-map-data')
        const cacheTimestamp = localStorage.getItem('syria-map-data-timestamp')
        const oneWeek = 7 * 24 * 60 * 60 * 1000
        
        if (cachedData && cacheTimestamp && 
            Date.now() - parseInt(cacheTimestamp) < oneWeek) {
          const parsedData = JSON.parse(cachedData)
          setData(parsedData)
          setSyriaMapData(parsedData)
          setLoading(false)
          return
        }

        // Load data from multiple sources and combine
        const [citiesResponse, townsResponse, villagesResponse] = await Promise.all([
          fetch('/data/syria-cities.json'),
          fetch('/data/syria-towns.json'),
          fetch('/data/syria-villages.json'),
        ])

        if (!citiesResponse.ok || !townsResponse.ok || !villagesResponse.ok) {
          throw new Error('Failed to load map data')
        }

        const [cities, towns, villages] = await Promise.all([
          citiesResponse.json(),
          townsResponse.json(),
          villagesResponse.json(),
        ])

        const combinedData = [
          ...cities.map((item: any) => ({ ...item, type: 'city' as const })),
          ...towns.map((item: any) => ({ ...item, type: 'town' as const })),
          ...villages.map((item: any) => ({ ...item, type: 'village' as const })),
        ]

        // Cache the data
        localStorage.setItem('syria-map-data', JSON.stringify(combinedData))
        localStorage.setItem('syria-map-data-timestamp', Date.now().toString())

        setData(combinedData)
        setSyriaMapData(combinedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    loadMapData()
  }, [setSyriaMapData])

  return { data, loading, error }
}
