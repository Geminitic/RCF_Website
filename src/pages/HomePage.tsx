import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
// Landing page now focuses on a streamlined introduction. Detailed
// content like maps, community walls, and stats were moved to
// dedicated pages to keep the home concise.

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      {/* Additional sections are now available on subpages. */}
    </div>
  );
};

export default HomePage;