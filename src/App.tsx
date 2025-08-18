import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { PhotoProvider } from './contexts/PhotoContext';
import { UserProvider } from './contexts/UserContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/common/LoadingScreen';
import CustomCursor from './components/common/CustomCursor';
import ParticleSystem from './components/common/ParticleSystem';
import ErrorBoundary from './components/common/ErrorBoundary';
import './styles/rtl-fixes.css'; // Import RTL-specific styles
import './styles/unified-theme.css'; // Import unified visual identity

// Lazy load larger page components
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

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-emerald-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-primary-green border-opacity-50 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading page...</p>
    </div>
  </div>
);

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
                  <Route
                    path="/"
                    element={
                      <ErrorBoundary name="HomePage">
                        <HomePage />
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <ErrorBoundary name="AboutPage">
                        <Suspense fallback={<PageLoader />}>
                          <AboutPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/programs"
                    element={
                      <ErrorBoundary name="ProgramsPage">
                        <Suspense fallback={<PageLoader />}>
                          <ProgramsPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/rhizome-syria"
                    element={
                      <ErrorBoundary name="RhizomeSyriaWrapper">
                        <Suspense fallback={<PageLoader />}>
                          <RhizomeSyriaWrapper />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/community-wall"
                    element={
                      <ErrorBoundary name="CommunityWallAndCalendarPage">
                        <Suspense fallback={<PageLoader />}>
                          <CommunityWallAndCalendarPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/knowledge-hub"
                    element={
                      <ErrorBoundary name="KnowledgeHubPage">
                        <Suspense fallback={<PageLoader />}>
                          <KnowledgeHubPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  {/* Calendar route redirects to community wall */}
                  <Route
                    path="/calendar"
                    element={
                      <ErrorBoundary name="CalendarPage">
                        <Suspense fallback={<PageLoader />}>
                          <CommunityWallAndCalendarPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/join"
                    element={
                      <ErrorBoundary name="JoinPage">
                        <Suspense fallback={<PageLoader />}>
                          <JoinPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <ErrorBoundary name="ContactPage">
                        <Suspense fallback={<PageLoader />}>
                          <ContactPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <ErrorBoundary name="AdminApprovalPage">
                        <Suspense fallback={<PageLoader />}>
                          <AdminApprovalPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/rhizome-syria-subpage"
                    element={
                      <ErrorBoundary name="RhizomeSyriaSubpage">
                        <Suspense fallback={<PageLoader />}>
                          <RhizomeSyriaSubpage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/rhizome-canada-subpage"
                    element={
                      <ErrorBoundary name="RhizomeCanadaSubpage">
                        <Suspense fallback={<PageLoader />}>
                          <RhizomeCanadaSubpage />
                        </Suspense>
                      </ErrorBoundary>
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
