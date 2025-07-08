import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { PhotoProvider } from './contexts/PhotoContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import RhizomeSyriaPage from './pages/RhizomeSyriaPage';
import CommunityWallPage from './pages/CommunityWallPage';
import CalendarPage from './pages/CalendarPage';
import ContactPage from './pages/ContactPage';
import AdminApprovalPage from './pages/AdminApprovalPage';
import RhizomeSyriaSubpage from './pages/RhizomeSyriaSubpage';
import RhizomeCanadaSubpage from './pages/RhizomeCanadaSubpage';
import ParticleSystem from './components/common/ParticleSystem';
import CustomCursor from './components/common/CustomCursor';
import LoadingScreen from './components/common/LoadingScreen';

function App() {
  return (
    <LanguageProvider>
      <PhotoProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50">
            <LoadingScreen />
            <CustomCursor />
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/rhizome-syria" element={<RhizomeSyriaPage />} />
                <Route path="/community-wall" element={<CommunityWallPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin" element={<AdminApprovalPage />} />
                <Route path="/rhizome-syria-subpage" element={<RhizomeSyriaSubpage />} />
                <Route path="/rhizome-canada-subpage" element={<RhizomeCanadaSubpage />} />
              </Routes>
            </main>
            <Footer />
            <ParticleSystem />
          </div>
        </Router>
      </PhotoProvider>
    </LanguageProvider>
  );
}

export default App;