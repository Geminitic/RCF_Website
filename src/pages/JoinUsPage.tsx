import React from 'react';
import { motion } from 'framer-motion';
import OrgRegistrationForms from '../components/common/OrgRegistrationForms';
import { useLanguage } from '../contexts/LanguageContext';

const JoinUsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-on-surface pt-24 pb-16">
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-tertiary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className={`text-xl text-on-primary mb-8 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(
              'join-network-subtitle',
              'Register your organization to collaborate with our community.',
              'سجل منظمتك للتعاون مع مجتمعنا.'
            )}
          </motion.p>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <OrgRegistrationForms />
      </div>
    </div>
  );
};

export default JoinUsPage;
