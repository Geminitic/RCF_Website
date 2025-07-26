import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
      role: 'President',
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
      name: 'Silva Ismael',
      nameAr: 'سيلفا اسماعيل',
      role: 'Programs Lead',
      roleAr: 'قائدة البرامج',
      bio: "Manages Rhizome Syria's programmatic portfolio, with a focus on feminist frameworks, coastal civic organizing, and training modules.",
      bioAr: 'تدير محفظة برامج ريزوم سوريا، مع التركيز على الأطر النسوية والتنظيم المدني الساحلي ووحدات التدريب.',
      image: 'https://via.placeholder.com/400x400/EF4444/FFFFFF?text=Board+Member'
    }
  ];

  return (
    <div className="rhizome-syria min-h-screen bg-white pt-16">
      <section className="rs-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`rs-heading-1 mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
          >
            {t('rhizome-syria-title', 'Rhizome Syria', 'ريزوم سوريا')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`rs-body-large text-white/90 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
          >
            {t('rhizome-syria-subtitle', 'Syria, Reimagined From the Roots Up.', 'صوت سوريا في مؤسسة ريزوم المجتمعية - مستقل، متمحور حول المجتمع، وموحد فوق الانقسامات.')}
          </motion.p>
        </div>
      </section>

      <section className="rs-section bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <h2 className={`rs-heading-2 text-center ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('overview-title', 'About Us', 'عن ريزوم سوريا')}</h2>
          <p className={`rs-body-large ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('overview-intro', 'Rhizome Syria is a network of Syrian civil society leaders, activists, and communities dedicated to rebuilding a cohesive and stable nation through the will and hands of its own people.', 'رايزوم سوريا تجمع كافة الأصوات النابضة في المجتمع المدني السوري ضمن تحالف تكاملي وشبكة عقدية لامركزية.')}</p>
        </div>
      </section>

      <section className="rs-section-alt">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`rs-heading-2 text-center mb-10 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('our-board-syria', 'Syria Team', 'الفريق السوري')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member, index) => (
              <div key={index} className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4"><Star className="h-6 w-6 text-yellow-400" /></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className={`rs-heading-3 mb-2 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`board-member-${index}-name`, member.name, member.nameAr)}</h3>
                  <p className={`text-purple-600 font-medium mb-3 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`board-member-${index}-role`, member.role, member.roleAr)}</p>
                  <p className={`rs-body text-sm ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t(`board-member-${index}-bio`, member.bio, member.bioAr)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedLeaders />

      <section className="rs-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 via-orange-500 to-red-500" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className={`rs-heading-2 mb-6 text-white ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('get-involved-title', 'Ready to join or partner?', 'مستعد للانضمام أو الشراكة؟')}</h2>
          <p className={`rs-body-large text-white/90 mb-8 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}>{t('get-involved-description', 'Whether in Syria or Canada, your participation helps us grow resilient, empowered communities.', 'سواء في سوريا أو كندا، مشاركتك تساعدنا في نمو مجتمعات مرنة وممكنة.')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#volunteer" className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-full hover:bg-gray-100 shadow-lg">{t('apply-now', 'Apply Now', 'تقدم الآن')}</a>
            <a href="#volunteer" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/30">{t('volunteer', 'Volunteer', 'تطوع')}</a>
          </div>
          <div className="mt-6 text-white/80"><p>{t('contact-info', 'Contact us at', 'اتصل بنا على')} info@rhizomsyria.org</p></div>
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
