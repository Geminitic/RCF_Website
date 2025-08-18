import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Globe, BookOpen } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LazyImage from '../common/LazyImage';

const OurPillars: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const isArabic = currentLanguage.code === 'ar';

  const pillars = [
    {
      title: t(
        'pillar-education-title',
        'Education & Knowledge',
        'التعليم والمعرفة'
      ),
      description: t(
        'pillar-education-desc',
        'Supporting educational initiatives and knowledge sharing across communities.',
        'دعم المبادرات التعليمية وتبادل المعرفة بين المجتمعات.'
      ),
      icon: <BookOpen className="h-8 w-8" />,
      image: '/assets/pillars/education.jpeg',
    },
    {
      title: t('pillar-health-title', 'Health & Wellbeing', 'الصحة والعافية'),
      description: t(
        'pillar-health-desc',
        'Promoting community health initiatives and access to essential services.',
        'تعزيز مبادرات الصحة المجتمعية وتوفير الوصول للخدمات الأساسية.'
      ),
      icon: <Heart className="h-8 w-8" />,
      image: '/assets/pillars/health.jpeg',
    },
    {
      title: t('pillar-community-title', 'Community Building', 'بناء المجتمع'),
      description: t(
        'pillar-community-desc',
        'Strengthening social bonds and resilience through collaborative initiatives.',
        'تعزيز الروابط الاجتماعية والمرونة من خلال المبادرات التعاونية.'
      ),
      icon: <Globe className="h-8 w-8" />,
      image: '/assets/pillars/community.jpeg',
    },
    {
      title: t(
        'pillar-innovation-title',
        'Innovation & Research',
        'الابتكار والبحث'
      ),
      description: t(
        'pillar-innovation-desc',
        'Developing creative solutions to complex challenges through research and technology.',
        'تطوير حلول إبداعية للتحديات المعقدة من خلال البحث والتكنولوجيا.'
      ),
      icon: <Lightbulb className="h-8 w-8" />,
      image: '/assets/pillars/innovation.jpeg',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-gr">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center gr-mb-xl ${isArabic ? 'rtl' : 'ltr'}`}
        >
          <h2
            className={`gr-text-xl md:text-5xl font-bold heading-2 gr-mb-md ${isArabic ? 'font-arabic' : ''}`}
            style={{
              fontFamily: 'var(--rs-font-heading)',
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {t('our-pillars-title', 'Our Focus Areas', 'مجالات تركيزنا')}
          </h2>
          <p
            className={`max-w-3xl mx-auto gr-text-base md:text-xl body ${isArabic ? 'font-arabic text-right' : 'text-left'}`}
            style={{ direction: isArabic ? 'rtl' : 'ltr' }}
          >
            {t(
              'our-pillars-description',
              'These are the key areas where we focus our efforts to create meaningful impact.',
              'هذه هي المجالات الرئيسية التي نركز فيها جهودنا لإحداث تأثير ذو معنى.'
            )}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-8px] duration-300"
            >
              <div className="h-56 overflow-hidden">
                <LazyImage
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <div className="p-6">
                <div
                  className={`flex items-center mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--rs-primary-purple)] bg-opacity-15 text-[var(--rs-primary-purple)]">
                    {pillar.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold ${isArabic ? 'mr-4' : 'ml-4'}`}
                    style={{ fontFamily: 'var(--rs-font-heading)' }}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-700">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPillars;
