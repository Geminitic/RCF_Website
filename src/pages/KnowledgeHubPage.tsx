import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const KnowledgeHubPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50">
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            {t('knowledge-hub-title', 'Knowledge Hub', 'مركز المعرفة')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            {t(
              'knowledge-hub-subtitle',
              'Explore resources, case studies, and tools powering rhizomatic change across our network.',
              'اكتشف الموارد ودراسات الحالة والأدوات التي تدعم التغيير الريزومي عبر شبكتنا.'
            )}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <BookOpen className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
            <p className="text-lg text-stone-700 mb-6">
              {t(
                'knowledge-hub-body',
                'This evolving library begins with our foundational documents and will grow as the community adds new insights and translations.',
                'تبدأ هذه المكتبة المتطورة بوثائقنا التأسيسية وستنمو مع إضافة المجتمع لرؤى وترجمات جديدة.'
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <span className="mr-2">
                {t('contribute-resource', 'Contribute a Resource', 'ساهم بمورد')}
              </span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeHubPage;
