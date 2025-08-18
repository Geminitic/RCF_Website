import * as React from 'react';
import { lazy, Suspense } from 'react';
import SentryTestButton from '../components/common/SentryTestButton';

// Lazy load larger components
const HeroSection = lazy(() => import('../components/home/HeroSection'));
const AboutPreview = lazy(() => import('../components/home/AboutPreview'));
const OurPillars = lazy(() => import('../components/home/OurPillars'));
const InteractiveMap = lazy(() => import('../components/home/InteractiveMap'));

// Component loading fallback
const ComponentLoader = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-10 h-10 border-4 border-t-primary-green border-opacity-50 rounded-full animate-spin"></div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<ComponentLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <AboutPreview />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <OurPillars />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <InteractiveMap />
      </Suspense>
      <SentryTestButton />
    </div>
  );
};

export default HomePage;
