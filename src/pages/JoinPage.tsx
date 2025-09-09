import React from 'react';
import { motion } from 'framer-motion';
import OrgRegistrationForms from '../components/common/OrgRegistrationForms';
import { useLanguage } from '../contexts/LanguageContext';

const JoinPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-sky-50 pt-16">
      <section className="py-20 bg-gradient-to-r from-teal-800 via-sky-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl font-bold mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(
              'join-network-title',
              'Join Rhizome Network',
              'انضم إلى شبكة رايزوم'
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl text-sky-100 mb-8 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(
              'join-network-subtitle',
              'Register your organization to collaborate with our community.',
              'سجل منظمتك للتعاون مع مجتمعنا.'
            )}
          </motion.p>
          <OrgRegistrationForms />
        </div>
      </section>
    </div>
  );
};

export default JoinPage;
