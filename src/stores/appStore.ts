import { create } from 'zustand'

export type Theme = 'light' | 'dark' | 'radical'

interface AppState {
  theme: Theme
  isLoading: boolean
  setTheme: (_theme: Theme) => void
  setLoading: (_loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  isLoading: false,
  setTheme: (theme) => set({ theme }),
  setLoading: (isLoading) => set({ isLoading }),
}))
