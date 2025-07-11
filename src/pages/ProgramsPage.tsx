import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProgramsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-stone-50 to-emerald-50">
      <p className={`text-xl text-stone-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
        {t('programs-coming', 'Program information will be available soon.', 'سيتم توفير معلومات البرامج قريبًا.')}
      </p>
    </div>
  );
};

export default ProgramsPage;
