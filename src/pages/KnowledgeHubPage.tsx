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

      <section className="py-20 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              {t('foundational-resources', 'Foundational Resources', 'الموارد الأساسية')}
            </h2>
            <p className="text-lg text-stone-700 mb-6">
              {t(
                'foundational-text',
                'Start with our introduction to rhizomatic organization and the principles that guide all our projects.',
                'ابدأ بمقدمة حول التنظيم الريزومي والمبادئ التي توجه جميع مشاريعنا.'
              )}
            </p>
            <ul className="space-y-2 list-disc list-inside mb-8 text-stone-700">
              <li>
                {t('resource-rhizome', 'What is a Rhizomatic Organization?', 'ما هي المنظمة الريزومية؟')}
              </li>
              <li>
                {t('resource-principles', 'Core Principles: distributed intelligence, resilience, generative relationships, evolving purpose, stewardship ethos.',
                    'المبادئ الأساسية: الذكاء الموزع، والمرونة، والعلاقات التوليدية، والغاية المتطورة، وأخلاقيات الرعاية.')}
              </li>
              <li>
                {t('resource-roadmap', 'Implementation Roadmap from seeding to flowering.', 'خريطة التنفيذ من البذر إلى الإزهار.')}
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              {t('info-architecture', 'Knowledge Hub Architecture', 'بنية مركز المعرفة')}
            </h2>
            <p className="text-lg text-stone-700 mb-6">
              {t(
                'architecture-text',
                'Our hub grows through linked nodes that can spawn further documents and discussions.',
                'ينمو مركزنا من خلال عقد مترابطة يمكنها إنشاء مستندات ومناقشات إضافية.'
              )}
            </p>
            <ul className="space-y-2 list-disc list-inside mb-8 text-stone-700">
              <li>{t('nav-home', 'Home / The Rhizome', 'الرئيسية / الريزوم')}</li>
              <li>{t('nav-principles', 'Principles', 'المبادئ')}</li>
              <li>{t('nav-projects', 'Projects & Pods', 'المشاريع والوحدات')}</li>
              <li>{t('nav-commons', 'Knowledge Commons', 'مركز الموارد')}</li>
              <li>{t('nav-community', 'Community', 'المجتمع')}</li>
              <li>{t('nav-map', 'Hub Map', 'خريطة المركز')}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              {t('seed-plan', 'Seed Content Plan', 'خطة المحتوى الأولية')}
            </h2>
            <p className="text-lg text-stone-700 mb-6">
              {t(
                'seed-text',
                'Over the first eight weeks we will publish a new "shoot" every week to demonstrate rhizomatic growth.',
                'خلال الأسابيع الثمانية الأولى سننشر "براعم" جديدة كل أسبوع لإظهار النمو الريزومي.'
              )}
            </p>
            <ul className="space-y-2 list-decimal list-inside text-stone-700">
              <li>{t('week1', 'Week 1: Rhizomatic Formation article and Hallepian Roots project page.', 'الأسبوع 1: مقالة التشكّل الريزومي وصفحة مشروع جذور حلبية.')}</li>
              <li>{t('week2', 'Week 2: Advanced Proposal Structuring and a 30-term glossary.', 'الأسبوع 2: هيكلة المقترحات المتقدمة ومعجم من 30 مصطلحاً.')}</li>
              <li>{t('week3', 'Week 3: Interactive Roadmap of phases 1‑4.', 'الأسبوع 3: خارطة طريق تفاعلية للمراحل 1‑4.')}</li>
              <li>{t('week4', 'Week 4: Volunteer Charter draft for الساحل teams.', 'الأسبوع 4: مسودة ميثاق المتطوعين لفرق الساحل.')}</li>
              <li>{t('week5', 'Week 5: Podcast Episode 1 with Teatro Aleppo.', 'الأسبوع 5: الحلقة الأولى من البودكاست مع مسرح حلب.')}</li>
              <li>{t('week6', 'Week 6: Toolkit on Consent Decision Councils.', 'الأسبوع 6: عدة عمل لمجالس اتخاذ القرار بالرضا.')}</li>
              <li>{t('week7', 'Week 7: Training deck on feminist Syrian strategy.', 'الأسبوع 7: عرض تدريبي حول الاستراتيجية النسوية السورية.')}</li>
              <li>{t('week8', 'Week 8: Case study of Mondragon co‑ops.', 'الأسبوع 8: دراسة حالة تعاونيات موندراغون.')}</li>
            </ul>
          </motion.div>
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
