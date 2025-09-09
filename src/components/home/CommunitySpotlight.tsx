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
      description:
        'Documenting stories of resilience from Aleppo. Her latest work focuses on community-led rebuilding efforts.',
      descriptionAr:
        'توثق قصص المرونة من حلب. يركز عملها الأخير على جهود إعادة البناء بقيادة المجتمع.',
      image:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2680&auto=format&fit=crop',
    },
    {
      id: '2',
      name: 'Youssef Ibrahim',
      nameAr: 'يوسف إبراهيم',
      role: 'Community Organizer',
      roleAr: 'منظم مجتمعي',
      description:
        'Founder of a local initiative providing digital literacy workshops to youth in rural Damascus.',
      descriptionAr:
        'مؤسس مبادرة محلية تقدم ورش محو الأمية الرقمية للشباب في ريف دمشق.',
      image:
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '3',
      name: 'Layla Murad',
      nameAr: 'ليلى مراد',
      role: 'Artist & Activist',
      roleAr: 'فنانة وناشطة',
      description:
        'Creates powerful murals that explore themes of memory, displacement, and hope. Based in Berlin.',
      descriptionAr:
        'تبدع جداريات قوية تستكشف مواضيع الذاكرة والنزوح والأمل. مقيمة في برلين.',
      image:
        'https://images.unsplash.com/photo-1517423568346-3bce39c723f3?q=80&w=2736&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--rs-light-gray)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className={`heading-2 text-4xl font-bold mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t('spotlight-title', 'Community Spotlight', 'أضواء على المجتمع')}
          </h2>
          <p
            className={`body-large text-xl max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(
              'spotlight-description',
              'Profiles of leaders, filmmakers, artists, and activists. Hover over a card to see their contribution.',
              'ملفات شخصية للقادة وصناع الأفلام والفنانين والناشطين. مرر فوق البطاقة لرؤية مساهمتهم.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--rs-primary-purple)] to-transparent opacity-70" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <p
                    className={`text-sm font-medium mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {t('member-role', member.role, member.roleAr)}
                  </p>
                  <h3
                    className={`heading-3 text-xl font-bold mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {t('member-name', member.name, member.nameAr)}
                  </h3>
                  <p
                    className={`body text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {t(
                      'member-description',
                      member.description,
                      member.descriptionAr
                    )}
                  </p>
                  <a
                    href="/community-wall"
                    className={`inline-flex items-center text-sm text-white hover:underline transition-all ${
                      currentLanguage.code === 'ar'
                        ? 'font-arabic space-x-reverse'
                        : 'space-x-2'
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
