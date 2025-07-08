import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Palette, Users, Laptop, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProgramsPreview: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const programs = [
    {
      icon: Users,
      title: 'Cultural & Community Engagement',
      titleAr: 'المشاركة الثقافية والمجتمعية',
      description:
        'Artistic and cultural initiatives designed to foster community recovery, preserve heritage, and promote social unity.',
      descriptionAr:
        'مبادرات فنية وثقافية مصممة لتعزيز تعافي المجتمع والحفاظ على التراث وتعزيز الوحدة الاجتماعية.',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: Palette,
      title: 'Empowerment & Leadership',
      titleAr: 'التمكين والقيادة',
      description:
        'Community-driven initiatives facilitating economic collaboration and collective productivity through practical, sustainable programs.',
      descriptionAr:
        'مبادرات مجتمعية تسهل التعاون الاقتصادي والإنتاجية الجماعية من خلال برامج عملية ومستدامة.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: BookOpen,
      title: 'Data & Research Intelligence',
      titleAr: 'البيانات والذكاء البحثي',
      description:
        'Providing accurate, timely data for organizations and governments across Syria to support evidence-based decision-making and policy development.',
      descriptionAr:
        'توفير بيانات دقيقة وفي الوقت المناسب للمنظمات والحكومات في جميع أنحاء سوريا لدعم صنع القرار وتطوير السياسات القائمة على الأدلة.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Laptop,
      title: 'Digital Innovation & Advocacy',
      titleAr: 'الابتكار الرقمي والمناصرة',
      description:
        'Creating accessible online platforms that facilitate inclusive community discussions and democratic participation.',
      descriptionAr:
        'إنشاء منصات إلكترونية يسهل الوصول إليها تسهل المناقشات المجتمعية الشاملة والمشاركة الديمقراطية.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            {t('programs-title', 'Transformative Initiatives', 'مبادرات تحويلية')}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {t(
              'programs-description',
              'Innovative programs that bridge communities, amplify voices, and create lasting impact through education, culture, and collaborative action.',
              'برامج مبتكرة تربط المجتمعات وتضخم الأصوات وتخلق تأثيراً دائماً من خلال التعليم والثقافة والعمل التشاركي.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${program.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className={`text-xl font-bold text-stone-900 mb-3 text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(`program-${index}-title`, program.title, program.titleAr)}
                </h3>
                
                <p className={`text-stone-600 text-center leading-relaxed ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(`program-${index}-desc`, program.description, program.descriptionAr)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/programs"
            className="group inline-flex items-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">
              {t('view-all-programs', 'Explore All Initiatives', 'استكشف جميع المبادرات')}
            </span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsPreview;