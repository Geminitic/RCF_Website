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
              alt="Aleppo, Syria" 
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
                'Rhizome Syria gathers the vibrant voices of civil society into a decentralized network. We believe sustainable growth comes from interwoven, community-led pathways that adapt in every circumstance.',
                'يجمع ريزوم سوريا الأصوات النابضة في المجتمع المدني بشبكة لامركزية. نؤمن بأن النمو المستدام يأتي من مسارات مجتمعية متداخلة قادرة على التكيف في كل الظروف.'
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;