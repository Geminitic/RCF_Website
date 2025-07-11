import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import CommunityPreview from '../components/home/CommunityPreview';
// Landing page now focuses on key highlights only

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <CommunityPreview />
    </div>
  );
};

export default HomePage;