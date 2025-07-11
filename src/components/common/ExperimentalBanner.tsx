import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ExperimentalBanner: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  return (
    <div className={`bg-yellow-300 text-black text-center py-2 text-xs ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
      {t('experimental-banner', 'This website is an experimental release.', 'هذا الموقع إصدار تجريبي.')}
    </div>
  );
};

export default ExperimentalBanner;
