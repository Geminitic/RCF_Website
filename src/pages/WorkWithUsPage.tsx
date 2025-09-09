import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WorkWithUsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const pageTitle = t('work-with-us-title', 'Work With Us', 'اعمل معنا');
  const pageSubtitle = t(
    'work-with-us-subtitle',
    'Join our mission to build resilient communities.',
    'انضم إلى مهمتنا لبناء مجتمعات قادرة على الصمود.'
  );

  const sections = [
    {
      icon: Briefcase,
      title: t('open-positions', 'Open Positions', 'الوظائف الشاغرة'),
      text: t(
        'open-positions-text',
        'We currently have no open positions, but we are always interested in hearing from passionate individuals. Check back soon for updates.',
        'ليس لدينا حاليًا أي وظائف شاغرة، لكننا مهتمون دائمًا بالاستماع إلى الأفراد الشغوفين. تحقق مرة أخرى قريبًا للحصول على التحديثات.'
      ),
    },
    {
      icon: Building,
      title: t('our-culture', 'Our Culture', 'ثقافتنا'),
      text: t(
        'our-culture-text',
        'We foster a collaborative, inclusive, and innovative environment. Our team is driven by a shared commitment to social impact and grassroots empowerment.',
        'نحن نعزز بيئة تعاونية وشاملة ومبتكرة. فريقنا مدفوع بالتزام مشترك بالتأثير الاجتماعي وتمكين القواعد الشعبية.'
      ),
    },
    {
      icon: Users,
      title: t('volunteering', 'Volunteering', 'التطوع'),
      text: t(
        'volunteering-text',
        "Interested in volunteering? We occasionally have opportunities for volunteers to support our projects and events. Please contact us with your interests and skills.",
        'هل أنت مهتم بالتطوع؟ لدينا أحيانًا فرص للمتطوعين لدعم مشاريعنا وفعالياتنا. يرجى الاتصال بنا مع اهتماماتك ومهاراتك.'
      ),
    },
  ];

  return (
    <div className="bg-background text-on-surface pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Hero Section */}
        <section className="text-center py-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {pageTitle}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className={`text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {pageSubtitle}
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-8 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-container p-4 rounded-full">
                    <section.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-2 text-on-surface ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {section.title}
                </h3>
                <p className={`text-on-surface-variant ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default WorkWithUsPage;
