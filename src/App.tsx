import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'
import { LayoutProvider } from './contexts/LayoutContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { ErrorFallback } from './components/ui/ErrorFallback'
import './i18n/config'
import { LanguageProvider } from './contexts/LanguageContext'
import { PhotoProvider } from './contexts/PhotoContext'
import { UserProvider } from './contexts/UserContext'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const RhizomePage = React.lazy(() => import('./pages/RhizomePage/RhizomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const SyriaMapPage = React.lazy(() => import('./pages/SyriaMapPage'))

function App() {
  const { i18n } = useTranslation()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LanguageProvider>
        <UserProvider>
          <PhotoProvider>
            <LayoutProvider>
              <GlobalStyles />
              <BrowserRouter>
                <div className="app" dir={i18n.dir()}>
                  <Header />
                  <Suspense fallback={<LoadingScreen />}>
                    <Routes>
                      <Route path="/:lang/home" element={<HomePage />} />
                      <Route path="/:lang/rhizome" element={<RhizomePage />} />
                      <Route path="/:lang/about" element={<AboutPage />} />
                      <Route path="/:lang/syria-map" element={<SyriaMapPage />} />
                      <Route path="/" element={<Navigate to={`/${i18n.language}/home`} replace />} />
                    </Routes>
                  </Suspense>
                  <Footer />
                </div>
              </BrowserRouter>
            </LayoutProvider>
          </PhotoProvider>
        </UserProvider>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
