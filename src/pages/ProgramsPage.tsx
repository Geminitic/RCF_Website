import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProgramsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('programs-title', 'Transformative Initiatives', 'مبادرات تحويلية')}
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-4xl mx-auto">
              {t(
                'programs-subtitle',
                'Bridging Syrian communities across Syria and Canada through grassroots innovation, cultural exchange, and collaborative leadership. Our cross-border partnership delivers transformative programs that amplify local voices and diaspora expertise.',
                'نربط المجتمعات السورية عبر سوريا وكندا من خلال الابتكار الشعبي والتبادل الثقافي والقيادة التشاركية. شراكتنا عبر الحدود تقدم برامج تحويلية تضخم الأصوات المحلية وخبرات الشتات.'
              )}
            </p>

            <p className="text-xl text-emerald-100 mb-8 max-w-4xl mx-auto">
              {t(
                'programs-coming-soon',
                'Program information is coming soon.',
                'سيتم توفير معلومات البرامج قريبًا.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('join-network-title', 'Join Our Network', 'انضم إلى شبكتنا')}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {t(
                'join-network-description',
                'Whether in Syria or Canada, your participation helps us grow resilient, empowered communities.',
                'سواء في سوريا أو كندا، مشاركتك تساعدنا في نمو مجتمعات مرنة وممكنة.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors">
                {t('apply-now', 'Apply Now', 'تقدم الآن')}
              </button>
              <button className="px-8 py-4 bg-emerald-800 text-white font-semibold rounded-full hover:bg-emerald-900 transition-colors">
                {t('volunteer', 'Volunteer', 'تطوع')}
              </button>
            </div>
            <div className="mt-6 text-emerald-200">
              <p>
                {t('contact-programs', 'Contact:', 'اتصل:')} info@rhizomsyria.org | info@rhiozmefoundation.ca
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;