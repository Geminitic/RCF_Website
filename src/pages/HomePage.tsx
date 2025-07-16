import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import CommunityPreview from '../components/home/CommunityPreview';
import InteractiveMap from '../components/home/InteractiveMap';
import SentryTestButton from '../components/common/SentryTestButton';
import NumberZoomIntro from '../components/common/NumberZoomIntro';

const HomePage: React.FC = () => {
  return (
    <div>
      <NumberZoomIntro />
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <InteractiveMap />
      <CommunityPreview />
      <SentryTestButton />
    </div>
  );
};

export default HomePage;