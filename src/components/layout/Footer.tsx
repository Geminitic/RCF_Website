import React from 'react';
import { motion } from 'framer-motion';
import { Network, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Network className="h-6 w-6 text-green-400" />
              <h3 className={`text-lg font-semibold ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer-title', 'Rhizome Community Foundation', 'مؤسسة ريزوم المجتمعية')}
              </h3>
            </div>
            <p className={`text-gray-300 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
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
            <h4 className={`font-semibold ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('quick-links', 'Quick Access', 'روابط سريعة')}
            </h4>
                        <ul className="space-y-2">
              {[
                { key: 'knowledge', path: '/knowledge-hub', en: 'Knowledge Hub', ar: 'مركز المعرفة' },
                { key: 'calendar', path: '/calendar', en: 'Event Calendar', ar: 'رزنامة الفعاليات' },
                { key: 'join', path: '/contact', en: 'Join Our Network', ar: 'انضم لشبكتنا' },
                { key: 'contact', path: '/contact', en: 'Contact Us', ar: 'اتصل بنا' }
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className={`text-gray-300 hover:text-white transition-colors ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
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
            <h4 className={`font-semibold ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('contact-info', 'Contact Information', 'معلومات الاتصال')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">info@rhizomefoundation.ca</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <div className={`text-gray-300 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  <p>Rhizome Canada: 2028 157 St S.W T6W 5ER Edmonton, Canada</p>
                  <p>Rhizome Syria: Latakia Sheikh Daher Square, 1st floor facing Saladin bookstore</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center space-y-2">
          <p className={`text-yellow-400 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t(
              'experimental-release',
              'This website is an experimental release. Content may change.',
              'هذا الموقع إصدار تجريبي والمحتوى قابل للتغيير.'
            )}
          </p>
          <p className={`text-gray-400 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t(
              'copyright',
              '© 2024 Rhizome Community Foundation. All rights reserved.',
              '© 2024 مؤسسة ريزوم المجتمعية. جميع الحقوق محفوظة.'
            )}
          </p>
          <p className={`text-gray-400 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t(
              'acknowledgment',
              'Acknowledgment: We respectfully acknowledge our work takes place on traditional Indigenous territories in Canada and globally, and commit to building relationships grounded in respect, reciprocity, and justice.',
              'نُقِرُّ باحترام بأن عملنا يتم على أراضٍ تقليدية للشعوب الأصيلة في كندا وحول العالم، ونتعهد ببناء علاقات قائمة على الاحترام والتبادل والعدالة.'
            )}
          </p>
          <p className={`text-gray-400 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t(
              'legal-information',
              'Legal Information: Rhizome Community Foundation is federally incorporated under the Canada Not-for-profit Corporations Act. Corporation Number: 1672383-7.',
              'المعلومات القانونية: مؤسسة ريزوم المجتمعية مسجلة اتحاديًا بموجب قانون المؤسسات غير الربحية الكندي. رقم المؤسسة: 1672383-7.'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;