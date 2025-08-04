import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/features/LanguageSwitcher/LanguageSwitcher'
import LoadingScreen from './components/common/LoadingScreen'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { PhotoProvider } from './contexts/PhotoContext'
import './i18n/config'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const RhizomePage = React.lazy(() => import('./pages/RhizomePage/RhizomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))

function App() {
  const { i18n } = useTranslation()

  return (
    <ErrorBoundary FallbackComponent={() => <div>Something went wrong</div>}>
      <PhotoProvider>
        <LanguageProvider>
          <BrowserRouter>
            <div className="min-h-screen" dir={i18n.dir()}>
              <Navigation />
              <div className="p-4 flex justify-end"><LanguageSwitcher /></div>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route path="/:lang/home" element={<HomePage />} />
                  <Route path="/:lang/rhizome" element={<RhizomePage />} />
                  <Route path="/:lang/about" element={<AboutPage />} />
                  <Route path="/" element={<Navigate to={`/${i18n.language}/home`} replace />} />
                </Routes>
              </Suspense>
              <Footer />
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </PhotoProvider>
    </ErrorBoundary>
  )
}

export default App
