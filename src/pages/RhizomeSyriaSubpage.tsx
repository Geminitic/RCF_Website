import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, Globe, Heart, Star, Award, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/rhizome-syria.css';

const RhizomeSyriaSubpage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const programs = Array.from({ length: 3 }, (_, i) => ({
    id: String(i + 1),
    title: '',
    titleAr: '',
    description: '',
    descriptionAr: '',
    participants: 0,
    location: '',
    locationAr: '',
    icon: [Globe, Heart, Star][i],
    gradient: ['var(--rs-gradient-primary)', 'var(--rs-gradient-warm)', 'var(--rs-gradient-cool)'][i]
  }));

  const achievements = [
    {
      number: '1,200+',
      label: 'Stories Documented',
      labelAr: 'قصة موثقة',
      icon: Heart
    },
    {
      number: '15',
      label: 'Initiatives Launched',
      labelAr: 'مبادرة أُطلقت',
      icon: Target
    },
    {
      number: '8',
      label: 'Cities Served',
      labelAr: 'مدن مخدومة',
      icon: MapPin
    },
    {
      number: '500+',
      label: 'Volunteers',
      labelAr: 'متطوع',
      icon: Users
    }
  ];

  return (
    <div className="rhizome-syria min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      {/* Hero Section with Syrian Logo Integration */}
      <section className="rs-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-orange-600/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo Integration */}
            <div className="rs-logo-container justify-center mb-8">
              <img 
                src="/public/20250629_1822_Gradient Logo Design_remix_01jyz38q10e56bpwt8s4ypzwhj.png" 
                alt="Rhizome Syria Logo" 
                className="h-20 w-auto"
              />
            </div>
            
            <h1 className={`rs-heading-1 mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t('rhizome-syria-title', 'Rhizome Syria', 'ريزوم سوريا')}
            </h1>
            
            <p className={`rs-body-large text-white/90 max-w-4xl mx-auto mb-8 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t(
                'syria-hero-description',
                'Building resilient communities through cultural preservation, feminist organizing, and grassroots empowerment across Syria.',
                'بناء مجتمعات مرنة من خلال الحفاظ على الثقافة والتنظيم النسوي والتمكين الشعبي في جميع أنحاء سوريا.'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rs-button-primary">
                {t('explore-programs', 'Explore Programs', 'استكشف البرامج')}
              </button>
              <button className="rs-button-secondary bg-white/20 border-white/50 text-white hover:bg-white hover:text-purple-600">
                {t('join-network', 'Join Our Network', 'انضم إلى شبكتنا')}
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Cultural Pattern Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 opacity-30" />
      </section>

      {/* Programs Section */}
      <section className="rs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`rs-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t('our-programs', 'Our Programs', 'برامجنا')}
            </h2>
            <p className={`rs-body-large max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t(
                'programs-description',
                'Comprehensive initiatives designed to strengthen communities and preserve Syrian heritage.',
                'مبادرات شاملة مصممة لتقوية المجتمعات والحفاظ على التراث السوري.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="rs-card rs-fade-in group"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
                    style={{ background: program.gradient }}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className={`rs-heading-3 mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                    {t(`program-${index}-title`, program.title, program.titleAr)}
                  </h3>
                  
                  <p className={`rs-body mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                    {t(`program-${index}-desc`, program.description, program.descriptionAr)}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'rs-arabic' : ''}>
                        {t(`program-${index}-location`, program.location, program.locationAr)}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{program.participants} {t('participants', 'participants', 'مشارك')}</span>
                    </div>
                  </div>
                  
                  <button className="rs-button-primary w-full mt-6 group-hover:scale-105 transition-transform">
                    {t('learn-more', 'Learn More', 'اعرف المزيد')}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="rs-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`rs-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t('our-impact', 'Our Impact', 'تأثيرنا')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center rs-scale-in"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {achievement.number}
                  </div>
                  
                  <div className={`rs-caption ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                    {t(`achievement-${index}`, achievement.label, achievement.labelAr)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="rs-section rs-pattern-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`rs-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                {t('cultural-heritage', 'Preserving Our Heritage', 'الحفاظ على تراثنا')}
              </h2>
              
              <p className={`rs-body-large mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                {t(
                  'heritage-description',
                  'Through digital storytelling and community-led documentation, we preserve the rich cultural tapestry of Syria for future generations.',
                  'من خلال السرد الرقمي والتوثيق بقيادة المجتمع، نحافظ على النسيج الثقافي الغني لسوريا للأجيال القادمة.'
                )}
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Oral History Collection', labelAr: 'جمع التاريخ الشفوي' },
                  { label: 'Cultural Events', labelAr: 'الفعاليات الثقافية' },
                  { label: 'Digital Archives', labelAr: 'الأرشيف الرقمي' },
                  { label: 'Community Storytelling', labelAr: 'السرد المجتمعي' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3" />
                    <span className={`rs-body ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                      {t(`heritage-item-${index}`, item.label, item.labelAr)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-64 rounded-2xl shadow-2xl bg-stone-200 flex items-center justify-center">
                <span className="text-stone-500 text-sm">
                  {t('image-placeholder', 'Image pending', 'لا توجد صورة')}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rs-hero">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`rs-heading-2 text-white mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t('join-movement', 'Join Our Movement', 'انضم إلى حركتنا')}
            </h2>
            
            <p className={`rs-body-large text-white/90 max-w-3xl mx-auto mb-8 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t(
                'join-description',
                'Be part of building resilient communities and preserving Syrian heritage for future generations.',
                'كن جزءاً من بناء مجتمعات مرنة والحفاظ على التراث السوري للأجيال القادمة.'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rs-button-primary bg-white text-purple-600 hover:bg-gray-100">
                {t('get-involved', 'Get Involved', 'شارك معنا')}
              </button>
              <button className="rs-button-secondary border-white text-white hover:bg-white hover:text-purple-600">
                {t('learn-more', 'Learn More', 'اعرف المزيد')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RhizomeSyriaSubpage;