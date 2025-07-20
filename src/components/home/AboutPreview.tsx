import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import ProbabilityCloud from '../common/ProbabilityCloud';

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
                'At the Rhizome Community Foundation, we believe in the power of communities to craft their own solutions. Like our namesake, we spread horizontally, creating resilient networks that adapt, grow, and thrive even in challenging environments. We work to alleviate poverty, advance education, and promote health through community-centered approaches that honor local wisdom and build sustainable pathways to wellbeing.',
                'في مؤسسة ريزوم المجتمعية نؤمن بقدرة المجتمعات على ابتكار حلولها الخاصة. مثل نبتة الريزوم، نتمدّد أفقياً لننشئ شبكات مرنة تتكيف وتنمو رغم الظروف الصعبة. نعمل على تخفيف الفقر وتعزيز التعليم والصحة من خلال أساليب مجتمعية تحترم المعرفة المحلية وتبني مسارات مستدامة للعافية.'
              )}
            </p>


            <ProbabilityCloud to="/about">
              <span>{t('learn-more', 'Explore Our Story', 'اكتشف قصتنا')}</span>
              <ArrowRight className="h-5 w-5" />
            </ProbabilityCloud>

            <div className="mt-4">
              <ProbabilityCloud to="/knowledge-hub">
                {t('browse-knowledge-hub', 'Browse Knowledge Hub', 'تصفح مركز المعرفة')}
              </ProbabilityCloud>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutPreview;