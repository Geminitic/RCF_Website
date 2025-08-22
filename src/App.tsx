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
import RouteWrapper from './components/common/RouteWrapper';
import './styles/rtl-fixes.css';
import './styles/unified-theme.css';

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
                      <RouteWrapper name="HomePage" element={<HomePage />} />
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <RouteWrapper name="AboutPage" element={<AboutPage />} />
                    }
                  />
                  <Route
                    path="/programs"
                    element={
                      <RouteWrapper
                        name="ProgramsPage"
                        element={<ProgramsPage />}
                      />
                    }
                  />
                  <Route
                    path="/rhizome-syria"
                    element={
                      <RouteWrapper
                        name="RhizomeSyriaWrapper"
                        element={<RhizomeSyriaWrapper />}
                      />
                    }
                  />
                  <Route
                    path="/community-wall"
                    element={
                      <RouteWrapper
                        name="CommunityWallAndCalendarPage"
                        element={<CommunityWallAndCalendarPage />}
                      />
                    }
                  />
                  <Route
                    path="/knowledge-hub"
                    element={
                      <RouteWrapper
                        name="KnowledgeHubPage"
                        element={<KnowledgeHubPage />}
                      />
                    }
                  />
                  <Route
                    path="/calendar"
                    element={
                      <RouteWrapper
                        name="CalendarPage"
                        element={<CommunityWallAndCalendarPage />}
                      />
                    }
                  />
                  <Route
                    path="/join"
                    element={
                      <RouteWrapper name="JoinPage" element={<JoinPage />} />
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <RouteWrapper
                        name="ContactPage"
                        element={<ContactPage />}
                      />
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <RouteWrapper
                        name="AdminApprovalPage"
                        element={<AdminApprovalPage />}
                      />
                    }
                  />
                  <Route
                    path="/rhizome-syria-subpage"
                    element={
                      <RouteWrapper
                        name="RhizomeSyriaSubpage"
                        element={<RhizomeSyriaSubpage />}
                      />
                    }
                  />
                  <Route
                    path="/rhizome-canada-subpage"
                    element={
                      <RouteWrapper
                        name="RhizomeCanadaSubpage"
                        element={<RhizomeCanadaSubpage />}
                      />
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
