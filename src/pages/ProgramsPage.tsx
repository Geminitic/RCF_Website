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

  const programs = [
    // Syria & Region Programs
    {
      id: '1',
      title: 'Digital Literacy & Media Empowerment',
      titleAr: 'محو الأمية الرقمية وتمكين الإعلام',
      category: 'syria',
      description: 'Workshops and online training empower Syrians—especially youth and women—with digital and media skills, countering misinformation and supporting civic engagement.',
      descriptionAr: 'ورش العمل والتدريب عبر الإنترنت تمكن السوريين - خاصة الشباب والنساء - بالمهارات الرقمية والإعلامية، ومواجهة المعلومات المضللة ودعم المشاركة المدنية.',
      location: 'Syria-wide, diaspora-supported',
      locationAr: 'في جميع أنحاء سوريا، بدعم من الشتات',
      participants: 450,
      duration: '12 weeks',
      durationAr: '12 أسبوعاً',
      status: 'active',
      impact: 'Significant improvement in digital skills',
      impactAr: 'تحسن كبير في المهارات الرقمية',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Digital skills training',
        'Media literacy',
        'Civic engagement',
        'Youth focus',
        'Women empowerment'
      ],
      featuresAr: [
        'تدريب المهارات الرقمية',
        'محو الأمية الإعلامية',
        'المشاركة المدنية',
        'التركيز على الشباب',
        'تمكين المرأة'
      ]
    },
    {
      id: '2',
      title: 'Cultural Heritage Documentation',
      titleAr: 'توثيق التراث الثقافي',
      category: 'syria',
      description: 'Preserving Syria\'s collective memory through oral histories, storytelling, and cultural revitalization events in Aleppo, Latakia, and beyond.',
      descriptionAr: 'الحفاظ على الذاكرة الجماعية السورية من خلال التواريخ الشفوية والسرد وأحداث إحياء الثقافة في حلب واللاذقية وما بعدها.',
      location: 'Aleppo, Latakia, Damascus',
      locationAr: 'حلب، اللاذقية، دمشق',
      participants: 320,
      duration: 'Ongoing',
      durationAr: 'مستمر',
      status: 'active',
      impact: '1,200+ stories documented',
      impactAr: 'أكثر من 1,200 قصة موثقة',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Oral history collection',
        'Cultural events',
        'Memory preservation',
        'Community storytelling',
        'Heritage documentation'
      ],
      featuresAr: [
        'جمع التاريخ الشفوي',
        'الفعاليات الثقافية',
        'الحفاظ على الذاكرة',
        'السرد المجتمعي',
        'توثيق التراث'
      ]
    },
    {
      id: '3',
      title: 'Youth Leadership Development',
      titleAr: 'تطوير القيادة الشبابية',
      category: 'syria',
      description: 'Volunteer-driven networks and leadership training help young Syrians rebuild their communities as innovators and peacebuilders.',
      descriptionAr: 'الشبكات المدفوعة بالمتطوعين والتدريب على القيادة تساعد الشباب السوري في إعادة بناء مجتمعاتهم كمبتكرين وبناة سلام.',
      location: 'Multiple cities',
      locationAr: 'مدن متعددة',
      participants: 180,
      duration: '6 months',
      durationAr: '6 أشهر',
      status: 'active',
      impact: 'Strong program completion rates',
      impactAr: 'معدلات إكمال قوية للبرنامج',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Leadership training',
        'Community rebuilding',
        'Innovation focus',
        'Peacebuilding',
        'Volunteer networks'
      ],
      featuresAr: [
        'تدريب القيادة',
        'إعادة بناء المجتمع',
        'التركيز على الابتكار',
        'بناء السلام',
        'شبكات المتطوعين'
      ]
    },
    {
      id: '4',
      title: 'Community Health Outreach',
      titleAr: 'التوعية الصحية المجتمعية',
      category: 'syria',
      description: 'Grassroots health education, psychosocial support, and trauma resilience initiatives led by local volunteers in conflict-affected areas.',
      descriptionAr: 'التثقيف الصحي الشعبي والدعم النفسي الاجتماعي ومبادرات مرونة الصدمات بقيادة المتطوعين المحليين في المناطق المتأثرة بالنزاع.',
      location: 'Conflict-affected areas',
      locationAr: 'المناطق المتأثرة بالنزاع',
      participants: 280,
      duration: 'Ongoing',
      durationAr: 'مستمر',
      status: 'active',
      impact: '2,500+ families served',
      impactAr: 'خدمت أكثر من 2,500 عائلة',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Health education',
        'Psychosocial support',
        'Trauma resilience',
        'Local volunteers',
        'Community-led'
      ],
      featuresAr: [
        'التثقيف الصحي',
        'الدعم النفسي الاجتماعي',
        'مرونة الصدمات',
        'المتطوعون المحليون',
        'بقيادة المجتمع'
      ]
    },
    {
      id: '5',
      title: 'Innovation Hub',
      titleAr: 'مركز الابتكار',
      category: 'syria',
      description: 'A collaborative center in Latakia supporting civil society, social entrepreneurs, and local initiatives with space, mentorship, and joint Canada-Syria management.',
      descriptionAr: 'مركز تعاوني في اللاذقية يدعم المجتمع المدني ورواد الأعمال الاجتماعيين والمبادرات المحلية بالمساحة والإرشاد والإدارة المشتركة بين كندا وسوريا.',
      location: 'Latakia, Syria',
      locationAr: 'اللاذقية، سوريا',
      participants: 120,
      duration: '12 months',
      durationAr: '12 شهراً',
      status: 'active',
      impact: '15 initiatives launched',
      impactAr: '15 مبادرة أُطلقت',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Civil society support',
        'Social entrepreneurship',
        'Mentorship programs',
        'Collaborative space',
        'Cross-border management'
      ],
      featuresAr: [
        'دعم المجتمع المدني',
        'ريادة الأعمال الاجتماعية',
        'برامج الإرشاد',
        'مساحة تعاونية',
        'الإدارة عبر الحدود'
      ]
    },
    {
      id: '6',
      title: 'Women Empowerment Circle',
      titleAr: 'دائرة تمكين المرأة',
      category: 'syria',
      description: 'A national and diaspora-linked women\'s leadership network focused on economic empowerment, feminist organizing, and local council-building.',
      descriptionAr: 'شبكة قيادة نسائية وطنية ومرتبطة بالشتات تركز على التمكين الاقتصادي والتنظيم النسوي وبناء المجالس المحلية.',
      location: 'National network',
      locationAr: 'شبكة وطنية',
      participants: 350,
      duration: '8 weeks',
      durationAr: '8 أسابيع',
      status: 'active',
      impact: 'Empowering individuals to launch new ventures',
      impactAr: 'تمكين الأفراد من إطلاق مشاريع جديدة',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Economic empowerment',
        'Feminist organizing',
        'Leadership development',
        'Local council building',
        'Diaspora connections'
      ],
      featuresAr: [
        'التمكين الاقتصادي',
        'التنظيم النسوي',
        'تطوير القيادة',
        'بناء المجالس المحلية',
        'روابط الشتات'
      ]
    },
    // Canada Programs
    {
      id: '7',
      title: 'Community Garden Project',
      titleAr: 'مشروع الحديقة المجتمعية',
      category: 'canada',
      description: 'A vibrant urban agriculture initiative in Edmonton, co-managed by newcomers and long-term residents. The garden provides fresh produce, hosts intercultural events, and fosters food security, environmental education, and community healing.',
      descriptionAr: 'مبادرة زراعة حضرية نابضة بالحياة في إدمونتون، تدار بالتعاون بين الوافدين الجدد والمقيمين طويل الأمد. توفر الحديقة المنتجات الطازجة وتستضيف فعاليات ثقافية وتعزز الأمن الغذائي والتعليم البيئي والشفاء المجتمعي.',
      location: 'Edmonton, Canada',
      locationAr: 'إدمونتون، كندا',
      participants: 85,
      duration: 'Year-round',
      durationAr: 'على مدار السنة',
      status: 'active',
      impact: '500+ families fed',
      impactAr: 'أطعمت أكثر من 500 عائلة',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Urban agriculture',
        'Intercultural events',
        'Food security',
        'Environmental education',
        'Community healing'
      ],
      featuresAr: [
        'الزراعة الحضرية',
        'الفعاليات الثقافية',
        'الأمن الغذائي',
        'التعليم البيئي',
        'الشفاء المجتمعي'
      ]
    },
    {
      id: '8',
      title: 'Syrian Film Festival',
      titleAr: 'مهرجان الأفلام السورية',
      category: 'canada',
      description: 'An annual film event in Edmonton that spotlights Syrian and diasporic voices in cinema. The festival builds bridges, amplifies untold stories, and creates space for cultural dialogue between Syrians and the broader Canadian community.',
      descriptionAr: 'حدث سينمائي سنوي في إدمونتون يسلط الضوء على الأصوات السورية وأصوات الشتات في السينما. يبني المهرجان الجسور ويضخم القصص غير المروية وينشئ مساحة للحوار الثقافي بين السوريين والمجتمع الكندي الأوسع.',
      location: 'Edmonton, Canada',
      locationAr: 'إدمونتون، كندا',
      participants: 200,
      duration: '1 week annually',
      durationAr: 'أسبوع واحد سنوياً',
      status: 'active',
      impact: '50+ films showcased',
      impactAr: 'أكثر من 50 فيلماً عُرض',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Syrian cinema',
        'Cultural dialogue',
        'Community building',
        'Storytelling platform',
        'Annual event'
      ],
      featuresAr: [
        'السينما السورية',
        'الحوار الثقافي',
        'بناء المجتمع',
        'منصة السرد',
        'حدث سنوي'
      ]
    },
    {
      id: '9',
      title: 'Nonprofit Partnerships & Convening',
      titleAr: 'شراكات المنظمات غير الربحية والتجمع',
      category: 'canada',
      description: 'RCF regularly convenes Syrian and allied nonprofits, grassroots groups, and community organizers in Edmonton and Western Canada. Through roundtables, collaborative projects, and shared advocacy, RCF strengthens the sector, builds new partnerships, and ensures Syrian-Canadian communities are heard in policy and public life.',
      descriptionAr: 'تجمع مؤسسة مجتمع الريزوم بانتظام المنظمات غير الربحية السورية والمتحالفة والمجموعات الشعبية ومنظمي المجتمع في إدمونتون وغرب كندا. من خلال المائدة المستديرة والمشاريع التعاونية والمناصرة المشتركة، تقوي المؤسسة القطاع وتبني شراكات جديدة وتضمن سماع أصوات المجتمعات السورية الكندية في السياسة والحياة العامة.',
      location: 'Edmonton & Western Canada',
      locationAr: 'إدمونتون وغرب كندا',
      participants: 150,
      duration: 'Ongoing',
      durationAr: 'مستمر',
      status: 'active',
      impact: '25+ organizations connected',
      impactAr: 'أكثر من 25 منظمة متصلة',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Nonprofit convening',
        'Collaborative projects',
        'Policy advocacy',
        'Community organizing',
        'Partnership building'
      ],
      featuresAr: [
        'تجميع المنظمات غير الربحية',
        'المشاريع التعاونية',
        'مناصرة السياسات',
        'التنظيم المجتمعي',
        'بناء الشراكات'
      ]
    }
  ];

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