import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LazyImage from '../common/LazyImage';

const AboutPreview: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-gr">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - New Aleppo aerial shot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <LazyImage
              src="/WhatsApp Image 2025-06-19 at 12.35.09 PM copy copy.jpeg"
              alt="Community collaboration"
              className="w-full h-auto rounded-xl shadow-xl"
            />

            {/* Decorative elements - Updated with RS colors */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--rs-primary-purple)] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--rs-primary-blue)] rounded-full opacity-30 animate-pulse" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2
              className="gr-text-xl font-bold heading-2 gr-mb-md"
              style={{ fontFamily: 'var(--rs-font-heading)' }}
            >
              {t('about-title', 'Our Purpose', 'رسالتنا')}
            </h2>

            <p className="gr-text-base body gr-mb-lg leading-relaxed">
              {t(
                'about-description',
                'At the Rhizome Community Foundation, we believe in the power of communities to craft their own solutions. Like our namesake, we spread horizontally, creating resilient networks that adapt, grow, and thrive even in challenging environments. We work to alleviate poverty, advance education, and promote health through community-centered approaches that honor local wisdom and build sustainable pathways to wellbeing.',
                'في مؤسسة رايزوم المجتمعية نؤمن بقدرة المجتمعات على ابتكار حلولها الخاصة. مثل نبتة الرايزوم، نتمدّد أفقياً لننشئ شبكات مرنة تتكيف وتنمو رغم الظروف الصعبة. نعمل على تخفيف الفقر وتعزيز التعليم والصحة من خلال أساليب مجتمعية تحترم المعرفة المحلية وتبني مسارات مستدامة للعافية.'
              )}
            </p>

            <Link
              to="/about"
              className="button-primary group inline-flex items-center"
            >
              <span className="mr-2">
                {t('learn-more', 'Explore Our Story', 'اكتشف قصتنا')}
              </span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/knowledge-hub"
              className="ml-4 button-secondary inline-flex items-center"
            >
              {t(
                'browse-knowledge-hub',
                'Browse Knowledge Hub',
                'تصفح مركز المعرفة'
              )}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutPreview;
