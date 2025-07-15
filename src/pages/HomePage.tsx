import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import CommunityPreview from '../components/home/CommunityPreview';
import DonationSection from '../components/home/DonationSection';
import InteractiveMap from '../components/home/InteractiveMap';
import SentryTestButton from '../components/common/SentryTestButton';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <InteractiveMap />
      <CommunityPreview />
      <DonationSection />
      <SentryTestButton />
    </div>
  );
};

export default HomePage;