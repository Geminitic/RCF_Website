import { motion } from 'framer-motion';
import { Target, Globe, Image, Palette, Heart, Shield, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SyrianCitiesMap from '../components/common/SyrianCitiesMap';
import VolunteerForms from '../components/common/VolunteerForms';
import FeaturedLeaders from '../components/community/FeaturedLeaders';
import '../styles/rhizome-syria.css';

const RhizomeSyriaPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const board = [
    {
      name: 'Ritta Alhayek',
      nameAr: 'ريتا الحايك',
      role: 'Chair',
      roleAr: 'رئيسة',
      bio: 'Oversees governance and direction with experience in strategic planning, community systems, and feminist organizing.',
      bioAr: 'تشرف على الحوكمة والتوجه بخبرة في التخطيط الاستراتيجي والأنظمة المجتمعية والتنظيم النسوي.',
      image: 'https://via.placeholder.com/400x400/6B46C1/FFFFFF?text=Board+Member'
    },
    {
      name: 'Abdullah Sejerie',
      nameAr: 'عبد الله سجرية',
      role: 'Logistics & Operations',
      roleAr: 'اللوجستيات والعمليات',
      bio: 'Leads logistical coordination and field-level implementation, ensuring reliable support systems across all regions.',
      bioAr: 'يقود التنسيق اللوجستي والتنفيذ على مستوى الميدان، مما يضمن أنظمة دعم موثوقة في جميع المناطق.',
      image: 'https://via.placeholder.com/400x400/0EA5E9/FFFFFF?text=Board+Member'
    },
    {
      name: 'Kinda Ali',
      nameAr: 'كندة علي',
      role: 'Strategy & Outreach',
      roleAr: 'الاستراتيجية والتوعية',
      bio: 'Guides long-term planning and stakeholder engagement, focusing on interregional networks and strategic alliances.',
      bioAr: 'توجه التخطيط طويل المدى ومشاركة أصحاب المصلحة، مع التركيز على الشبكات بين المناطق والتحالفات الاستراتيجية.',
      image: 'https://via.placeholder.com/400x400/F97316/FFFFFF?text=Board+Member'
    },
    {
      name: 'Silva',
      nameAr: 'سيلفا',
      role: 'Programs Lead',
      roleAr: 'قائدة البرامج',
      bio: 'Manages Rhizome Syria\'s programmatic portfolio, with a focus on feminist frameworks, coastal civic organizing, and training modules.',
      bioAr: 'تدير محفظة برامج ريزوم سوريا، مع التركيز على الأطر النسوية والتنظيم المدني الساحلي ووحدات التدريب.',
      image: 'https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Board+Member'
    }
  ];

  const methods = [
    {
      en: 'Direct Dialogue: We bridge gaps by connecting communities and experts directly, fostering open conversations without intermediaries.',
      ar: 'الحوار المفتوح: جسر الفجوات بين الريف والمدن، وبين الخبراء والمجتمع، دون وسطاء.'
    },
    {
      en: 'Community-Led Decisions: From planning to implementation, local communities are involved in every decision, ensuring solutions are rooted in their reality.',
      ar: 'بناء القدرات: تمكين الأفراد والمؤسسات المجتمعية لإدارة مواردها باستقلالية.'
    },
    {
      en: "From Aid to Enterprise: We are shifting the focus from short-term relief to sustainable economic transformation by launching business incubators that support small projects and create lasting jobs.",
      ar: 'الشبكات المحلية: نموذج تنموي مرن يعتمد على إبداع الشباب والتعاون الأفقي.'
    },
    {
      en: "Youth-Led Innovation: We build a flexible development model that relies on the creativity and horizontal collaboration of Syria's youth.",
      ar: 'العدالة والتمكين: تعزيز سيادة المجتمع المدني وتبني العدالة غير الانتقامية.'
    },
    {
      en: 'Restorative Justice & Empowerment: We work to strengthen civil society’s sovereignty and champion restorative justice principles that heal and unite.',
      ar: 'القيادة التشاركية: إشراك المجتمعات المحلية في صناعة القرار من التخطيط حتى التنفيذ.'
    },
    {
      en: 'Investing in Local Economies: We focus on productive infrastructure, investing in competitive sectors like agriculture and handicrafts to build economic independence.',
      ar: 'التحول الاقتصادي: الانتقال من الإغاثة إلى حاضنات الأعمال التي تدعم المشاريع الصغيرة وتخلق فرص العمل.'
    },
    {
      en: 'Blending Tradition and Data: We craft powerful pathways for change by combining scientific data and analytics with the invaluable traditional knowledge of local communities.',
      ar: 'البنية التحتية المنتجة: استثمار الموارد في القطاعات ذات الميزة التنافسية كالزراعة والصناعات الحرفية.'
    }
  ];

  const goals = [
    {
      en: 'Decentralized: No single point of failure.',
      ar: 'تحوّل تقوده البيانات\nقرارات مستنيرة، ونهوض جماعي'
    },
    {
      en: 'Interconnected: Strength through collaboration.',
      ar: 'تمكين الإرادة الذاتية\nالمجتمعات في موقع القيادة'
    },
    {
      en: 'Adaptable: Able to navigate complex and changing environments.',
      ar: 'قلب موازين القوة\nتفكيك الهرمية، وتعاون جذري'
    },
    {
      en: 'Community-Rooted: Growing from local needs and knowledge.',
      ar: 'قلب موازين القوة\nتفكيك الهرمية، وتعاون جذري'
    }
  ];

  return (
    <div className="rhizome-syria min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 pt-16 relative overflow-hidden">
      {/* Syrian Map Background */}
      <div 
        className="fixed inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/slide0007_image015.png')`,
          backgroundSize: '80%',
          backgroundPosition: 'center 20%'
        }}
      />

      {/* Hero Section with Logo-Inspired Design */}
      <section className="rs-hero relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Spiral Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6B46C1" />
                <stop offset="25%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#F97316" />
                <stop offset="75%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <path d="M50,50 Q30,30 50,10 Q70,30 90,50 Q70,70 50,90 Q30,70 10,50 Q30,30 50,50" 
                  fill="none" 
                  stroke="url(#spiralGradient)" 
                  strokeWidth="0.5" 
                  opacity="0.3" />
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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <img
                src="/20250629_1822_Gradient Logo Design_remix_01jyz38q10e56bpwt8s4ypzwhj.png"
                alt="Rhizome Syria Logo"
                className="h-64 md:h-80 w-auto drop-shadow-xl"
              />
            </motion.div>

            <h1 className="rs-heading-1 mb-6">
              {t('rhizome-syria-title', 'Rhizome Syria', 'ريزوم سوريا')}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="rs-body-large text-white/90 max-w-4xl mx-auto mb-8"
            >
              {t(
                'rhizome-syria-subtitle',
                'Syria, Reimagined From the Roots Up.',
                'صوت سوريا في مؤسسة ريزوم المجتمعية - مستقل، متمحور حول المجتمع، وموحد فوق الانقسامات.'
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 group-hover:animate-spin" />
                  {t('explore-programs', 'Discover Our Impact', 'اكتشف تأثيرنا')}
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-purple-700 font-semibold rounded-full border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300">
                {t('join-community', 'Join the Movement', 'انضم للحراك')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
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
              {t('overview-title', 'About Us', 'عن ريزوم سوريا')}
            </h2>
            <p className="rs-body-large mb-6">
              {t(
                'overview-intro',
                'Rhizome Syria is a network of Syrian civil society leaders, activists, and communities dedicated to rebuilding a cohesive and stable nation through the will and hands of its own people. We are a decentralized alliance of vibrant Syrian voices, bridging the gaps between urban and rural areas, experts and communities, and tradition and innovation. We believe that to build a future that is sustainable in all circumstances, we must operate like a rhizome: an interconnected, non-hierarchical network that grows stronger and more resilient as it expands. With Syrian leadership at our core, we are explicitly anti-sectarian and unaffiliated with any previous regime institutions. We work to strengthen social cohesion through cultural, feminist, and community-led initiatives.',
                'رايزوم سوريا تجمع كافة الأصوات النابضة في المجتمع المدني السوري ضمن تحالف تكاملي وشبكة عقدية لامركزية. نسعى من خلال هذه المبادرة إلى إعادة بناء سوريا بإرادة أبنائها وسواعدهم. نؤمن بأن التعاون الأفقي والعمودي والتكيف السريع يتطلب نسيجاً تنظيمياً لامركزياً يشبه شبكة الجذمور الطبيعية‏ بلا بداية ولا نهاية ونمو متداخل مستدام في كل الظروف، ومسارات عمل شبكية متكاملة لبناء مجتمع متماسك ومستقر.'
              )}
            </p>

            <h3 className="rs-heading-3 mb-4">
              {t('methods-heading', 'Our Approach: How We Work', 'الوسائل')}
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              {methods.map((item, index) => (
                <li key={index}>{t(`method-${index}`, item.en, item.ar)}</li>
              ))}
            </ul>

            <h3 className="rs-heading-3 mb-4">
              {t('goals-heading', 'The Rhizome Philosophy', 'الأهداف')}
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              {goals.map((item, index) => (
                <li key={index}>{t(`goal-${index}`, item.en, item.ar)}</li>
              ))}
            </ul>

            <p className="rs-body-large">
              {t(
                'partnership-text',
                'Rhizome Syria is reimagining international cooperation. We operate in a unique partnership with the Rhizome Community Foundation in Canada. While both organizations are fully independent legal entities, we share governance, coordinate programs, and hold each other accountable through a shared strategic vision. This model ensures Syrian leadership, global connection with local protection, and radical collaboration built on mutual respect and shared goals.',
                'تعمل ريزوم سوريا بالشراكة مع مؤسسة ريزوم المجتمعية الكندية، بقيادة سورية، لإعادة تصور التمويل الدولي وتعزيز وكالة المجتمعات المتأثرة بالتحديات المتقاطعة. يركز هذا النموذج على تمكين المجتمعات المحلية من رسم أولوياتها وابتكار حلول من واقعها مع ربطها بالموارد العالمية وحمايتها من الضغوط الخارجية دون المساس بالمعايير الدولية.'
              )}
            </p>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className={`rs-heading-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                    {t('our-mission', 'Our Mission & Vision', 'مهمتنا')}
                  </h2>
                </div>
                
                <div className={`space-y-6 text-gray-700 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                  <p className="rs-body">
                    {t(
                      'mission-text-1',
                      'Our Mission: To empower Syrian communities to lead their own transformation. We connect local ingenuity with global resources, shifting power from traditional hierarchies to the people themselves.',
                      'ريزوم سوريا هي الشريك السوري في اتفاقية مشروع مشترك مع ريزوم كندا وتعملان وفق نموذج الإدارة المتداخلة. يحتفظ كل فرع باستقلال قانوني كامل مع تشارك الحوكمة والبرامج المنسقة والمساءلة المتبادلة.'
                    )}
                  </p>
                  
                  <p className="rs-body">
                    {t(
                      'mission-text-2',
                      'Our Vision: We envision a just and prosperous Syria, where decentralized, community-led development creates a society that is cohesive, self-determined, and empowered from within.',
                      'تعمل ريزوم سوريا على تعزيز التماسك الاجتماعي من خلال المبادرات الثقافية والنسوية والمجتمعية. وهي غير منتسبة لأي مؤسسات نظام سابقة وهي صراحة مناهضة للطائفية.'
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
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-blue-600/20 rounded-2xl" />
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-2xl p-6 shadow-xl border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className={`rs-heading-3 text-orange-800 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                      {t('our-structure', 'Our Model: A Unique Global Partnership', 'هيكلنا')}
                  </h3>
                </div>

                <p className={`rs-body ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                  {t(
                      'structure-text',
                      'We operate in close partnership with the Rhizome Community Foundation in Canada. Both organizations remain independent while sharing governance, coordinating programs, and holding each other accountable through a common strategic vision.',
                      'تعمل ريزوم سوريا وريزوم كندا ككيانين قانونيين منفصلين في إطار اتفاقية مشروع مشترك وبهيكل إدارة متداخلة، مما يتيح التخطيط الاستراتيجي المنسق وتبادل المعرفة والمساءلة المشتركة.'
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
            <h2 className={`rs-heading-2 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t('current-activities', 'Current Activities', 'الأنشطة الحالية')}
            </h2>
            <p className={`rs-body-large text-gray-600 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t(
                'activities-description',
                'Rhizome Syria operates a decentralized network of local partnerships while maintaining full adaptability in its engagement with formal and informal structures.',
                'تدير ريزوم سوريا شبكة لامركزية من الشراكات المحلية مع الحفاظ على قدرة تكيف كاملة في تفاعلها مع الهياكل الرسمية وغير الرسمية.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                  title: 'Feminist-Led Community Center (Latakia)',
                  titleAr: 'مركز الدعم المجتمعي بقيادة نسوية في اللاذقية',
                  description: 'A dedicated space providing economic opportunities, skills training, and organizational empowerment for women.',
                descriptionAr: 'توفير التمكين الاقتصادي والتنظيمي للنساء.',
                icon: Heart,
                gradient: 'from-purple-500 to-pink-500'
              },
                {
                  title: 'Collaborative Cultural Projects (Aleppo & Latakia)',
                  titleAr: 'المشاريع الثقافية التعاونية',
                  description: 'Preserving and celebrating Syrian culture through community-based theater, visual arts, and oral history initiatives.',
                descriptionAr: 'مبادرات المسرح والفنون البصرية والتاريخ الشفوي في حلب واللاذقية.',
                icon: Palette,
                gradient: 'from-blue-500 to-cyan-500'
              },
                {
                  title: 'Peacebuilding Dialogues (Northern & Central Regions)',
                  titleAr: 'حوارات بناء السلام',
                  description: 'Facilitating participatory workshops that build trust, resolve conflict, and foster social cohesion across diverse communities.',
                descriptionAr: 'ورش عمل تشاركية في المناطق الشمالية والوسطى.',
                icon: Shield,
                gradient: 'from-orange-500 to-red-500'
              },
                {
                  title: 'Digital Storytelling & Memory Preservation',
                  titleAr: 'السرد الرقمي',
                  description: 'Using participatory digital tools to create a collective archive of Syrian stories and experiences, ensuring our history is not forgotten.',
                  descriptionAr: 'الحفاظ على الذاكرة من خلال الأدوات الرقمية التشاركية.',
                  icon: Image,
                  gradient: 'from-green-500 to-blue-500'
                },
                {
                  title: 'Community Fundraising Platforms (Coastal Region)',
                  titleAr: 'حملات جمع التبرعات',
                  description: 'Developing local fundraising initiatives that empower communities to generate and manage their own resources independently.',
                  descriptionAr: 'منصات مجتمعية ومبادرات جمع التبرعات على الساحل.',
                  icon: Target,
                  gradient: 'from-yellow-500 to-orange-500'
                }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity" 
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className={`w-14 h-14 bg-gradient-to-r ${activity.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <activity.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className={`rs-heading-3 mb-3 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                    {t(`activity-${index}-title`, activity.title, activity.titleAr)}
                  </h3>

                  <p className={`rs-body ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                    {t(`activity-${index}-desc`, activity.description, activity.descriptionAr)}
                  </p>
                </div>
              </motion.div>
            ))}
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
            <h2 className={`rs-heading-2 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
              {t('our-board-syria', 'Our Board (Syria)', 'مجلس إدارتنا (سوريا)')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Star className="h-6 w-6 text-yellow-400 drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`rs-heading-3 mb-2 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                      {t(`board-member-${index}-name`, member.name, member.nameAr)}
                    </h3>

                    <p className={`text-purple-600 font-medium mb-3 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                      {t(`board-member-${index}-role`, member.role, member.roleAr)}
                    </p>

                    <p className={`rs-body text-sm ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>
                      {t(`board-member-${index}-bio`, member.bio, member.bioAr)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

        {/* Community Champions */}
        <FeaturedLeaders />

        {/* Call to Action with Spiral Design */}
        <section className="rs-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 via-orange-500 to-red-500" />
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M50,50 Q20,20 50,5 Q80,20 95,50 Q80,80 50,95 Q20,80 5,50 Q20,20 50,50" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="0.5" 
                  opacity="0.3" />
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
              {t('get-involved-title', 'Ready to join or partner?', 'مستعد للانضمام أو الشراكة؟')}
            </h2>
            <p className="rs-body-large text-white/90 mb-8 max-w-3xl mx-auto">
              {t(
                'get-involved-description',
                'Whether in Syria or Canada, your participation helps us grow resilient, empowered communities.',
                'سواء في سوريا أو كندا، مشاركتك تساعدنا في نمو مجتمعات مرنة وممكنة.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#volunteer"
                className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                {t('apply-now', 'Apply Now', 'تقدم الآن')}
              </a>
              <a
                href="#volunteer"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/30 transition-colors"
              >
                {t('volunteer', 'Volunteer', 'تطوع')}
              </a>
            </div>
            <div className="mt-6 text-white/80">
              <p>
                {t('contact-info', 'Contact us at', 'اتصل بنا على')} info@rhizomsyria.org
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="volunteer" className="rs-section bg-white">
        <div className="container mx-auto px-4">
          <SyrianCitiesMap />
          <VolunteerForms />
        </div>
      </section>
    </div>
  );
};
export default RhizomeSyriaPage;
