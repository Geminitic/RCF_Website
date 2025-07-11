import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Palette, 
  Users, 
  Laptop, 
  Heart, 
  Globe,
  Filter,
  MapPin,
  Calendar,
  Target,
  ArrowRight,
  Camera,
  Shield,
  Handshake
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProgramsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', en: 'All Programs', ar: 'جميع البرامج', icon: Globe },
    { key: 'syria', en: 'In Syria & Region', ar: 'في سوريا والمنطقة', icon: MapPin },
    { key: 'canada', en: 'In Canada', ar: 'في كندا', icon: Heart },
    { key: 'cross-border', en: 'Cross-Border', ar: 'عبر الحدود', icon: Handshake }
  ];

const programs = Array.from({ length: 9 }, (_, i) => ({
  id: String(i + 1),
  title: '',
  titleAr: '',
  category: i < 6 ? 'syria' : 'canada',
  description: '',
  descriptionAr: '',
  location: '',
  locationAr: '',
  participants: 0,
  duration: '',
  durationAr: '',
  status: '',
  impact: '',
  impactAr: '',
  image: '',
  features: [],
  featuresAr: []
}));

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const stats = [
    { label: 'Active Programs', labelAr: 'برامج نشطة', value: programs.filter(p => p.status === 'active').length },
    { label: 'Anticipated Participants', labelAr: 'المشاركون المتوقعون', value: 5000 },
    { label: 'Countries', labelAr: 'دولة', value: 2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('programs-title', 'Transformative Initiatives', 'مبادرات تحويلية')}
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-4xl mx-auto">
              {t(
                'programs-subtitle',
                'Bridging Syrian communities across Syria and Canada through grassroots innovation, cultural exchange, and collaborative leadership. Our cross-border partnership delivers transformative programs that amplify local voices and diaspora expertise.',
                'نربط المجتمعات السورية عبر سوريا وكندا من خلال الابتكار الشعبي والتبادل الثقافي والقيادة التشاركية. شراكتنا عبر الحدود تقدم برامج تحويلية تضخم الأصوات المحلية وخبرات الشتات.'
              )}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm text-emerald-200 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`stat-${index}`, stat.label, stat.labelAr)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold text-stone-900 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('filter-programs', 'Filter Programs', 'تصفية البرامج')}
            </h2>
            <div className="flex items-center text-stone-600">
              <Filter className="h-5 w-5 mr-2" />
              <span>{filteredPrograms.length} {t('programs-found', 'programs found', 'برنامج موجود')}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  } ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {t(`category-${category.key}`, category.en, category.ar)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={t('program-title', program.title, program.titleAr)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : program.status === 'planned'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {t(`status-${program.status}`, program.status, program.status)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.category === 'syria' 
                        ? 'bg-emerald-100 text-emerald-800'
                        : program.category === 'canada'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {t(`category-${program.category}`, 
                        program.category === 'syria' ? 'Syria' : 
                        program.category === 'canada' ? 'Canada' : 'Cross-Border',
                        program.category === 'syria' ? 'سوريا' : 
                        program.category === 'canada' ? 'كندا' : 'عبر الحدود'
                      )}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold text-stone-900 mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('program-title', program.title, program.titleAr)}
                  </h3>

                  <p className={`text-stone-600 mb-4 line-clamp-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('program-description', program.description, program.descriptionAr)}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-stone-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                        {t('program-location', program.location, program.locationAr)}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-stone-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                        {t('program-duration', program.duration, program.durationAr)}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-stone-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{program.participants} {t('participants', 'participants', 'مشارك')}</span>
                    </div>

                    <div className="flex items-center text-sm text-emerald-600">
                      <Target className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                        {t('program-impact', program.impact, program.impactAr)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold text-stone-900 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('key-features', 'Key Features:', 'الميزات الرئيسية:')}
                    </h4>
                    <ul className="space-y-1">
                      {program.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className={`text-sm text-stone-600 flex items-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                          {currentLanguage.code === 'ar' ? program.featuresAr[featureIndex] : feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors group">
                    <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                      {t('learn-more', 'Learn More', 'اعرف المزيد')}
                    </span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('join-network-title', 'Join Our Network', 'انضم إلى شبكتنا')}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {t(
                'join-network-description',
                'Whether in Syria or Canada, your participation helps us grow resilient, empowered communities.',
                'سواء في سوريا أو كندا، مشاركتك تساعدنا في نمو مجتمعات مرنة وممكنة.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors">
                {t('apply-now', 'Apply Now', 'تقدم الآن')}
              </button>
              <button className="px-8 py-4 bg-emerald-800 text-white font-semibold rounded-full hover:bg-emerald-900 transition-colors">
                {t('volunteer', 'Volunteer', 'تطوع')}
              </button>
            </div>
            <div className="mt-6 text-emerald-200">
              <p>
                {t('contact-programs', 'Contact:', 'اتصل:')} info@rhizomsyria.org | info@rhiozmefoundation.ca
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;