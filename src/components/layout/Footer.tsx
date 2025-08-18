import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-[var(--rs-deep-blue)] via-[var(--rs-primary-purple)] to-[var(--rs-primary-blue)] text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/20250710_0555_Rhizome Logo Design_remix_01jzt2tem6e8zse9br715pa28n (2).png"
                alt="Rhizome Community Foundation Logo"
                className="h-12 w-auto"
              />
              <h3
                className={`text-lg font-semibold ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                {t(
                  'footer-title',
                  'Rhizome Community Foundation',
                  'مؤسسة رايزوم المجتمعية'
                )}
              </h3>
            </div>
            <p
              className={`text-white/80 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
            >
              {t(
                'footer-description',
                'Building collaborative networks for civil society.',
                'نبني شبكات تعاونية للمجتمع المدني.'
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4
              className={`font-semibold ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
            >
              {t('quick-links', 'Quick Access', 'روابط سريعة')}
            </h4>
            <ul className="space-y-2">
              {[
                {
                  key: 'knowledge',
                  path: '/knowledge-hub',
                  en: 'Knowledge Hub',
                  ar: 'مركز المعرفة',
                },
                {
                  key: 'calendar',
                  path: '/calendar',
                  en: 'Event Calendar',
                  ar: 'رزنامة الفعاليات',
                },
                /* Interactive tab removed as requested
                {
                  key: 'interactive',
                  path: '/interactive',
                  en: 'Interactive',
                  ar: 'تفاعلي',
                },
                */
                {
                  key: 'join',
                  path: '/join',
                  en: 'Join Our Network',
                  ar: 'انضم لشبكتنا',
                },
                {
                  key: 'contact',
                  path: '/contact',
                  en: 'Contact Us',
                  ar: 'اتصل بنا',
                },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className={`text-white/70 hover:text-white transition-colors ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {t(`footer-link-${link.key}`, link.en, link.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4
              className={`font-semibold ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
            >
              {t('contact-info', 'Contact Information', 'معلومات الاتصال')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-white/80">info@rhizomefoundation.ca</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white/80 mt-1" />
                <div
                  className={`text-white/80 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                >
                  <p>
                    Rhizome Canada: 2028 157 St S.W T6W 5ER Edmonton, Canada
                  </p>
                  <p>
                    Rhizome Syria: Latakia Sheikh Daher Square, 1st floor facing
                    Saladin bookstore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center space-y-2">
          <p
            className={`text-white/70 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(
              'copyright',
              '© 2024 Rhizome Community Foundation. All rights reserved.',
              '© 2024 مؤسسة رايزوم المجتمعية. جميع الحقوق محفوظة.'
            )}
          </p>
          <p
            className={`text-white/70 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(
              'acknowledgment',
              'Acknowledgment: We respectfully acknowledge our work takes place on traditional Indigenous territories in Canada and globally, and commit to building relationships grounded in respect, reciprocity, and justice.',
              'نُقِرُّ باحترام بأن عملنا يتم على أراضٍ تقليدية للشعوب الأصيلة في كندا وحول العالم، ونتعهد ببناء علاقات قائمة على الاحترام والتبادل والعدالة.'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
