import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { LanguageProvider } from './contexts/LanguageContext';
import { PhotoProvider } from './contexts/PhotoContext';
import { UserProvider } from './contexts/UserContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/common/LoadingScreen';
import CustomCursor from './components/common/CustomCursor';
import ParticleSystem from './components/common/ParticleSystem';
<<<<<<< HEAD
import ErrorBoundary from './components/common/ErrorBoundary';
import './styles/rtl-fixes.css'; // Import RTL-specific styles
import './styles/unified-theme.css'; // Import unified visual identity
=======
import RouteWrapper from './components/common/RouteWrapper';
import './styles/rtl-fixes.css';
import './styles/unified-theme.css';
>>>>>>> feature/hero-section-updates

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const RhizomeSyriaWrapper = lazy(
  () => import('./components/common/RhizomeSyriaWrapper')
);
const CommunityWallAndCalendarPage = lazy(
  () => import('./pages/CommunityWallAndCalendarPage')
);
const KnowledgeHubPage = lazy(() => import('./pages/KnowledgeHubPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AdminApprovalPage = lazy(() => import('./pages/AdminApprovalPage'));
const RhizomeSyriaSubpage = lazy(() => import('./pages/RhizomeSyriaSubpage'));
const RhizomeCanadaSubpage = lazy(() => import('./pages/RhizomeCanadaSubpage'));
const JoinPage = lazy(() => import('./pages/JoinPage'));
<<<<<<< HEAD

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-emerald-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-primary-green border-opacity-50 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading page...</p>
    </div>
  </div>
);
=======
>>>>>>> feature/hero-section-updates

function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <PhotoProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50">
              <LoadingScreen />
              <CustomCursor />
              <Navigation />
              <main>
                <Routes>
<<<<<<< HEAD
                  <Route path="/" element={
                    <ErrorBoundary name="HomePage">
                      <HomePage />
                    </ErrorBoundary>
                  } />
                  <Route
                    path="/about"
                    element={
                      <ErrorBoundary name="AboutPage">
                        <Suspense fallback={<PageLoader />}>
                          <AboutPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                  <Route
                    path="/"
                    element={
                      <RouteWrapper name="HomePage" element={<HomePage />} />
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <RouteWrapper name="AboutPage" element={<AboutPage />} />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/programs"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="ProgramsPage">
                        <Suspense fallback={<PageLoader />}>
                          <ProgramsPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="ProgramsPage"
                        element={<ProgramsPage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/rhizome-syria"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="RhizomeSyriaWrapper">
                        <Suspense fallback={<PageLoader />}>
                          <RhizomeSyriaWrapper />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="RhizomeSyriaWrapper"
                        element={<RhizomeSyriaWrapper />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/community-wall"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="CommunityWallAndCalendarPage">
                        <Suspense fallback={<PageLoader />}>
                          <CommunityWallAndCalendarPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="CommunityWallAndCalendarPage"
                        element={<CommunityWallAndCalendarPage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/knowledge-hub"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="KnowledgeHubPage">
                        <Suspense fallback={<PageLoader />}>
                          <KnowledgeHubPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="KnowledgeHubPage"
                        element={<KnowledgeHubPage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/calendar"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="CalendarPage">
                        <Suspense fallback={<PageLoader />}>
                          <CommunityWallAndCalendarPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="CalendarPage"
                        element={<CommunityWallAndCalendarPage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/join"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="JoinPage">
                        <Suspense fallback={<PageLoader />}>
                          <JoinPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper name="JoinPage" element={<JoinPage />} />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/contact"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="ContactPage">
                        <Suspense fallback={<PageLoader />}>
                          <ContactPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="ContactPage"
                        element={<ContactPage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/admin"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="AdminApprovalPage">
                        <Suspense fallback={<PageLoader />}>
                          <AdminApprovalPage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="AdminApprovalPage"
                        element={<AdminApprovalPage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/rhizome-syria-subpage"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="RhizomeSyriaSubpage">
                        <Suspense fallback={<PageLoader />}>
                          <RhizomeSyriaSubpage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="RhizomeSyriaSubpage"
                        element={<RhizomeSyriaSubpage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                  <Route
                    path="/rhizome-canada-subpage"
                    element={
<<<<<<< HEAD
                      <ErrorBoundary name="RhizomeCanadaSubpage">
                        <Suspense fallback={<PageLoader />}>
                          <RhizomeCanadaSubpage />
                        </Suspense>
                      </ErrorBoundary>
=======
                      <RouteWrapper
                        name="RhizomeCanadaSubpage"
                        element={<RhizomeCanadaSubpage />}
                      />
>>>>>>> feature/hero-section-updates
                    }
                  />
                </Routes>
              </main>
              <Footer />
              <ParticleSystem />
            </div>
          </Router>
        </PhotoProvider>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
