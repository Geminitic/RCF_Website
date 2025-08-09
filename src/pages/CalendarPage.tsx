import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Simple placeholder for future calendar implementation.
 * Backend integration is commented out and will be added later.
 */
const CalendarPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-stone-50 to-sky-50">
      <div className="text-center p-10">
        <h1 className={`text-4xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
          {t('calendar-title', 'Calendar Coming Soon', 'التقويم قريباً')}
        </h1>
        <p className={`text-stone-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
          {t(
            'calendar-placeholder',
            'Our event calendar will be available soon.',
            'سيتم توفير التقويم قريباً.'
          )}
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;
