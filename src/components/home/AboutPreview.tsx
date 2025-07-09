import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutPreview: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - New Aleppo aerial shot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/WhatsApp Image 2025-06-19 at 12.35.09 PM copy copy.jpeg"
              alt="Community collaboration"
              className="w-full h-auto rounded-xl shadow-xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-stone-200 rounded-full opacity-30 animate-pulse" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
              {t('about-title', 'Our Purpose', 'رسالتنا')}
            </h2>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              {t(
                'about-description',
                'The Rhizome Community Foundation builds networks that connect civil society organizations. We support community-led development through resource sharing, capacity building, and collaborative platforms that strengthen local initiatives.',
                'تعمل مؤسسة ريزوم المجتمعية على بناء شبكات تربط منظمات المجتمع المدني. ندعم التنمية التي يقودها المجتمع عبر مشاركة الموارد وبناء القدرات ومنصات التعاون التي تعزز المبادرات المحلية.'
              )}
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">
                {t('learn-more', 'Explore Our Story', 'اكتشف قصتنا')}
              </span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/knowledge-hub"
              className="mt-4 inline-flex items-center px-6 py-3 bg-stone-200 text-stone-800 font-semibold rounded-lg hover:bg-stone-300 transition-all duration-300"
            >
              {t('browse-knowledge-hub', 'Browse Knowledge Hub', 'تصفح مركز المعرفة')}
            </Link>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">{t('recent-updates', 'Recent Updates', 'آخر المستجدات')}</h3>
              <ul className="list-disc list-inside text-stone-600 mb-4">
                <li>{t('update-1', 'Network expansion workshop completed', 'انتهاء ورشة توسيع الشبكة')}</li>
                <li>{t('update-2', 'New research publication available', 'نشر بحث جديد')}</li>
                <li>{t('update-3', 'Partner organization training series launched', 'إطلاق سلسلة تدريبات للشركاء')}</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">{t('quick-access', 'Quick Access', 'وصول سريع')}</h3>
              <ul className="list-disc list-inside text-stone-600">
                <li><Link to="/knowledge-hub" className="underline">{t('quick-knowledge', 'Knowledge Hub', 'مركز المعرفة')}</Link></li>
                <li><Link to="/calendar" className="underline">{t('quick-calendar', 'Event Calendar', 'تقويم الفعاليات')}</Link></li>
                <li><Link to="/contact" className="underline">{t('quick-join', 'Join Our Network', 'انضم لشبكتنا')}</Link></li>
                <li><Link to="/contact" className="underline">{t('quick-contact', 'Contact Us', 'اتصل بنا')}</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutPreview;