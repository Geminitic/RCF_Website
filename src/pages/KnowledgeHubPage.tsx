import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Book, FileText, Users, Network, Zap } from 'lucide-react';

const KnowledgeHubPage: React.FC = () => {
  const { currentLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('rhizomatic-organization');

  const sections = [
    {
      id: 'rhizomatic-organization',
      title: 'The Rhizomatic Organization',
      titleAr: 'التنظيم الريزومي',
      icon: <Network className="h-5 w-5" />,
    },
    {
      id: 'resources',
      title: 'Resources',
      titleAr: 'المصادر',
      icon: <Book className="h-5 w-5" />,
    },
    {
      id: 'community',
      title: 'Community',
      titleAr: 'المجتمع',
      icon: <Users className="h-5 w-5" />,
    },
  ];

  // Rhizomatic Organization content
  const principles = [
    {
      en: 'Distributed Intelligence',
      ar: 'الذكاء الموزّع',
      tradEn: 'Knowledge and authority concentrate at the top.',
      tradAr: 'المعرفة والسلطة تتركزان في القمة.',
      rhizoEn: 'Intelligence spreads throughout the network.',
      rhizoAr: 'الذكاء موزّع عبر الشبكة.',
      descEn:
        "Every node carries the organization's DNA—purpose, values, and operating principles. Solutions can emerge anywhere by tapping collective intelligence.",
      descAr:
        'كل عقدة تحمل شفرة التنظيم: الغاية والقيم ومبادئ العمل. يمكن للحلول أن تنشأ في أي موضع بالاستناد إلى الذكاء الجمعي.',
    },
    {
      en: 'Adaptive Resilience',
      ar: 'مرونة تكيفية',
      tradEn: 'Stability through control and standardization.',
      tradAr: 'الاستقرار عبر التحكم والتوحيد.',
      rhizoEn: 'Stability through constant adaptation.',
      rhizoAr: 'الاستقرار عبر التكيف المستمر.',
      descEn:
        'Like mycelial networks recovering after damage, rhizomatic organizations stay stable by adapting. When one part struggles, adjacent nodes support while the system reconfigures.',
      descAr:
        'مثل شبكات الميسيليوم التي تتعافى من الضرر، يحافظ التنظيم الريزومي على الاستقرار عبر التكيف. عندما يتعثر جزء تدعمه العقد المجاورة بينما يعيد النظام تشكيل نفسه.',
    },
    {
      en: 'Generative Relationships',
      ar: 'علاقات مولِّدة',
      tradEn: 'Strength comes from powerful individual parts.',
      tradAr: 'القوة مصدرها الأفراد الأقوياء.',
      rhizoEn: 'Strength comes from the quality of connections.',
      rhizoAr: 'القوة في جودة الروابط بين الأجزاء.',
      descEn:
        'Power lies not in individual stars but in rich connections among people and teams. Growth comes from forming new relationships inside and beyond the organization.',
      descAr:
        'القوة ليست في الأفراد البارزين بل في كثافة الروابط بين الأشخاص والفرق. يحدث النمو عبر تكوين علاقات جديدة داخل التنظيم وخارجه.',
    },
    {
      en: 'Evolutionary Purpose',
      ar: 'غاية تتطور باستمرار',
      tradEn: 'Fixed strategic goals set at the top.',
      tradAr: 'أهداف استراتيجية ثابتة تقررها القمة.',
      rhizoEn: 'Purpose evolves through ongoing dialogue.',
      rhizoAr: 'الغاية تتطور عبر حوار مستمر.',
      descEn:
        'Instead of chasing preset targets, rhizomatic organizations sense and respond to emerging conditions. Purpose evolves through continuous conversation about the unique contribution to make.',
      descAr:
        'بدلًا من مطاردة أهداف مسبقة، يستشعر التنظيم الريزومي الظروف الناشئة ويستجيب لها. تتطور الغاية عبر نقاش مستمر حول ما يقدّمه التنظيم على نحو فريد.',
    },
    {
      en: 'Stewardship Ethos',
      ar: 'أخلاقيات الرعاية',
      tradEn: 'Leaders control resources and direct others.',
      tradAr: 'القادة يتحكمون بالموارد ويوجّهون الآخرين.',
      rhizoEn: 'Everyone stewards resources and serves the whole.',
      rhizoAr: 'الجميع يرعى الموارد ويخدم الكل.',
      descEn:
        'Members act as stewards—caring for responsibilities, shared resources, collective knowledge, and wider impact. Leadership is service, not control.',
      descAr:
        'يعمل الأعضاء كرعاة: يعتنون بالمسؤوليات والموارد المشتركة والمعرفة الجمعية وبالأثر على النظم الأوسع. القيادة خدمة لا تحكم.',
    },
  ];

  // Resources section content
  const resourceCategories = [
    {
      title: 'Community Organizing',
      titleAr: 'التنظيم المجتمعي',
      description:
        'Guides and methodologies for building community power and engagement',
      descriptionAr: 'أدلة ومنهجيات لبناء القوة المجتمعية والمشاركة',
      icon: Users,
      color: 'teal',
    },
    {
      title: 'Horizontal Leadership',
      titleAr: 'القيادة الأفقية',
      description:
        'Resources on shared leadership and collective decision-making',
      descriptionAr: 'مصادر حول القيادة المشتركة وصنع القرار الجماعي',
      icon: Network,
      color: 'purple',
    },
    {
      title: 'Knowledge Systems',
      titleAr: 'أنظمة المعرفة',
      description: 'Tools for community-led research and indigenous knowledge',
      descriptionAr: 'أدوات للبحوث التي يقودها المجتمع والمعرفة الأصلية',
      icon: Book,
      color: 'blue',
    },
    {
      title: 'Documentation',
      titleAr: 'التوثيق',
      description: 'Templates and guides for capturing community initiatives',
      descriptionAr: 'قوالب وأدلة لتوثيق المبادرات المجتمعية',
      icon: FileText,
      color: 'orange',
    },
  ];

  // Community section content
  const communityMembers = [
    {
      name: 'Rhizome Practitioners Network',
      nameAr: 'شبكة ممارسي الريزوم',
      description:
        'A global community of practice sharing experiences and innovations in rhizomatic organization',
      descriptionAr:
        'مجتمع عالمي للممارسة يشارك الخبرات والابتكارات في التنظيم الريزومي',
      members: 650,
      focus: 'Practice',
      focusAr: 'الممارسة',
    },
    {
      name: 'Research Collective',
      nameAr: 'مجموعة البحث',
      description:
        'Scholars and practitioners documenting and theorizing emerging organizational forms',
      descriptionAr:
        'علماء وممارسون يوثقون ويضعون نظريات للأشكال التنظيمية الناشئة',
      members: 120,
      focus: 'Research',
      focusAr: 'البحث',
    },
    {
      name: 'Community Builders Alliance',
      nameAr: 'تحالف بناة المجتمع',
      description:
        'Grassroots organizers applying rhizomatic principles to community development',
      descriptionAr: 'منظمون شعبيون يطبقون مبادئ الريزوم على التنمية المجتمعية',
      members: 800,
      focus: 'Implementation',
      focusAr: 'التنفيذ',
    },
    {
      name: 'Horizontal Leadership Forum',
      nameAr: 'منتدى القيادة الأفقية',
      description:
        'Cross-sector conversations on evolving leadership practices for complex challenges',
      descriptionAr:
        'محادثات عبر القطاعات حول تطوير ممارسات القيادة للتحديات المعقدة',
      members: 450,
      focus: 'Leadership',
      focusAr: 'القيادة',
    },
  ];

  return (
    <div className="relative min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-800 via-sky-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-30 animate-pulse" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-30 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div
              className={`mb-6 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('knowledge-hub-title', 'Knowledge Hub', 'مركز المعرفة')}
              </h1>
            </div>
            <div
              className={`max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
            >
              <p className="text-xl text-indigo-100">
                {t(
                  'knowledge-hub-subtitle',
                  'Explore resources, frameworks, and learning materials to deepen your understanding of rhizomatic organization and community-led development.',
                  'استكشف المصادر والأطر ومواد التعلّم لتعميق فهمك للتنظيم الريزومي والتنمية التي يقودها المجتمع.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mb-px overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`inline-flex items-center px-4 py-4 border-b-2 font-medium text-sm ${
                  activeSection === section.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } ${currentLanguage.code === 'ar' ? 'flex-row-reverse' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.icon}
                <span
                  className={`${currentLanguage.code === 'ar' ? 'mr-2' : 'ml-2'}`}
                >
                  {t(`section-${section.id}`, section.title, section.titleAr)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      {activeSection === 'rhizomatic-organization' && (
        <div className="py-12 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t(
                    'rhizomatic-organization-title',
                    'The Rhizomatic Organization',
                    'التنظيم الريزومي'
                  )}
                </h2>
                <p className="text-lg text-gray-600">
                  {t(
                    'rhizomatic-organization-subtitle',
                    "A practical approach to organizational design inspired by nature's most resilient systems",
                    'مقاربة تنظيمية عملية مستلهمة من أنظمة الطبيعة الأكثر صمودًا'
                  )}
                </p>
              </div>

              {/* Core Principles */}
              <section className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {t('core-principles', 'Core Principles', 'المبادئ الأساسية')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {principles.map((principle, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-xl font-semibold text-teal-700 mb-3">
                        {t(`principle-${index}`, principle.en, principle.ar)}
                      </h4>
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">
                          {t(
                            `principle-${index}-trad`,
                            principle.tradEn,
                            principle.tradAr
                          )}
                        </p>
                        <p className="text-sm font-semibold text-teal-600">
                          {t(
                            `principle-${index}-rhizo`,
                            principle.rhizoEn,
                            principle.rhizoAr
                          )}
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {t(
                          `principle-${index}-desc`,
                          principle.descEn,
                          principle.descAr
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Resources Section */}
      {activeSection === 'resources' && (
        <div className="py-12 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('resources-title', 'Knowledge Resources', 'مصادر المعرفة')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t(
                    'resources-subtitle',
                    'Essential references and tools for community builders and change agents',
                    'مراجع وأدوات أساسية لبناة المجتمع وعوامل التغيير'
                  )}
                </p>
              </div>

              {/* Resource Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {resourceCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-${category.color}-500`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4 ${currentLanguage.code === 'ar' ? 'rtl-icon-box order-1' : ''}`}
                      >
                        <category.icon
                          className={`h-6 w-6 text-${category.color}-600`}
                        />
                      </div>
                      <h3
                        className={`text-xl font-bold ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                      >
                        {t(
                          `resource-category-${index}`,
                          category.title,
                          category.titleAr
                        )}
                      </h3>
                    </div>
                    <p
                      className={`text-gray-600 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                    >
                      {t(
                        `resource-category-desc-${index}`,
                        category.description,
                        category.descriptionAr
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Community Section */}
      {activeSection === 'community' && (
        <div className="py-12 bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('community-title', 'Community', 'المجتمع')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t(
                    'community-subtitle',
                    'Connect with practitioners and researchers exploring rhizomatic approaches',
                    'تواصل مع الممارسين والباحثين الذين يستكشفون النهج الريزومية'
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`${currentLanguage.code === 'ar' ? 'text-right' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3
                          className={`text-xl font-bold ${currentLanguage.code === 'ar' ? 'rs-arabic order-2' : ''}`}
                        >
                          {t(
                            `community-name-${index}`,
                            member.name,
                            member.nameAr
                          )}
                        </h3>
                        <span className="text-indigo-600 font-semibold">
                          {member.members}+ {t('members', 'members', 'عضو')}
                        </span>
                      </div>
                      <div className="mb-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs rounded-full mb-2 bg-indigo-100 text-indigo-800`}
                        >
                          {t(
                            `community-focus-${index}`,
                            member.focus,
                            member.focusAr
                          )}
                        </span>
                        <p
                          className={`text-gray-600 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                        >
                          {t(
                            `community-desc-${index}`,
                            member.description,
                            member.descriptionAr
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for other sections */}
      {activeSection !== 'rhizomatic-organization' &&
        activeSection !== 'resources' &&
        activeSection !== 'community' && (
          <div className="py-12 bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen">
            <div className="container mx-auto px-4 text-center">
              <Zap className="w-16 h-16 mx-auto text-indigo-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('coming-soon', 'Coming Soon', 'قريبًا')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t(
                  'section-under-development',
                  'This section is currently under development. Please check back soon for more resources and content.',
                  'هذا القسم قيد التطوير حاليًا. يرجى العودة قريبًا للحصول على المزيد من المصادر والمحتوى.'
                )}
              </p>
            </div>
          </div>
        )}
    </div>
  );
};

export default KnowledgeHubPage;
