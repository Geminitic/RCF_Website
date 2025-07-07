import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import CommunityPreview from '../components/home/CommunityPreview';
import ImpactStats from '../components/home/ImpactStats';
import InteractiveMap from '../components/home/InteractiveMap';

const HomePage: React.FC = () => {
  const [DevButton, setDevButton] = React.useState<React.FC | null>(null);

  React.useEffect(() => {
    if (import.meta.env.DEV) {
      import('../components/common/SentryTestButton').then((module) => {
        setDevButton(() => module.default);
      });
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <InteractiveMap />
      <ImpactStats />
      <CommunityPreview />
      {DevButton && <DevButton />}
    </div>
  );
};

export default HomePage;