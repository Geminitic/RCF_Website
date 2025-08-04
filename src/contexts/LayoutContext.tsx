/* eslint-disable react-refresh/only-export-components */
import React from 'react'

export const LayoutContext = React.createContext({})

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  return <LayoutContext.Provider value={{}}>{children}</LayoutContext.Provider>
}
