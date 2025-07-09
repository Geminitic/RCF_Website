import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Award, Calendar, Globe, Handshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const timeline = [
    {
      year: 'December 2024',
      title: 'Rhizome Syria & Diaspora Work Group Formation',
      titleAr: 'تشكيل مجموعة عمل ريزوم سوريا والشتات',
      description: 'Rhizome Syria & Diaspora Work Group formed in the wake of major political changes in Syria, marking a new chapter in Syrian community organizing.',
      descriptionAr: 'تشكلت مجموعة عمل ريزوم سوريا والشتات في أعقاب التغييرات السياسية الكبرى في سوريا، مما يمثل فصلاً جديداً في التنظيم المجتمعي السوري.'
    },
    {
      year: 'February 2025',
      title: 'Federal Registration in Canada',
      titleAr: 'التسجيل الفيدرالي في كندا',
      description: 'Rhizome Community Foundation achieves federal registration in Canada. Board members: Syrian, Indian, and Filipina originated Canadians.',
      descriptionAr: 'حققت مؤسسة مجتمع الريزوم التسجيل الفيدرالي في كندا. أعضاء مجلس الإدارة: كنديون من أصول سورية وهندية وفلبينية.'
    },
    {
      year: 'March 2025',
      title: 'Cultural Heritage Program Launch - "Aleppo Roots" Event',
      titleAr: 'إطلاق برنامج التراث الثقافي - فعالية "جذور حلب"',
      description: 'Launch of our Cultural Heritage Documentation Program with the inaugural "Aleppo Roots" event featuring theatre and film production, celebrating Aleppo\'s rich cultural heritage, with about 300 people attending.',
      descriptionAr: 'إطلاق برنامج توثيق التراث الثقافي مع فعالية "جذور حلب" الافتتاحية التي تضم المسرح وإنتاج الأفلام، احتفالاً بالتراث الثقافي الغني لحلب، بحضور حوالي 300 شخص.'
    },
    {
      year: 'April 2025',
      title: 'Rhizome Network Syria Launch',
      titleAr: 'إطلاق شبكة ريزوم سوريا',
      description:
        'Launch of Rhizome Network Syria. Rhizome formed two new partnerships, including a 300-volunteer team in North Syria.',
      descriptionAr:
        'إطلاق شبكة ريزوم سوريا. شكّلت ريزوم شراكتين جديدتين، إحداهما فريق يضم 300 متطوع في شمال سوريا.'
    },
    {
      year: 'April 15 2025',
      title: 'Community Garden Established in Amiskwaciy Wâskahikan',
      titleAr: 'تأسيس حديقة مجتمعية في أميسكواسي واسكاهيكان',
      description:
        'A Community Garden is established in Edmonton (Amiskwaciy Wâskahikan) through a partnership with CO*Lab and local community members knowledgeable in native seed cultivation for teas and food medicines.',
      descriptionAr:
        'تم إنشاء حديقة مجتمعية في إدمونتون (أميسكواسي واسكاهيكان) بشراكة مع CO*Lab وأفراد المجتمع المحلي المطلعين على زراعة البذور المحلية للأعشاب والأطعمة الطبية.'
    },
    {
      year: 'April 24 2025',
      title: 'Amiskwaciy Artist Partnership',
      titleAr: 'شراكة فنية في أميسكواسي',
      description:
        'A local artist from Amiskwaciy begins selling art prints at a city-supported art shop in partnership with the Edmonton Arts Council.',
      descriptionAr:
        'فنان محلي من أميسكواسي يبدأ بيع مطبوعات فنية في متجر فني مدعوم من المدينة بالشراكة مع مجلس الفنون في إدمونتون.'
    },
    {
      year: 'May 01 2025 – Ongoing',
      title: 'Weekly Open Garden Times Begin',
      titleAr: 'بدء أوقات الحديقة المفتوحة أسبوعياً',
      description:
        'Weekly open garden times begin, intentionally inviting both housed and unhoused neighbours to participate in gardening, harvesting, and community-building.',
      descriptionAr:
        'بدء أوقات الحديقة المفتوحة أسبوعياً مع دعوة المقيمين وغير المقيمين للمشاركة في الزراعة والحصاد وبناء المجتمع.'
    },
    {
      year: 'June 2025 – Ongoing',
      title: 'Bi-weekly Garden Collaborations',
      titleAr: 'إطلاق التعاونات نصف الشهرية في الحديقة',
      description:
        'Bi-weekly collaborations are launched, bringing in local groups, collectives, and individuals to co-create within the garden space and share skills.',
      descriptionAr:
        'إطلاق تعاونات نصف شهرية تجلب المجموعات والفرق والأفراد المحليين للتشارك في مساحة الحديقة وتبادل المهارات.'
    },
    {
      year: 'May 2025',
      title: 'Community Engagement - Aleppo Castle Eid Family Festivities',
      titleAr: 'المشاركة المجتمعية - احتفالات عيد قلعة حلب العائلية',
      description: 'Community celebration event bringing families together to honor traditions and strengthen bonds during Eid festivities, part of our ongoing Cultural Heritage Documentation Program.',
      descriptionAr: 'فعالية احتفال مجتمعي تجمع العائلات معاً لتكريم التقاليد وتقوية الروابط خلال احتفالات العيد، كجزء من برنامج توثيق التراث الثقافي المستمر.'
    },
    {
      year: 'June 2025',
      title: 'Digital Literacy & Media Empowerment Initiative and Innovation Hub Launch',
      titleAr: 'إطلاق مبادرة محو الأمية الرقمية وتمكين الإعلام ومركز الابتكار',
      description: 'Launch of Digital Literacy & Media Empowerment Initiative and Innovation Hub in Latakia. Rhizome Syria forms its board and seeks legal registration.',
      descriptionAr: 'إطلاق مبادرة محو الأمية الرقمية وتمكين الإعلام ومركز الابتكار في اللاذقية. تشكل ريزوم سوريا مجلس إدارتها وتسعى للتسجيل القانوني.'
    },
    // Timeline entries beyond June 2025 have been removed until completed
  ];

  const branches = [
    {
      name: 'Rhizome Syria',
      nameAr: 'ريزوم سوريا',
      location: 'Damascus, Aleppo, Homs, Latakia',
      locationAr: 'دمشق، حلب، حمص، اللاذقية',
      focus: 'On-ground community building and direct support',
      focusAr: 'بناء المجتمع الميداني والدعم المباشر',
      programs: 6,
      members: 800,
      image: '/WhatsApp Image 2025-06-19 at 12.35.09 PM.jpeg'
    },
    {
      name: 'Rhizome Canada',
      nameAr: 'ريزوم كندا',
      location: 'Edmonton, Toronto, Montreal, Vancouver',
      locationAr: 'إدمونتون، تورونتو، مونتريال، فانكوفر',
      focus: 'Diaspora engagement and international coordination',
      focusAr: 'إشراك الشتات والتنسيق الدولي',
      programs: 3,
      members: 650,
      image: '/WhatsApp Image 2025-06-19 at 12.35.10 PM.jpeg'
    }
  ];

  const team = [
    {
      name: 'Akshya',
      nameAr: 'أكشيا',
      role: 'Board Member',
      roleAr: 'عضو مجلس إدارة',
      bio: 'Akshya moves through communities with curiosity and care, blending psychology, anthropology, and a deep commitment to social justice. With roots stretching from Chennai, through Kuwait and Saudi Arabia, to amiskwacîwâskahikan (Edmonton), they understand intimately how cultural histories and systemic challenges shape our shared realities.',
      bioAr: 'تتنقل أكشيا عبر المجتمعات بفضول واهتمام، مازجة بين علم النفس والأنثروبولوجيا والالتزام العميق بالعدالة الاجتماعية. مع جذور تمتد من تشيناي، عبر الكويت والسعودية، إلى إدمونتون، تفهم بشكل وثيق كيف تشكل التواريخ الثقافية والتحديات النظامية واقعنا المشترك.',
      image: '/akshya.jpeg'
    },
    {
      name: 'Sarah',
      nameAr: 'سارة',
      role: 'Board Member',
      roleAr: 'عضو مجلس إدارة',
      bio: 'Sarah is a creative force and community catalyst shaped by early experiences in a Philippine hometown and a lifelong connection to Edmonton\'s Chinatown. Observing firsthand how communities flourish through collaboration, and falter without it, they dedicate themselves tirelessly to community wellness.',
      bioAr: 'سارة قوة إبداعية ومحفز مجتمعي تشكلت من خلال تجارب مبكرة في مسقط رأس في الفلبين وارتباط مدى الحياة بحي الصينيين في إدمونتون. من خلال الملاحظة المباشرة لكيفية ازدهار المجتمعات عبر التعاون وتعثرها بدونه، تكرس نفسها بلا كلل لرفاهية المجتمع.',
      image: '/sarah.jpeg'
    },
    {
      name: 'Amer',
      nameAr: 'عامر',
      role: 'Board Member',
      roleAr: 'عضو مجلس إدارة',
      bio: 'Amer moves seamlessly between policy corridors and grassroots communities, blending strategic rigor with genuine empathy. Shaped by experiences spanning Syrian newsrooms, Alberta\'s Indigenous relations, and anti-racism initiatives, they intimately understand how institutional power can be harnessed for meaningful change.',
      bioAr: 'يتنقل عامر بسلاسة بين أروقة السياسة والمجتمعات الشعبية، مازجاً بين الصرامة الاستراتيجية والتعاطف الحقيقي. تشكلت خبراته عبر غرف الأخبار السورية وعلاقات ألبرتا مع السكان الأصليين ومبادرات مكافحة العنصرية، مما يمنحه فهماً عميقاً لكيفية تسخير القوة المؤسسية للتغيير الهادف.',
      image: '/amer.jpeg'
    }
  ];

  const partners = [
    {
      name: 'Anamil Baidaa Volunteer Team',
      nameAr: 'فريق متطوعي أناميل بيضاء',
      description: 'Dedicated volunteer network providing grassroots support and community organizing across multiple regions.',
      descriptionAr: 'شبكة متطوعين مكرسة تقدم الدعم الشعبي والتنظيم المجتمعي عبر مناطق متعددة.',
      type: 'Community Partner',
      typeAr: 'شريك مجتمعي',
      image: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Partner+Organization'
    },
    {
      name: 'Crystal Media Foundation',
      nameAr: 'مؤسسة كريستال الإعلامية',
      description: 'Media production and storytelling organization specializing in community narratives and cultural documentation.',
      descriptionAr: 'منظمة إنتاج إعلامي وسرد متخصصة في السرديات المجتمعية والتوثيق الثقافي.',
      type: 'Media Partner',
      typeAr: 'شريك إعلامي',
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Partner+Organization'
    },
    {
      name: 'Syrian Compass Youth',
      nameAr: 'بوصلة الشباب السوري',
      description: 'Youth-led organization focused on empowering young Syrians through leadership development and community engagement.',
      descriptionAr: 'منظمة بقيادة الشباب تركز على تمكين الشباب السوري من خلال تطوير القيادة والمشاركة المجتمعية.',
      type: 'Youth Partner',
      typeAr: 'شريك شبابي',
      image: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Partner+Organization'
    },
    {
      name: 'Amal Organization',
      nameAr: 'منظمة أمل',
      description: 'Humanitarian organization providing essential services and support to Syrian communities in need.',
      descriptionAr: 'منظمة إنسانية تقدم الخدمات الأساسية والدعم للمجتمعات السورية المحتاجة.',
      type: 'Humanitarian Partner',
      typeAr: 'شريك إنساني',
      image: 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Partner+Organization'
    }
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
              {t('about-title', 'About Rhizome Community Foundation', 'عن مؤسسة ريزوم المجتمعية')}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {t(
                'about-subtitle',
                'Rhizome Syria gathers the vibrant voices of civil society into a decentralized network. We believe sustainable growth comes from interwoven, community-led pathways that adapt in every circumstance.',
                'يجمع ريزوم سوريا الأصوات النابضة في المجتمع المدني بشبكة لامركزية. نؤمن بأن النمو المستدام يأتي من مسارات مجتمعية متداخلة قادرة على التكيف في كل الظروف.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-emerald-600 mr-3" />
                <h2 className={`text-3xl font-bold text-stone-900 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('our-mission', 'Our Purpose', 'رسالتنا')}
                </h2>
              </div>
              <p className={`text-lg text-stone-700 leading-relaxed ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t(
                  'mission-text',
                  'We cultivate resilient networks that unite communities of heritage, resilience, and transformation, fostering collaboration, safeguarding cultural heritage, and empowering individuals to drive meaningful transformation in their communities.',
                  'نرعى شبكات مرنة توحد مجتمعات الإرث والمرونة والتحول، نعزز التعاون ونحمي التراث الثقافي ونمكن الأفراد من قيادة التحول الهادف في مجتمعاتهم.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-stone-600 mr-3" />
                <h2 className={`text-3xl font-bold text-stone-900 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('our-vision', 'Our Aspiration', 'تطلعنا')}
                </h2>
              </div>
              <p className={`text-lg text-stone-700 leading-relaxed ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t(
                  'vision-text',
                  'A world where communities of heritage facing local and global exclusion such as Syrians, Queer Asians, and Indigenous peoples of Turtle Island flourish through interconnected support systems, where cultural identity is celebrated and preserved, and where every individual has the power to contribute to transformative social change.',
                  'عالم تزدهر فيه مجتمعات الإرث التي تواجه الإقصاء المحلي والعالمي مثل السوريين والآسيويين الكوير والسكان الأصليين في جزيرة السلحفاة من خلال أنظمة دعم مترابطة، حيث تُحتفى بالهوية الثقافية وتُحفظ، وحيث يملك كل فرد القدرة على المساهمة في التغيير الاجتماعي التحويلي.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              {t('our-journey', 'Our Journey', 'رحلتنا')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t(
                'journey-description',
                'From the formation of our work group to building a comprehensive network of support and advocacy.',
                'من تشكيل مجموعة العمل إلى بناء شبكة شاملة من الدعم والمناصرة.'
              )}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-lg font-bold text-emerald-600 mb-2">{item.year}</div>
                    <h3 className={`text-xl font-bold text-stone-900 mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(`timeline-${index}-title`, item.title, item.titleAr)}
                    </h3>
                    <p className={`text-stone-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(`timeline-${index}-desc`, item.description, item.descriptionAr)}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              {t('our-branches', 'Our Branches', 'فروعنا')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t(
                'branches-description',
                'Two complementary branches working together to serve Syrian communities globally. Note: Programs refer to our comprehensive long-term initiatives, while events are specific activities within these programs.',
                'فرعان متكاملان يعملان معاً لخدمة المجتمعات السورية عالمياً. ملاحظة: تشير البرامج إلى مبادراتنا الشاملة طويلة المدى، بينما الفعاليات هي أنشطة محددة ضمن هذه البرامج.'
              )}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={t('branch-name', branch.name, branch.nameAr)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className={`text-2xl font-bold text-stone-900 mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('branch-name', branch.name, branch.nameAr)}
                  </h3>
                  
                  <div className="flex items-center text-stone-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                      {t('branch-location', branch.location, branch.locationAr)}
                    </span>
                  </div>
                  
                  <p className={`text-stone-700 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('branch-focus', branch.focus, branch.focusAr)}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-emerald-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-emerald-600">{branch.programs}</div>
                      <div className={`text-sm text-emerald-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                        {t('active-programs', 'Active Programs', 'برامج نشطة')}
                      </div>
                    </div>
                    <div className="text-center bg-stone-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-stone-600">{branch.members}</div>
                      <div className={`text-sm text-stone-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                        {t('members', 'Members', 'أعضاء')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              {t('our-team', 'Our Leadership Team', 'فريق القيادة')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t(
                'team-description',
                'Dedicated leaders committed to building stronger communities.',
                'قادة مكرسون ملتزمون ببناء مجتمعات أقوى.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={t('member-name', member.name, member.nameAr)}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100"
                />
                
                <h3 className={`text-xl font-bold text-stone-900 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('member-name', member.name, member.nameAr)}
                </h3>
                
                <p className={`text-emerald-600 font-semibold mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('member-role', member.role, member.roleAr)}
                </p>
                
                <p className={`text-stone-600 text-sm ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('member-bio', member.bio, member.bioAr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              {t('our-partners', 'Our Partners', 'شركاؤنا')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t(
                'partners-description',
                'Collaborating with dedicated organizations to amplify our impact and reach.',
                'التعاون مع منظمات مكرسة لتضخيم تأثيرنا ووصولنا.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={t('partner-name', partner.name, partner.nameAr)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold text-stone-900 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('partner-name', partner.name, partner.nameAr)}
                    </h3>
                    <div className="flex items-center">
                      <Handshake className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className={`text-sm text-emerald-600 font-medium ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                        {t('partner-type', partner.type, partner.typeAr)}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-stone-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('partner-description', partner.description, partner.descriptionAr)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;