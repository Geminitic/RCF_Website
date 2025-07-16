import React from 'react';
import HeroSection from '../components/home/HeroSection';
import NumberZoomIntro from '../components/home/NumberZoomIntro';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import CommunityPreview from '../components/home/CommunityPreview';
import InteractiveMap from '../components/home/InteractiveMap';
import SentryTestButton from '../components/common/SentryTestButton';
import DonateSection from '../components/common/DonateSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <NumberZoomIntro />
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <InteractiveMap />
      <CommunityPreview />
      <DonateSection />
      <SentryTestButton />
    </div>
  );
};

export default HomePage;