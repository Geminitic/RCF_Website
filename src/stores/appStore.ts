import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

interface SyriaLocation {
  id: string
  name: string
  nameAr: string
  coordinates: [number, number]
  population?: number
  province: string
  type: 'city' | 'town' | 'village'
}

interface AppState {
  theme: 'light' | 'dark' | 'radical'
  isLoading: boolean
  currentLanguage: 'en' | 'ar'
  syriaMapData: SyriaLocation[]

  setTheme: (_theme: 'light' | 'dark' | 'radical') => void
  setLoading: (_loading: boolean) => void
  setLanguage: (_lang: 'en' | 'ar') => void
  setSyriaMapData: (_data: SyriaLocation[]) => void
}

export const useAppStore = create<AppState>()(
  subscribeWithSelector((set) => ({
    theme: 'light',
    isLoading: false,
    currentLanguage: 'en',
    syriaMapData: [],

    setTheme: (theme) => set({ theme }),
    setLoading: (isLoading) => set({ isLoading }),
    setLanguage: (currentLanguage) => set({ currentLanguage }),
    setSyriaMapData: (syriaMapData) => set({ syriaMapData }),
  }))
)

useAppStore.subscribe(
  (state) => state.currentLanguage,
  (language) => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }
)
