import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface CommunityMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

const CommunitySpotlight: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const members: CommunityMember[] = [
    {
      id: '1',
      name: 'Amina Al-Jamil',
      nameAr: 'أمينة الجميل',
      role: 'Filmmaker',
      roleAr: 'صانعة أفلام',
      description: 'Documenting stories of resilience from Aleppo. Her latest work focuses on community-led rebuilding efforts.',
      descriptionAr: 'توثق قصص المرونة من حلب. يركز عملها الأخير على جهود إعادة البناء بقيادة المجتمع.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2680&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Youssef Ibrahim',
      nameAr: 'يوسف إبراهيم',
      role: 'Community Organizer',
      roleAr: 'منظم مجتمعي',
      description: 'Founder of a local initiative providing digital literacy workshops to youth in rural Damascus.',
      descriptionAr: 'مؤسس مبادرة محلية تقدم ورش محو الأمية الرقمية للشباب في ريف دمشق.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Layla Murad',
      nameAr: 'ليلى مراد',
      role: 'Artist & Activist',
      roleAr: 'فنانة وناشطة',
      description: 'Creates powerful murals that explore themes of memory, displacement, and hope. Based in Berlin.',
      descriptionAr: 'تبدع جداريات قوية تستكشف مواضيع الذاكرة والنزوح والأمل. مقيمة في برلين.',
      image: 'https://images.unsplash.com/photo-1517423568346-3bce39c723f3?q=80&w=2736&auto=format&fit=crop'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`section-title ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t('spotlight-title', 'Community Spotlight', 'أضواء على المجتمع')}
          </h2>
          <p className={`section-description ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t(
              'spotlight-description',
              'Profiles of leaders, filmmakers, artists, and activists. Hover over a card to see their contribution.',
              'ملفات شخصية للقادة وصناع الأفلام والفنانين والناشطين. مرر فوق البطاقة لرؤية مساهمتهم.'
            )}
          </p>
        </motion.div>

        <div className="spotlight-grid">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flip-card"
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <h3 className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                    {t('member-role', member.role, member.roleAr)}
                  </h3>
                </div>
                <div className="flip-card-back">
                  <h3 className={`mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('member-name', member.name, member.nameAr)}
                  </h3>
                  <p className={`mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('member-description', member.description, member.descriptionAr)}
                  </p>
                  <a
                    href="/community-wall"
                    className={`inline-flex items-center space-x-2 text-white underline hover:no-underline transition-all ${
                      currentLanguage.code === 'ar' ? 'font-arabic space-x-reverse' : ''
                    }`}
                  >
                    <span>{t('learn-more', 'Learn More', 'اعرف المزيد')}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;