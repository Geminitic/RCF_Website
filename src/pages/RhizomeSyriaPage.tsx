import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Globe, Palette, Heart, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import VolunteerForms from '../components/common/VolunteerForms';
import RhizomeSyriaGallery from '../components/gallery/RhizomeSyriaGallery';
import EmbeddedRecoveryDashboard from '../components/rhizome-syria/EmbeddedRecoveryDashboard';
import '../styles/rhizome-syria.css';
import { Button } from '../components/ui/Button';
// Reordered / refactored for unified button styling and accessibility improvements

const RhizomeSyriaPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const board = [
    {
      name: 'Ritta Alhayek',
      nameAr: 'ريتا الحايك',
      role: 'President',
      roleAr: 'رئيسة',
      bio: 'Oversees governance and direction with experience in strategic planning, community systems, and feminist organizing.',
      bioAr:
        'تشرف على الحوكمة والتوجه بخبرة في التخطيط الاستراتيجي والأنظمة المجتمعية والتنظيم النسوي.',
      image: '',
    },
    {
      name: 'Abdullah Sejerie',
      nameAr: 'عبد الله سيجري',
      role: 'Logistics & Operations',
      roleAr: 'اللوجستيات والعمليات',
      bio: 'Leads logistical coordination and field-level implementation, ensuring reliable support systems across all regions.',
      bioAr:
        'يقود التنسيق اللوجستي والتنفيذ على مستوى الميدان، مما يضمن أنظمة دعم موثوقة في جميع المناطق.',
      image: '',
    },
    {
      name: 'Kinda Ali',
      nameAr: 'كندة علي',
      role: 'Strategy & Outreach',
      roleAr: 'الاستراتيجية والتوعية',
      bio: 'Guides long-term planning and stakeholder engagement, focusing on interregional networks and strategic alliances.',
      bioAr:
        'توجه التخطيط طويل المدى ومشاركة أصحاب المصلحة، مع التركيز على الشبكات بين المناطق والتحالفات الاستراتيجية.',
      image: '',
    },
    {
      name: 'Silva Ismael',
      nameAr: 'سيلفا إسماعيل',
      role: 'Programs Lead',
      roleAr: 'قائدة البرامج',
      bio: "Manages Rhizome Syria's programmatic portfolio, with a focus on feminist frameworks, coastal civic organizing, and training modules.",
      bioAr:
        'تدير محفظة برامج رايزوم سوريا، مع التركيز على الأطر النسوية والتنظيم المدني الساحلي ووحدات التدريب.',
      image: '',
    },
  ];

  const methods = [
    { en: 'Open dialogue', ar: 'الحوار المفتوح' },
    { en: 'Capacity building', ar: 'بناء القدرات' },
    { en: 'Local networking', ar: 'التشبيك المحلي' },
    { en: 'Economic reconciliation', ar: 'المصالحة الاقتصادية' },
    { en: 'Independent financing', ar: 'التمويل المتسقل' },
    { en: 'Dismantling hierarchy', ar: 'تفكيك الهرمية' },
    { en: 'Data analysis', ar: 'التحليل البياني' },
    {
      en: 'Coordinating local resources and knowledge',
      ar: 'تنسيق المصادر والمعارف المحلية',
    },
    { en: 'Sustainable healthy relations', ar: 'علاقات صحية مستديمة' },
  ];

  const goals = [
    { en: 'Interwoven networks', ar: 'الشبكة المتشابكة' },
    { en: 'Dialogue and horizontal decision-making', ar: 'الحوار والأفقية' },
    { en: 'Adaptability and freedom', ar: 'التكيف والتحرر' },
    {
      en: 'Diversity and decentralized renewal',
      ar: 'التنوع والتجدد اللامركزية',
    },
    {
      en: 'Deep collaboration and intersection',
      ar: 'التعاون والتداخل العميق',
    },
    {
      en: 'Expanding reach across the land',
      ar: 'الامتداد والانتشار في الأرض',
    },
    {
      en: 'Change through community participation',
      ar: 'التغيير بالمشاركة المجتمعية',
    },
    {
      en: 'Empowerment, freedom, and resilience',
      ar: 'التمكين والحرية والمرونة',
    },
  ];

  return (
    <div className="rhizome-syria min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 pt-16 relative overflow-hidden">
      {/* Syrian Map Background */}
      <div
        className="fixed inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/slide0007_image015.png')`,
          backgroundSize: '45%' /* Reduced from 60% to 45% to zoom out more */,
          backgroundPosition: 'center 20%',
        }}
      />

      {/* Hero Section with Logo-Inspired Design */}
      <section
        className="rs-hero relative overflow-hidden"
        style={{ background: 'var(--rs-gradient-dawn)' }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-15 animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        {/* Spiral Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="spiralGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6B46C1" />
                <stop offset="25%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#fb923c" />
                <stop offset="75%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <path
              d="M50,50 Q30,30 50,10 Q70,30 90,50 Q70,70 50,90 Q30,70 10,50 Q30,30 50,50"
              fill="none"
              stroke="url(#spiralGradient)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
          >
            {/* Logo Integration */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <img
                src="/20250629_1822_Gradient Logo Design_remix_01jyz38q10e56bpwt8s4ypzwhj.png"
                alt="Rhizome Syria Logo"
                className="h-64 md:h-80 w-auto drop-shadow-xl"
                width={512}
                height={512}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="rs-body-large text-white/90 max-w-4xl mx-auto mb-8"
            >
              {t(
                'rhizome-syria-subtitle',
                'Development by and for the grassroots.',
                'التنمية من الجذور وإليها'
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/programs"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-400 rounded-full"
              >
                <Button
                  variant="primary"
                  leftIcon={<Sparkles className="h-5 w-5" />}
                  className="px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
                  aria-label={t(
                    'explore-programs',
                    'Discover Our Impact',
                    'اكتشف تأثيرنا'
                  )}
                >
                  {t(
                    'explore-programs',
                    'Discover Our Impact',
                    'اكتشف تأثيرنا'
                  )}
                </Button>
              </Link>
              <Link
                to="/join"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-400 rounded-full"
              >
                <Button
                  variant="secondary"
                  className="px-8 py-4 rounded-full shadow"
                  aria-label={t(
                    'join-community',
                    'Join the Movement',
                    'انضم للحراك'
                  )}
                >
                  {t('join-community', 'Join the Movement', 'انضم للحراك')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="rs-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50/50" />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-purple-300 rounded-full" />
          <div className="absolute bottom-40 right-20 w-80 h-80 border-2 border-blue-300 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-40 h-40 border-2 border-orange-300 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`rs-heading-2 mb-8 text-center bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t('overview-title', 'About Rhizome Syria', 'عن رايزوم سوريا')}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div
                  className={`rs-card p-8 mb-6 bg-gradient-to-br from-white to-purple-50 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  <p className="rs-body-large mb-6 leading-relaxed">
                    {t(
                      'overview-intro',
                      'Rhizome Syria is a decentralized civil-society network that harnesses local communities to drive real change, operating across diverse regions with adaptability and local ownership.',
                      'شبكة سورية لامركزية من المجتمع المدني تؤمن بقوة المجتمعات المحلية في صناعة التغيير وتعمل في مناطق متنوعة بمرونة وملكية محلية'
                    )}
                  </p>

                  <div className="flex justify-center mb-6">
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 rounded-full"></div>
                  </div>

                  <p className="rs-body italic text-center text-gray-600">
                    {t(
                      'overview-quote',
                      '"Like rhizomes in nature, we grow through connection, resilience, and horizontal spread — not through hierarchy."',
                      '"مثل الجذمور في الطبيعة، ننمو عبر الاتصال والمرونة والانتشار الأفقي — لا عبر التسلسل الهرمي."'
                    )}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/WhatsApp Image 2025-06-17 at 12.35.13 AM (2).jpeg"
                    alt="Rhizome Syria Community"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-70 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-xl"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`rs-heading-3 ml-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                  >
                    {t('methods-heading', 'Our Approach', 'منهجيتنا')}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {methods.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-2 ${currentLanguage.code === 'ar' ? 'space-x-reverse rs-arabic' : ''}`}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white text-xs">{index + 1}</span>
                      </div>
                      <p className="rs-body">
                        {t(`method-${index}`, item.en, item.ar)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`rs-heading-3 ml-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                  >
                    {t(
                      'goals-heading',
                      'The Rhizome Philosophy',
                      'فلسفة الريزوم'
                    )}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {goals.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-2 ${currentLanguage.code === 'ar' ? 'space-x-reverse rs-arabic' : ''}`}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center mt-1">
                        <span className="text-white text-xs">{index + 1}</span>
                      </div>
                      <p className="rs-body">
                        {t(`goal-${index}`, item.en, item.ar)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Vibrant Cards */}
      <section className="rs-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-200">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 ${currentLanguage.code === 'ar' ? 'rtl-icon-box' : ''}`}
                  >
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2
                    className={`rs-heading-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                  >
                    {t('our-mission', 'Our Mission & Vision', 'مهمتنا')}
                  </h2>
                </div>

                <div
                  className={`space-y-6 text-gray-700 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  <p className="rs-body">
                    {t(
                      'mission-text-1',
                      "Our vision: unleash each community's potential through a decentralized, horizontal network.",
                      'الفكرة: تفعيل القوة الكامنة في المجتمعات عبر شبكة علاقات أفقية غير مركزية.'
                    )}
                  </p>

                  <p className="rs-body">
                    {t(
                      'mission-text-2',
                      'Syrian communities need a development model anchored in their lived realities.',
                      'الحاجة: حاجة المجتمعات السورية المتنوعة إلى نموذج تنموي من قلب الواقع المحلي.'
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <img
                  src="/WhatsApp Image 2025-06-19 at 12.35.09 PM copy.jpeg"
                  alt="Rhizome Syria Activities"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-blue-600/20 rounded-2xl" />
              </div>

              <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-2xl p-6 shadow-xl border border-orange-200">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3 ${currentLanguage.code === 'ar' ? 'rtl-icon-box' : ''}`}
                  >
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3
                    className={`rs-heading-3 text-orange-800 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                  >
                    {t(
                      'our-structure',
                      'Our Model: A Unique Global Partnership',
                      'هيكلنا'
                    )}
                  </h3>
                </div>

                <p
                  className={`rs-body ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  {t(
                    'structure-text',
                    'Strategic partnerships: broad local cooperation and a development partnership with the Rhizome Community Foundation in Canada ensure autonomy and coordination.',
                    'شراكات استراتيجية: شراكات محلية واسعة، وشراكة تنموية مع مؤسسة رايزوم المجتمعية كندا، لضمان الاستقلالية والتنسيق.'
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Activities with Colorful Grid */}
      <section className="rs-section relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-blue-50/50 to-orange-50/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className={`rs-heading-2 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t('current-activities', 'Current Activities', 'الأنشطة الحالية')}
            </h2>
            <p
              className={`rs-body-large text-gray-600 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t(
                'activities-description',
                'Rhizome Syria operates a decentralized network of local partnerships while maintaining full adaptability in its engagement with formal and informal structures.',
                'تدير رايزوم سوريا شبكة لامركزية من الشراكات المحلية مع الحفاظ على قدرة تكيف كاملة في تفاعلها مع الهياكل الرسمية وغير الرسمية.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Introductory Local Visits',
                titleAr: 'زيارات محلية تعارفية',
                description:
                  'Understanding the Syrian context and activating community participation.',
                descriptionAr: 'لفهم الواقع السوري وتفعيل المشاركة المجتمعية.',
                icon: Globe,
                gradient: 'from-blue-500 to-green-500',
              },
              {
                title: 'Field Surveys & Syrian Data House',
                titleAr: 'مسوح ميدانية ومبادرة بيت البيانات السوري',
                description:
                  'Launching data-driven surveys to inform development strategies.',
                descriptionAr:
                  'إطلاق مسوح ميدانية لتغذية مبادرة بيت البيانات السوري.',
                icon: Target,
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Safe Reporting Platform',
                titleAr: 'منصة الإبلاغ الآمن',
                description:
                  'Creating a secure channel for community reports and feedback.',
                descriptionAr:
                  'إنشاء قناة آمنة للتقارير المجتمعية والتغذية الراجعة.',
                icon: Shield,
                gradient: 'from-orange-400 to-red-500',
              },
              {
                title: 'Volunteer Network & National Charter',
                titleAr: 'قاعدة تطوعية وميثاق وطني',
                description:
                  'Building a volunteer base and launching a national charter for civic work.',
                descriptionAr:
                  'بناء قاعدة تطوعية وإطلاق ميثاق وطني للعمل التطوعي.',
                icon: Heart,
                gradient: 'from-yellow-500 to-orange-400',
              },
              {
                title: 'Participatory Cultural Initiatives',
                titleAr: 'مبادرات ثقافية تشاركية',
                description:
                  'Youth and women empowerment, economic reconciliation, community healing, digital storytelling and fundraising.',
                descriptionAr:
                  'تمكين شبابي ونسائي، مصالحة اقتصادية، تعافٍ مجتمعي، السرد الرقمي وحملات جمع التبرعات.',
                icon: Palette,
                gradient: 'from-blue-500 to-cyan-500',
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className="absolute -inset-2 bg-gradient-to-r opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${activity.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${currentLanguage.code === 'ar' ? 'rtl-icon-box' : ''}`}
                  >
                    <activity.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3
                    className={`rs-heading-3 mb-3 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                  >
                    {t(
                      `activity-${index}-title`,
                      activity.title,
                      activity.titleAr
                    )}
                  </h3>

                  <p
                    className={`rs-body ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                  >
                    {t(
                      `activity-${index}-desc`,
                      activity.description,
                      activity.descriptionAr
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="rs-section relative bg-gradient-to-r from-blue-50 via-violet-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className={`rs-heading-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-500 bg-clip-text text-transparent mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t('past-events', 'Past Events', 'الفعاليات السابقة')}
            </h2>
            <p
              className={`rs-body-large text-gray-600 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t(
                'past-events-description',
                'Celebrating our community impact through meaningful cultural and social gatherings in Syria.',
                'نحتفل بتأثيرنا المجتمعي من خلال التجمعات الثقافية والاجتماعية الهادفة في سوريا.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Event 1: Aleppo Roots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src="/WhatsApp Image 2025-06-17 at 12.35.13 AM (2).jpeg"
                  alt="Aleppo Roots Cultural Event"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  {t(
                    'aleppo-roots-title',
                    'Aleppo Roots Cultural Event',
                    'فعالية جذور حلب الثقافية'
                  )}
                </h3>
                <p
                  className={`text-gray-500 mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  {t('aleppo-roots-date', 'July 15, 2025', '١٥ يوليو ٢٠٢٥')}
                </p>
                <p
                  className={`mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  {t(
                    'aleppo-roots-desc',
                    "A cultural event featuring theatre and music performances, and community engagement with nonprofits and volunteer teams. Celebrating Aleppo's rich cultural heritage with approximately 300 attendees.",
                    'فعالية ثقافية تضم عروض مسرحية وموسيقية، ومشاركة مجتمعية مع المنظمات غير الربحية وفرق المتطوعين. احتفالاً بالتراث الثقافي الغني لمدينة حلب بحضور حوالي ٣٠٠ شخص.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {t('tag-theatre', 'Theatre', 'مسرح')}
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                    {t('tag-music', 'Music', 'موسيقى')}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {t('tag-community', 'Community', 'مجتمع')}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Event 2: Farhatchild */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src="/WhatsApp Image 2025-06-17 at 12.35.14 AM (2).jpeg"
                  alt="فرحة طفل وفرحة Event"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  {t('farhatchild-title', 'فرحة طفل وفرحة', 'فرحة طفل وفرحة')}
                </h3>
                <p
                  className={`text-gray-500 mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  {t('farhatchild-date', 'June 1, 2025', '١ يونيو ٢٠٢٥')}
                </p>
                <p
                  className={`mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                >
                  {t(
                    'farhatchild-desc',
                    "A children's festival at Aleppo Castle featuring mascots, games, and activities for families. A celebration of childhood joy and community spirit with over 250 children and parents participating.",
                    'مهرجان للأطفال في قلعة حلب يضم شخصيات كرتونية وألعابًا وأنشطة للعائلات. احتفال بفرحة الطفولة وروح المجتمع بمشاركة أكثر من ٢٥٠ طفل وأهاليهم.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">
                    {t('tag-children', 'Children', 'أطفال')}
                  </span>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                    {t('tag-family', 'Family', 'عائلة')}
                  </span>
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                    {t('tag-heritage', 'Heritage', 'تراث')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board Section with Enhanced Design */}
      <section className="rs-section relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-blue-100/50 to-orange-100/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className={`rs-heading-2 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t('our-board-syria', 'Syria Team', 'فريق سوريا')}
            </h2>
          </motion.div>

          <div className="rs-team-grid">
            {board.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="rs-team-card">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="rs-team-no-image">
                      <span>{member.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="rs-team-info">
                    <h3
                      className={`rs-heading-3 mb-2 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                    >
                      {t(
                        `board-member-${index}-name`,
                        member.name,
                        member.nameAr
                      )}
                    </h3>
                    <p
                      className={`rs-team-role ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                    >
                      {t(
                        `board-member-${index}-role`,
                        member.role,
                        member.roleAr
                      )}
                    </p>
                    <p
                      className={`rs-body text-sm ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                    >
                      {t(`board-member-${index}-bio`, member.bio, member.bioAr)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Champions - Commented out as requested */}
      {/* <FeaturedLeaders /> */}

      {/* Recovery Dashboard Section */}
      <section className="rs-section bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q25,25 50,0 Q75,25 100,0 L100,100 Q75,75 50,100 Q25,75 0,100 Z"
              fill="url(#recovery-gradient)"
            />
            <defs>
              <linearGradient
                id="recovery-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className={`rs-heading-2 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t(
                'recovery-monitoring',
                'Syria Recovery Monitoring',
                'مراقبة التعافي السوري'
              )}
            </h2>
            <p
              className={`rs-body-large text-gray-600 max-w-4xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              {t(
                'recovery-monitoring-description',
                "Real-time data tracking Syria's recovery journey through comprehensive monitoring of vital indicators, displacement patterns, and humanitarian access across all regions.",
                'تتبع البيانات في الوقت الفعلي لرحلة التعافي السوري من خلال المراقبة الشاملة للمؤشرات الحيوية وأنماط النزوح والوصول الإنساني في جميع المناطق.'
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <EmbeddedRecoveryDashboard />
          </motion.div>
        </div>
      </section>

      {/* Call to Action with Spiral Design */}
      <section className="rs-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 via-orange-400 to-red-500" />
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M50,50 Q20,20 50,5 Q80,20 95,50 Q80,80 50,95 Q20,80 5,50 Q20,20 50,50"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-white ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
          >
            <h2 className="rs-heading-2 mb-6">
              {t(
                'get-involved-title',
                'Ready to join or partner?',
                'مستعد للانضمام أو الشراكة؟'
              )}
            </h2>
            <p className="rs-body-large text-white/90 mb-8 max-w-3xl mx-auto">
              {t(
                'get-involved-description',
                'Whether in Syria or Canada, your participation helps us grow resilient, empowered communities.',
                'سواء في سوريا أو كندا، مشاركتك تساعدنا في نمو مجتمعات مرنة وممكنة.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                {t('apply-now', 'Apply Now', 'تقدم الآن')}
              </Link>
              <a
                href="#volunteer"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/30 transition-colors"
              >
                {t('volunteer', 'Volunteer', 'تطوع')}
              </a>
            </div>
            <div className="mt-6 text-white/80 space-y-1">
              <p>
                {t(
                  'contact-info',
                  'Reach us anytime at',
                  'أينما كنتم تواصلوا بلا حواجز عبر'
                )}{' '}
                info@rhizomsyria.org | 0958461227 | rhizomsyria.org
              </p>
              <p>
                {t(
                  'address-info',
                  'For registration or volunteering visit',
                  'للتسجيل والتطوع مع رايزوم'
                )}{' '}
                {t(
                  'address-details',
                  'Latakia, Sheikh Khalaf Square, Joule Jamal Building 1, opposite Salah Al-Din Library',
                  'اللاذقية ساحة الشيخ خلف جول جمال ط 1 مقابل مكتبة صلاح الدين'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rhizome Syria Gallery */}
      <RhizomeSyriaGallery />

      {/* Photo Gallery Section - Commented out as requested (ابطال المجتمع)
      <section className="rs-section-alt relative overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rs-section-header text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t('gallery-title', 'Our Community in Action', 'مجتمعنا في العمل')}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {t(
                  'gallery-description',
                  'Moments captured from our initiatives, projects, and gatherings across Syria.',
                  'لحظات التقطت من مبادراتنا ومشاريعنا وتجمعاتنا في سوريا.'
                )}
              </p>
            </div>
            
            <PhotoGallery
              photos={[
                {
                  url: '/WhatsApp Image 2025-07-13 at 7.01.55 AM (4).jpeg',
                  caption: 'Community members collaborating on a local initiative',
                  captionAr: 'أعضاء المجتمع يتعاونون في مبادرة محلية'
                },
                {
                  url: '/WhatsApp Image 2025-07-13 at 7.01.55 AM (1).jpeg',
                  caption: 'Planning session for upcoming projects',
                  captionAr: 'جلسة تخطيط للمشاريع القادمة'
                },
                {
                  url: '/WhatsApp Image 2025-07-13 at 7.01.53 AM (1).jpeg',
                  caption: 'Cultural heritage preservation efforts',
                  captionAr: 'جهود الحفاظ على التراث الثقافي'
                },
                {
                  url: '/WhatsApp Image 2025-07-13 at 6.55.08 AM (1).jpeg',
                  caption: 'Youth engagement and development programs',
                  captionAr: 'برامج مشاركة وتنمية الشباب'
                },
                {
                  url: '/WhatsApp Image 2025-06-17 at 12.35.14 AM.jpeg',
                  caption: 'Community gathering in Damascus',
                  captionAr: 'تجمع مجتمعي في دمشق'
                },
                {
                  url: '/WhatsApp Image 2025-06-17 at 12.35.14 AM (1).jpeg',
                  caption: 'Skills development workshop',
                  captionAr: 'ورشة عمل لتنمية المهارات'
                },
                {
                  url: '/WhatsApp Image 2025-07-13 at 7.01.56 AM.jpeg',
                  caption: 'Building community resilience together',
                  captionAr: 'بناء صمود المجتمع معاً'
                },
                {
                  url: '/WhatsApp Image 2025-07-13 at 7.01.56 AM (7).jpeg',
                  caption: 'Educational initiative for children',
                  captionAr: 'مبادرة تعليمية للأطفال'
                },
                {
                  url: '/WhatsApp Image 2025-07-13 at 7.01.56 AM (6).jpeg',
                  caption: 'Local artisans preserving traditional crafts',
                  captionAr: 'الحرفيون المحليون يحافظون على الحرف التقليدية'
                },
                {
                  url: '/WhatsApp Image 2025-07-13 at 7.01.56 AM (5).jpeg',
                  caption: 'Community-led urban planning discussion',
                  captionAr: 'نقاش حول التخطيط الحضري بقيادة المجتمع'
                }
              ]}
            />
          </div>
        </div>
      </section>
      */}

      <section id="volunteer" className="rs-section bg-white">
        <div className="container mx-auto px-4">
          <VolunteerForms />
        </div>
      </section>
    </div>
  );
};

export default RhizomeSyriaPage;
