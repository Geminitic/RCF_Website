import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Heart, Handshake, MapPin, Calendar, Award, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ImpactStats: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
            {t('impact-title', 'Creating Ripples of Change', 'نخلق موجات من التغيير')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-stone-600 mb-8">
              {t(
                'impact-narrative',
                'We weave connections that transcend borders, uniting communities through shared heritage and collective hope. Our grassroots approach creates spaces where Syrian voices flourish, traditional wisdom meets innovation, and individual stories become powerful narratives of resilience and renewal.',
                'ننسج روابط تتجاوز الحدود، نوحد المجتمعات من خلال التراث المشترك والأمل الجماعي. نهجنا الشعبي ينشئ مساحات تزدهر فيها الأصوات السورية، حيث تلتقي الحكمة التقليدية بالابتكار، وتصبح القصص الفردية سرديات قوية للمرونة والتجديد.'
              )}
            </p>
            <p className="text-lg text-stone-600">
              {t(
                'impact-narrative-2',
                'Each initiative we launch, every partnership we cultivate, and every story we preserve builds an ecosystem of empowerment that strengthens communities from within. Our success lives in renewed belonging, preserved traditions, acquired skills, and lasting connections that span continents.',
                'كل مبادرة نطلقها، وكل شراكة نرعاها، وكل قصة نحافظ عليها تبني نظاماً بيئياً للتمكين يقوي المجتمعات من الداخل. نجاحنا يكمن في الانتماء المتجدد والتقاليد المحفوظة والمهارات المكتسبة والروابط الدائمة التي تمتد عبر القارات.'
              )}
            </p>
          </div>
        </motion.div>

        {/* Narrative Impact Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('growing-network', 'Expanding Horizons', 'آفاق متوسعة')}
            </h3>
            <p className={`text-emerald-100 mb-8 max-w-3xl mx-auto text-lg ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'network-description',
                'Each day brings new voices to our movement, strengthening the bonds that connect communities and amplify our collective impact.',
                'كل يوم يجلب أصواتاً جديدة لحراكنا، يقوي الروابط التي تصل المجتمعات ويضخم تأثيرنا الجماعي.'
              )}
            </p>
          </div>

          {/* Narrative Impact Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h4 className={`font-semibold mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('community-reach', 'Community Reach', 'الوصول المجتمعي')}
              </h4>
              <p className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t(
                  'community-reach-desc',
                  'Our initiatives have touched countless lives, fostering growth and resilience across diverse communities.',
                  'لقد لمست مبادراتنا حياة لا تحصى، وعززت النمو والمرونة عبر مجتمعات متنوعة.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <Globe className="h-8 w-8 mx-auto mb-3" />
              <h4 className={`font-semibold mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('global-connections', 'Global Connections', 'الروابط العالمية')}
              </h4>
              <p className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t(
                  'global-connections-desc',
                  'We connect individuals and organizations across continents, building a truly global network of support.',
                  'نربط الأفراد والمنظمات عبر القارات، ونبني شبكة دعم عالمية حقيقية.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <Heart className="h-8 w-8 mx-auto mb-3" />
              <h4 className={`font-semibold mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('community-empowerment', 'Community Empowerment', 'تمكين المجتمع')}
              </h4>
              <p className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t(
                  'community-empowerment-desc',
                  'Through dedicated projects and strong partnerships, we empower communities to drive their own positive change.',
                  'من خلال المشاريع المكرسة والشراكات القوية، نمكن المجتمعات من قيادة تغييرها الإيجابي.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <Target className="h-8 w-8 mx-auto mb-3" />
              <h4 className={`font-semibold mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('tangible-impact', 'Tangible Impact', 'التأثير الملموس')}
              </h4>
              <p className={`text-emerald-200 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t(
                  'tangible-impact-desc',
                  'Our efforts lead to tangible improvements in daily lives, from skill development to cultural preservation.',
                  'تؤدي جهودنا إلى تحسينات ملموسة في الحياة اليومية، من تطوير المهارات إلى الحفاظ على الثقافة.'
                )}
              </p>
            </motion.div>
          </div>

          {/* Additional Narrative Elements */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <MapPin className="h-6 w-6 mx-auto mb-2" />
              <h5 className={`font-semibold text-sm mb-1 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('geographic-reach', 'Geographic Reach', 'الوصول الجغرافي')}
              </h5>
              <p className={`text-emerald-200 text-xs ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('spanning-continents', 'Spanning continents and cultures', 'تمتد عبر القارات والثقافات')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <Calendar className="h-6 w-6 mx-auto mb-2" />
              <h5 className={`font-semibold text-sm mb-1 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('ongoing-commitment', 'Ongoing Commitment', 'الالتزام المستمر')}
              </h5>
              <p className={`text-emerald-200 text-xs ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('year-round-engagement', 'Year-round community engagement', 'مشاركة مجتمعية على مدار السنة')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <Award className="h-6 w-6 mx-auto mb-2" />
              <h5 className={`font-semibold text-sm mb-1 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('recognition', 'Recognition', 'الاعتراف')}
              </h5>
              <p className={`text-emerald-200 text-xs ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('community-acknowledged-impact', 'Community-acknowledged impact', 'تأثير معترف به من المجتمع')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <Handshake className="h-6 w-6 mx-auto mb-2" />
              <h5 className={`font-semibold text-sm mb-1 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('collaborative-spirit', 'Collaborative Spirit', 'الروح التعاونية')}
              </h5>
              <p className={`text-emerald-200 text-xs ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('building-lasting-partnerships', 'Building lasting partnerships', 'بناء شراكات دائمة')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;