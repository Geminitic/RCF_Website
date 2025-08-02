import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Globe,
  MessageCircle,
  Activity,
  Network,
  HandCoins,
  Wallet,
  Layers,
  PieChart,
  Handshake,
  HeartHandshake,
  Users,
  Leaf,
  Palette,
  Shield,
  Sparkles,
} from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';
import VolunteerForms from '../components/common/VolunteerForms';
import FeaturedLeaders from '../components/community/FeaturedLeaders';
import '../styles/rhizome-syria.css';

const RhizomeSyriaPage: React.FC = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();

  useEffect(() => {
    const host = window.location.hostname;
    const path = window.location.pathname;
    if (host.includes('rhizomsyria.org') || path.startsWith('/rhizome-syria')) {
      const arabic = languages.find((l) => l.code === 'ar');
      if (arabic) {
        setLanguage(arabic);
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      }
    } else {
      const english = languages.find((l) => l.code === 'en');
      if (english) {
        setLanguage(english);
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
      }
    }
  }, [setLanguage]);

  const methods = [
    {
      en: 'Open dialogue',
      ar: 'الحوار المفتوح',
      icon: MessageCircle,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      en: 'Capacity building',
      ar: 'بناء القدرات',
      icon: Activity,
      gradient: 'from-blue-500 to-green-500',
    },
    {
      en: 'Local networking',
      ar: 'التشبيك المحلي',
      icon: Network,
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      en: 'Economic reconciliation',
      ar: 'المصالحة الاقتصادية',
      icon: HandCoins,
      gradient: 'from-orange-400 to-rose-500',
    },
    {
      en: 'Independent financing',
      ar: 'التمويل المستقل',
      icon: Wallet,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      en: 'Dismantling hierarchy',
      ar: 'تفكيك الهرمية',
      icon: Layers,
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      en: 'Data analysis',
      ar: 'التحليل البياني',
      icon: PieChart,
      gradient: 'from-blue-600 to-purple-500',
    },
    {
      en: 'Coordinating local resources and knowledge',
      ar: 'تنسيق المصادر والمعارف المحلية',
      icon: Handshake,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      en: 'Sustainable healthy relations',
      ar: 'علاقات صحية مستديمة',
      icon: HeartHandshake,
      gradient: 'from-red-500 to-orange-400',
    },
  ];

  const goals = [
    {
      en: 'Interwoven networks',
      ar: 'الشبكة المتشابكة',
      icon: Network,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      en: 'Dialogue and horizontal decision-making',
      ar: 'الحوار والأفقية',
      icon: MessageCircle,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      en: 'Adaptability and freedom',
      ar: 'التكيف والتحرر',
      icon: Leaf,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      en: 'Diversity and decentralized renewal',
      ar: 'التنوع والتجدد اللامركزية',
      icon: Palette,
      gradient: 'from-orange-400 to-red-500',
    },
    {
      en: 'Deep collaboration and intersection',
      ar: 'التعاون والتداخل العميق',
      icon: HeartHandshake,
      gradient: 'from-rose-500 to-orange-400',
    },
    {
      en: 'Expanding reach across the land',
      ar: 'الامتداد والانتشار في الأرض',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      en: 'Change through community participation',
      ar: 'التغيير بالمشاركة المجتمعية',
      icon: Users,
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      en: 'Empowerment, freedom, and resilience',
      ar: 'التمكين والحرية والمرونة',
      icon: Shield,
      gradient: 'from-purple-600 to-indigo-600',
    },
  ];

  const activities = [
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
      descriptionAr: 'إطلاق مسوح ميدانية لتغذية مبادرة بيت البيانات السوري.',
      icon: PieChart,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Mapping Local Actors',
      titleAr: 'رسم خريطة الفاعلين المحليين',
      description: 'Documenting key community actors to knit collaborative ties.',
      descriptionAr: 'توثيق الفاعلين المجتمعيين لنسج روابط التعاون.',
      icon: Users,
      gradient: 'from-orange-400 to-red-400',
    },
    {
      title: 'Small Grants & Resource Pool',
      titleAr: 'منح صغيرة وحوض موارد مشترك',
      description:
        'Backing grassroots initiatives with flexible micro-grants and shared tools.',
      descriptionAr: 'دعم المبادرات القاعدية بمنح صغيرة مرنة وأدوات مشتركة.',
      icon: HandCoins,
      gradient: 'from-teal-500 to-green-500',
    },
    {
      title: 'Community Media Labs',
      titleAr: 'مختبرات إعلام مجتمعي',
      description:
        'Training local storytellers and amplifying marginalized voices.',
      descriptionAr: 'تدريب الحكّائين المحليين وإيصال الأصوات المهمشة.',
      icon: Palette,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Well‑Being & Care Circles',
      titleAr: 'دوائر العافية والرعاية',
      description:
        'Creating safe spaces for mutual care and healing practices.',
      descriptionAr: 'خلق مساحات آمنة للرعاية المتبادلة وممارسات التعافي.',
      icon: HeartHandshake,
      gradient: 'from-red-500 to-orange-400',
    },
  ];

  const board = [
    {
      name: 'Ritta Alhayek',
      nameAr: 'ريتا الحايك',
      role: 'President',
      roleAr: 'رئيسة',
      bio: 'Oversees governance and direction with experience in strategic planning, community systems, and feminist organizing.',
      bioAr:
        'تشرف على الحوكمة والتوجه بخبرة في التخطيط الاستراتيجي والأنظمة المجتمعية والتنظيم النسوي.',
      image:
        'https://via.placeholder.com/400x400/6B46C1/FFFFFF?text=Board+Member',
    },
    {
      name: 'Abdullah Sejerie',
      nameAr: 'عبد الله سجرية',
      role: 'Logistics & Operations',
      roleAr: 'اللوجستيات والعمليات',
      bio: 'Leads logistical coordination and field-level implementation, ensuring reliable support systems across all regions.',
      bioAr:
        'يقود التنسيق اللوجستي والتنفيذ على مستوى الميدان، مما يضمن أنظمة دعم موثوقة في جميع المناطق.',
      image:
        'https://via.placeholder.com/400x400/0EA5E9/FFFFFF?text=Board+Member',
    },
    {
      name: 'Kinda Ali',
      nameAr: 'كندة علي',
      role: 'Strategy & Outreach',
      roleAr: 'الاستراتيجية والتوعية',
      bio: 'Guides long-term planning and stakeholder engagement, focusing on interregional networks and strategic alliances.',
      bioAr:
        'توجه التخطيط طويل المدى ومشاركة أصحاب المصلحة، مع التركيز على الشبكات بين المناطق والتحالفات الاستراتيجية.',
      image:
        'https://via.placeholder.com/400x400/fb923c/FFFFFF?text=Board+Member',
    },
    {
      name: 'Silva Ismael',
      nameAr: 'سيلفا إسماعيل',
      role: 'Programs Lead',
      roleAr: 'قائدة البرامج',
      bio: "Manages Rhizome Syria's programmatic portfolio, with a focus on feminist frameworks, coastal civic organizing, and training modules.",
      bioAr:
        'تدير محفظة برامج رايزوم سوريا، مع التركيز على الأطر النسوية والتنظيم المدني الساحلي ووحدات التدريب.',
      image:
        'https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Board+Member',
    },
  ];

  const HeroSection = () => (
    <section
      className="rs-hero relative overflow-hidden"
      style={{ background: 'var(--rs-gradient-dawn)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center ${
            currentLanguage.code === 'ar' ? 'rs-arabic' : ''
          }`}
        >
          <h1 className="rs-heading-1 mb-6 flex justify-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              src="/20250629_1822_Gradient Logo Design_remix_01jyz38q10e56bpwt8s4ypzwhj.png"
              alt="Rhizome Syria Logo"
              className="h-72 md:h-96 w-auto drop-shadow-xl"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`text-3xl font-bold text-white max-w-4xl mx-auto mb-8 drop-shadow-lg ${
              currentLanguage.code === 'ar' ? 'rs-arabic' : ''
            }`}
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
            <button className="rs-button-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2" />
              {t('explore-programs', 'Discover Our Impact', 'اكتشف تأثيرنا')}
            </button>

            <Link to="/join" className="rs-button-secondary">
              {t('join-community', 'Join the Movement', 'انضم للحراك')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="rs-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={currentLanguage.code === 'ar' ? 'rs-arabic' : ''}
        >
          <h2 className="rs-heading-2 mb-6">
            {t('overview-title', 'About Us', 'عن رايزوم سوريا')}
          </h2>
          <p className="rs-body-large mb-8">
            {t(
              'overview-intro',
              'Rhizome Syria is a decentralized civil-society network that harnesses local communities to drive real change.',
              'شبكة سورية لامركزية من المجتمع المدني تؤمن بقوة المجتمعات المحلية في صناعة التغيير'
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rs-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="rs-heading-3">
                  {t('our-mission', 'Our Mission & Vision', 'مهمتنا')}
                </h3>
              </div>
              <p className="rs-body mb-4">
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

            <div className="space-y-8">
              <img
                src="/WhatsApp Image 2025-06-19 at 12.35.09 PM copy.jpeg"
                alt="Rhizome Syria Activities"
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              <div className="rs-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="rs-heading-3">
                    {t('our-structure', 'Our Model: A Unique Global Partnership', 'هيكلنا')}
                  </h3>
                </div>
                <p className="rs-body">
                  {t(
                    'structure-text',
                    'Strategic partnerships: broad local cooperation and a development partnership with the Rhizome Community Foundation in Canada ensure autonomy and coordination.',
                    'شراكات استراتيجية: شراكات محلية واسعة، وشراكة تنموية مع مؤسسة رايزوم المجتمعية كندا، لضمان الاستقلالية والتنسيق.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const ApproachSection = () => (
    <section className="rs-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={currentLanguage.code === 'ar' ? 'rs-arabic' : ''}
        >
          <h2 className="rs-heading-2 mb-10">
            {t('methods-heading', 'Our Approach', 'نهجنا')}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="rs-heading-3 mb-6">
                {t('methods-title', 'Methods', 'الوسائل')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {methods.map((item, index) => (
                  <div
                    key={index}
                    className={`rs-card flex items-center gap-3 ${
                      currentLanguage.code === 'ar'
                        ? 'rs-arabic flex-row-reverse'
                        : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="rs-body">
                      {t(`method-${index}`, item.en, item.ar)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="rs-heading-3 mb-6">
                {t('goals-title', 'Goals', 'الأهداف')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {goals.map((item, index) => (
                  <div
                    key={index}
                    className={`rs-card flex items-center gap-3 ${
                      currentLanguage.code === 'ar'
                        ? 'rs-arabic flex-row-reverse'
                        : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="rs-body">
                      {t(`goal-${index}`, item.en, item.ar)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const ActivitiesSection = () => (
    <section className="rs-section bg-white relative">
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
            className={`rs-heading-2 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent mb-6 ${
              currentLanguage.code === 'ar' ? 'rs-arabic' : ''
            }`}
          >
            {t('current-activities', 'Current Activities', 'الأنشطة الحالية')}
          </h2>
          <p
            className={`rs-body-large text-gray-600 max-w-3xl mx-auto ${
              currentLanguage.code === 'ar' ? 'rs-arabic' : ''
            }`}
          >
            {t(
              'activities-description',
              'Rhizome Syria operates a decentralized network of local partnerships while maintaining full adaptability in its engagement with formal and informal structures.',
              'تدير رايزوم سوريا شبكة لامركزية من الشراكات المحلية مع الحفاظ على قدرة تكيف كاملة في تفاعلها مع الهياكل الرسمية وغير الرسمية.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="rs-card h-full text-center flex flex-col">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3
                  className={`rs-heading-3 mb-2 ${
                    currentLanguage.code === 'ar' ? 'rs-arabic' : ''
                  }`}
                >
                  {t(`activity-${index}-title`, item.title, item.titleAr)}
                </h3>
                <p
                  className={`rs-body flex-grow ${
                    currentLanguage.code === 'ar' ? 'rs-arabic' : ''
                  }`}
                >
                  {t(
                    `activity-${index}-description`,
                    item.description,
                    item.descriptionAr
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const TeamSection = () => (
    <section className="rs-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`rs-heading-2 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent mb-6 ${
              currentLanguage.code === 'ar' ? 'rs-arabic' : ''
            }`}
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
                <img src={member.image} alt={member.name} />
                <div className="rs-team-info">
                  <h3
                    className={`rs-heading-3 mb-2 ${
                      currentLanguage.code === 'ar' ? 'rs-arabic' : ''
                    }`}
                  >
                    {t(`board-member-${index}-name`, member.name, member.nameAr)}
                  </h3>
                  <p
                    className={`rs-team-role ${
                      currentLanguage.code === 'ar' ? 'rs-arabic' : ''
                    }`}
                  >
                    {t(`board-member-${index}-role`, member.role, member.roleAr)}
                  </p>
                  <p
                    className={`rs-body text-sm ${
                      currentLanguage.code === 'ar' ? 'rs-arabic' : ''
                    }`}
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
  );

  const CTASection = () => (
    <section className="rs-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 via-orange-400 to-red-500" />
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
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
              {t('contact-info', 'Reach us anytime at', 'أينما كنتم تواصلوا بلا حواجز عبر')}{' '}
              info@rhizomsyria.org | 0958461227 | rhizomsyria.org
            </p>
            <p>
              {t('address-info', 'For registration or volunteering visit', 'للتسجيل والتطوع مع رايزوم')}{' '}
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
  );

  const VolunteerSection = () => (
    <section id="volunteer" className="rs-section bg-white">
      <div className="container mx-auto px-4">
        <VolunteerForms />
      </div>
    </section>
  );

  return (
    <div className="rhizome-syria min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 pt-16 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ActivitiesSection />
      <TeamSection />
      <FeaturedLeaders />
      <CTASection />
      <VolunteerSection />
    </div>
  );
};

export default RhizomeSyriaPage;

