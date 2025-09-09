import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Images } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import CommunityWallPage from './CommunityWallPage';
import CalendarPage from './CalendarPage';
import '../styles/unified-theme.css';

const CommunityWallAndCalendarPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'community' | 'calendar'>(
    'community'
  );

  const tabs = [
    {
      id: 'community',
      label: 'Community Canvas',
      labelAr: 'فسيفساء المجتمع',
      icon: <Images className="h-5 w-5" />,
    },
    {
      id: 'calendar',
      label: 'Events & Activities',
      labelAr: 'الفعاليات والأنشطة',
      icon: <CalendarIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 pt-16">
      {/* Background Pattern */}
      <div className="unified-pattern-bg"></div>

      {/* Header */}
      <div className="relative overflow-hidden py-12 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent mb-6 ${
              currentLanguage.code === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {t(
              'community-connect-heading',
              'Community Connect',
              'تواصل المجتمع'
            )}
          </h1>
          <p
            className={`text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 ${
              currentLanguage.code === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {t(
              'community-connect-subheading',
              'A space where our global community shares their stories and connects through shared activities.',
              'مساحة يشارك فيها مجتمعنا العالمي قصصهم ويتواصلون من خلال الأنشطة المشتركة.'
            )}
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'community' | 'calendar')}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium
                transition-all duration-300 shadow-md
                ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }
                ${currentLanguage.code === 'ar' ? 'font-arabic flex-row-reverse' : ''}
              `}
            >
              {tab.icon}
              <span>
                {currentLanguage.code === 'ar' ? tab.labelAr : tab.label}
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="mb-16">
        <AnimatedTabContent isActive={activeTab === 'community'}>
          <CommunityWallPage />
        </AnimatedTabContent>

        <AnimatedTabContent isActive={activeTab === 'calendar'}>
          <CalendarPage />
        </AnimatedTabContent>
      </div>
    </div>
  );
};

// Helper component for animated tab content
const AnimatedTabContent: React.FC<{
  children: React.ReactNode;
  isActive: boolean;
}> = ({ children, isActive }) => {
  return (
    <div
      className={`transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute'
      }`}
    >
      {isActive && children}
    </div>
  );
};

export default CommunityWallAndCalendarPage;
