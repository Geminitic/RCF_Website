import { motion } from 'framer-motion';
import {
  Target,
  Image,
  Palette,
  Heart,
  Shield,
  Sparkles,
} from 'lucide-react';
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
    <div className="rhizome-syria min-h-screen pt-16">
      <section className="rs-hero text-center">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <img
              src="/20250629_1822_Gradient Logo Design_remix_01jyz38q10e56bpwt8s4ypzwhj.png"
              alt="Rhizome Syria Logo"
              className="mx-auto h-40 w-auto mb-6"
            />
            <h1 className={`rs-heading-1 mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('rhizome-syria-title', 'Rhizome Syria', 'ريزوم سوريا')}</h1>
            <p className={`rs-body-large mb-8 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('rhizome-syria-subtitle', 'Syria, Reimagined From the Roots Up.', 'صوت سوريا في مؤسسة ريزوم المجتمعية - مستقل، متمحور حول المجتمع، وموحد فوق الانقسامات.')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rs-button-primary">
                <span className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  {t('explore-programs', 'Discover Our Impact', 'اكتشف تأثيرنا')}
                </span>
              </button>
              <button className="rs-button-secondary">
                {t('join-community', 'Join the Movement', 'انضم للحراك')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rs-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`rs-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('overview-title', 'About Us', 'عن ريزوم سوريا')}</h2>
          <p className={`rs-body mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('overview-intro', 'Rhizome Syria is a network of Syrian civil society leaders, activists, and communities dedicated to rebuilding a cohesive and stable nation through the will and hands of its own people. We are a decentralized alliance of vibrant Syrian voices, bridging the gaps between urban and rural areas, experts and communities, and tradition and innovation. We believe that to build a future that is sustainable in all circumstances, we must operate like a rhizome: an interconnected, non-hierarchical network that grows stronger and more resilient as it expands. With Syrian leadership at our core, we are explicitly anti-sectarian and unaffiliated with any previous regime institutions. We work to strengthen social cohesion through cultural, feminist, and community-led initiatives.', 'رايزوم سوريا تجمع كافة الأصوات النابضة في المجتمع المدني السوري ضمن تحالف تكاملي وشبكة عقدية لامركزية. نسعى من خلال هذه المبادرة إلى إعادة بناء سوريا بإرادة أبنائها وسواعدهم. نؤمن بأن التعاون الأفقي والعمودي والتكيف السريع يتطلب نسيجاً تنظيمياً لامركزياً يشبه شبكة الجذمور الطبيعية‏ بلا بداية ولا نهاية ونمو متداخل مستدام في كل الظروف، ومسارات عمل شبكية متكاملة لبناء مجتمع متماسك ومستقر.')}</p>

          <h3 className={`rs-heading-3 mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('methods-heading', 'Our Approach: How We Work', 'الوسائل')}</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            {methods.map((item, index) => (
              <li key={index}>{t(`method-${index}`, item.en, item.ar)}</li>
            ))}
          </ul>

          <h3 className={`rs-heading-3 mb-4 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('goals-heading', 'The Rhizome Philosophy', 'الأهداف')}</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            {goals.map((item, index) => (
              <li key={index}>{t(`goal-${index}`, item.en, item.ar)}</li>
            ))}
          </ul>

          <p className={`rs-body ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('partnership-text', 'Rhizome Syria is reimagining international cooperation. We operate in a unique partnership with the Rhizome Community Foundation in Canada. While both organizations are fully independent legal entities, we share governance, coordinate programs, and hold each other accountable through a shared strategic vision. This model ensures Syrian leadership, global connection with local protection, and radical collaboration built on mutual respect and shared goals.', 'تعمل ريزوم سوريا بالشراكة مع مؤسسة ريزوم المجتمعية الكندية، بقيادة سورية، لإعادة تصور التمويل الدولي وتعزيز وكالة المجتمعات المتأثرة بالتحديات المتقاطعة. يركز هذا النموذج على تمكين المجتمعات المحلية من رسم أولوياتها وابتكار حلول من واقعها مع ربطها بالموارد العالمية وحمايتها من الضغوط الخارجية دون المساس بالمعايير الدولية.')}</p>
        </div>
      </section>

      <section className="rs-section-alt">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className={`rs-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('current-activities', 'Current Activities', 'الأنشطة الحالية')}</h2>
            <p className={`rs-body-large ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('activities-description', 'Rhizome Syria operates a decentralized network of local partnerships while maintaining full adaptability in its engagement with formal and informal structures.', 'تدير ريزوم سوريا شبكة لامركزية من الشراكات المحلية مع الحفاظ على قدرة تكيف كاملة في تفاعلها مع الهياكل الرسمية وغير الرسمية.')}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Feminist-Led Community Center (Latakia)',
                titleAr: 'مركز الدعم المجتمعي بقيادة نسوية في اللاذقية',
                description: 'A dedicated space providing economic opportunities, skills training, and organizational empowerment for women.',
                descriptionAr: 'توفير التمكين الاقتصادي والتنظيمي للنساء.',
                icon: Heart,
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Collaborative Cultural Projects (Aleppo & Latakia)',
                titleAr: 'المشاريع الثقافية التعاونية',
                description: 'Preserving and celebrating Syrian culture through community-based theater, visual arts, and oral history initiatives.',
                descriptionAr: 'مبادرات المسرح والفنون البصرية والتاريخ الشفوي في حلب واللاذقية.',
                icon: Palette,
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Peacebuilding Dialogues (Northern & Central Regions)',
                titleAr: 'حوارات بناء السلام',
                description: 'Facilitating participatory workshops that build trust, resolve conflict, and foster social cohesion across diverse communities.',
                descriptionAr: 'ورش عمل تشاركية في المناطق الشمالية والوسطى.',
                icon: Shield,
                gradient: 'from-orange-500 to-red-500',
              },
              {
                title: 'Digital Storytelling & Memory Preservation',
                titleAr: 'السرد الرقمي',
                description: 'Using participatory digital tools to create a collective archive of Syrian stories and experiences, ensuring our history is not forgotten.',
                descriptionAr: 'الحفاظ على الذاكرة من خلال الأدوات الرقمية التشاركية.',
                icon: Image,
                gradient: 'from-green-500 to-blue-500',
              },
              {
                title: 'Community Fundraising Platforms (Coastal Region)',
                titleAr: 'حملات جمع التبرعات',
                description: 'Developing local fundraising initiatives that empower communities to generate and manage their own resources independently.',
                descriptionAr: 'منصات مجتمعية ومبادرات جمع التبرعات على الساحل.',
                icon: Target,
                gradient: 'from-yellow-500 to-orange-500',
              },
            ].map((activity, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="rs-card">
                <div className={`w-14 h-14 bg-gradient-to-r ${activity.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <activity.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className={`rs-heading-3 mb-2 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`activity-${index}-title`, activity.title, activity.titleAr)}</h3>
                <p className={`rs-body ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`activity-${index}-desc`, activity.description, activity.descriptionAr)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`rs-heading-2 mb-8 text-center ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('our-board-syria', 'Our Board (Syria)', 'مجلس إدارتنا (سوريا)')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member, index) => (
              <div key={index} className="rs-card text-center">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className={`rs-heading-3 mb-1 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`board-member-${index}-name`, member.name, member.nameAr)}</h3>
                <p className={`text-sm text-purple-600 mb-2 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`board-member-${index}-role`, member.role, member.roleAr)}</p>
                <p className={`rs-body text-sm ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`board-member-${index}-bio`, member.bio, member.bioAr)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedLeaders />

      <section className="rs-hero text-center">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className={`rs-heading-2 text-white mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('get-involved-title', 'Ready to join or partner?', 'مستعد للانضمام أو الشراكة؟')}</h2>
            <p className={`rs-body-large text-white/90 mb-8 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('get-involved-description', 'Whether in Syria or Canada, your participation helps us grow resilient, empowered communities.', 'سواء في سوريا أو كندا، مشاركتك تساعدنا في نمو مجتمعات مرنة وممكنة.')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#volunteer" className="rs-button-primary bg-white text-purple-600 hover:bg-gray-100">
                {t('apply-now', 'Apply Now', 'تقدم الآن')}
              </a>
              <a href="#volunteer" className="rs-button-secondary border-white text-white hover:bg-white hover:text-purple-600">
                {t('volunteer', 'Volunteer', 'تطوع')}
              </a>
            </div>
            <div className="mt-6 text-white/80">
              <p>{t('contact-info', 'Contact us at', 'اتصل بنا على')} info@rhizomsyria.org</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="volunteer" className="rs-section">
        <div className="container mx-auto px-4">
          <SyrianCitiesMap />
          <VolunteerForms />
        </div>
      </section>
    </div>
  );
};

export default RhizomeSyriaPage;
