import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import CommunityPreview from '../components/home/CommunityPreview';
import ImpactStats from '../components/home/ImpactStats';
import SentryTestButton from '../components/common/SentryTestButton';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <ImpactStats />
      <CommunityPreview />
      <SentryTestButton />
    </div>
  );
};
export default HomePage;