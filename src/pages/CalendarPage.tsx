import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
// import BigCalendar from '../components/calendar/BigCalendar'; // TODO: enable when backend is ready

/**
 * CalendarPage currently serves as a placeholder while the
 * calendar backend is being prepared. The design is kept
 * minimal and the component intentionally contains no dynamic
 * content.
 */
const CalendarPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-accent-50 pt-16">
      <section className="py-20 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <CalendarIcon className="h-16 w-16 mx-auto mb-6" />
          <h1
            className={`text-5xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t('calendar-title', 'Events & Opportunities', 'الفعاليات والفرص')}
          </h1>
          <p
            className={`text-xl text-primary-100 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t('calendar-coming-soon', 'Our calendar is under construction.', 'تقويمنا قيد الإنشاء.')}
          </p>
          {/* <BigCalendar events={[]} language={currentLanguage.code as 'en' | 'ar'} /> */}
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
