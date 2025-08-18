import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ExternalLink, ChevronDown, ChevronUp, Globe } from 'lucide-react';

interface DataSource {
  name: string;
  nameAr?: string;
  url: string;
  description: string;
  descriptionAr?: string;
  languages: string[];
}

interface SourceCategory {
  title: string;
  titleAr: string;
  sources: DataSource[];
}

const RecoveryDashboardDataSources: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const isArabic = currentLanguage.code === 'ar';
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const sourceCategories: SourceCategory[] = [
    {
      title: 'News and Media Sources',
      titleAr: 'مصادر الأخبار والإعلام',
      sources: [
        {
          name: 'Syria Direct',
          nameAr: 'سوريا دايركت',
          url: 'https://syriadirect.org/',
          description:
            'A comprehensive news platform covering housing, land, property, environment, diaspora, refugees, and more.',
          descriptionAr:
            'منصة إخبارية شاملة تغطي الإسكان والأراضي والممتلكات والبيئة والشتات واللاجئين والمزيد.',
          languages: ['English', 'Arabic', 'Turkish'],
        },
        {
          name: 'The Syrian Observer',
          nameAr: 'المراقب السوري',
          url: 'https://syrianobserver.com',
          description:
            'A daily online news service focusing on Syrian political and civil society developments.',
          descriptionAr:
            'خدمة إخبارية يومية على الإنترنت تركز على التطورات السياسية والمجتمع المدني السوري.',
          languages: ['English'],
        },
        {
          name: 'Enab Baladi',
          nameAr: 'عنب بلدي',
          url: 'https://english.enabbaladi.net/',
          description:
            'A nonprofit media organization established in 2011, providing round-the-clock coverage of Syrian affairs.',
          descriptionAr:
            'منظمة إعلامية غير ربحية تأسست عام 2011، وتوفر تغطية على مدار الساعة للشؤون السورية.',
          languages: ['English', 'Arabic', 'Turkish'],
        },
        {
          name: 'SyriaSource (Atlantic Council)',
          nameAr: 'سوريا سورس (المجلس الأطلسي)',
          url: 'https://www.atlanticcouncil.org/category/blogs/syriasource/',
          description:
            'Amplifies local and regional voices, providing on-the-ground coverage and analysis of Syrian dynamics.',
          descriptionAr:
            'يضخم الأصوات المحلية والإقليمية، ويوفر تغطية ميدانية وتحليلاً للديناميكيات السورية.',
          languages: ['English', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Syrian Arab News Agency (SANA)',
          nameAr: 'وكالة الأنباء العربية السورية (سانا)',
          url: 'https://sana.sy/en/',
          description:
            'The official state-run news agency, publishing over 500 news stories daily in multiple languages.',
          descriptionAr:
            'وكالة الأنباء الرسمية التي تديرها الدولة، وتنشر أكثر من 500 قصة إخبارية يومياً بلغات متعددة.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Albaath Media',
          nameAr: 'إعلام البعث',
          url: 'https://albaathmedia.sy/',
          description:
            'A comprehensive news outlet offering articles, analyses, TV reports, videos, and infographics on Syrian affairs.',
          descriptionAr:
            'وسيلة إعلامية شاملة تقدم مقالات وتحليلات وتقارير تلفزيونية وفيديوهات ورسومات معلوماتية عن الشؤون السورية.',
          languages: ['Arabic'],
        },
        {
          name: 'Syria.News',
          nameAr: 'سوريا.نيوز',
          url: 'https://syria.news/',
          description:
            'One of the first Syrian online newspapers, covering sports, politics, local news, and world news in Arabic.',
          descriptionAr:
            'واحدة من أولى الصحف السورية على الإنترنت، تغطي الرياضة والسياسة والأخبار المحلية والعالمية باللغة العربية.',
          languages: ['Arabic'],
        },
      ],
    },
    {
      title: 'Regional Data Aggregators and Analytical Platforms',
      titleAr: 'منصات تجميع البيانات الإقليمية والتحليلية',
      sources: [
        {
          name: 'Humanitarian Data Exchange (HDX)',
          nameAr: 'منصة تبادل البيانات الإنسانية',
          url: 'https://data.humdata.org/group/syr',
          description:
            'Provides 351 humanitarian datasets from 56 organizations covering conflict events, aid operations, education, food security, healthcare, and more.',
          descriptionAr:
            'توفر 351 مجموعة بيانات إنسانية من 56 منظمة تغطي أحداث النزاع وعمليات الإغاثة والتعليم والأمن الغذائي والرعاية الصحية والمزيد.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'World Bank Syria Data',
          nameAr: 'بيانات البنك الدولي عن سوريا',
          url: 'https://www.worldbank.org/en/country/syria',
          description:
            "Monitors economic and social impacts of the conflict, providing analytical reports on Syria's economic decline and recovery efforts.",
          descriptionAr:
            'يراقب الآثار الاقتصادية والاجتماعية للنزاع، ويقدم تقارير تحليلية عن التراجع الاقتصادي في سوريا وجهود التعافي.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'UNHCR Syria Situation Reports',
          nameAr: 'تقارير مفوضية اللاجئين عن الوضع في سوريا',
          url: 'https://reporting.unhcr.org/operational/situations/syria-situation',
          description:
            'Provides operational updates on Syrian refugees, including registration numbers, humanitarian needs, and policy impacts in host countries.',
          descriptionAr:
            'توفر تحديثات تشغيلية عن اللاجئين السوريين، بما في ذلك أرقام التسجيل والاحتياجات الإنسانية وتأثيرات السياسات في البلدان المضيفة.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'OCHA Syria Humanitarian Fund',
          nameAr: 'صندوق الأمم المتحدة الإنساني لسوريا',
          url: 'https://www.unocha.org/syrian-arab-republic',
          description:
            'Manages the Syria Humanitarian Fund, supporting NGOs and UN agencies in rapid emergency response.',
          descriptionAr:
            'يدير صندوق سوريا الإنساني، ويدعم المنظمات غير الحكومية ووكالات الأمم المتحدة في الاستجابة السريعة للطوارئ.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Atlantic Council SyriaSource',
          nameAr: 'سوريا سورس من المجلس الأطلسي',
          url: 'https://www.atlanticcouncil.org/blogs/syriasource/conflict-data-collection-and-monitoring-in-syria/',
          description:
            'Provides on-the-ground coverage and analysis from local, regional, and international experts on Syrian dynamics.',
          descriptionAr:
            'يوفر تغطية ميدانية وتحليلاً من خبراء محليين وإقليميين ودوليين حول الديناميكيات السورية.',
          languages: ['English', 'Farsi', 'Hebrew'],
        },
      ],
    },
    {
      title: 'Local Syrian Research Institutions and Think Tanks',
      titleAr: 'مؤسسات البحث ومراكز الفكر السورية المحلية',
      sources: [
        {
          name: 'Syrian Center for Policy Research (SCPR)',
          nameAr: 'المركز السوري لبحوث السياسات',
          url: 'https://scpr-syria.org/',
          description:
            'Independent think tank conducting policy-oriented research on solidarity economy, human empowerment, justice, and inclusive institutions.',
          descriptionAr:
            'مركز فكر مستقل يجري أبحاثاً موجهة للسياسات حول اقتصاد التضامن وتمكين الإنسان والعدالة والمؤسسات الشاملة.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Middle East Institute (MEI)',
          nameAr: 'معهد الشرق الأوسط',
          url: 'https://www.mei.edu/',
          description:
            'Provides research and analysis on Syrian politics, conflict dynamics, and regional policy.',
          descriptionAr:
            'يقدم أبحاثاً وتحليلات حول السياسة السورية وديناميكيات النزاع والسياسة الإقليمية.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Omran Center for Strategic Studies',
          nameAr: 'مركز عمران للدراسات الاستراتيجية',
          url: 'https://omranstudies.org/',
          description:
            'Focuses on objective analysis of Syria and the region, publishing studies on politics, economic development, and local administration.',
          descriptionAr:
            'يركز على التحليل الموضوعي لسوريا والمنطقة، وينشر دراسات عن السياسة والتنمية الاقتصادية والإدارة المحلية.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Jusoor For Studies',
          nameAr: 'جسور للدراسات',
          url: 'https://jusoor.co/en',
          description:
            'Independent research institution specializing in political, economic, and social studies related to Syria.',
          descriptionAr:
            'مؤسسة بحثية مستقلة متخصصة في الدراسات السياسية والاقتصادية والاجتماعية المتعلقة بسوريا.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
      ],
    },
    {
      title: 'Local Syrian Government Websites and Data Sources',
      titleAr: 'مواقع الحكومة السورية المحلية ومصادر البيانات',
      sources: [
        {
          name: 'Syrian E-Government Portal',
          nameAr: 'بوابة الحكومة الإلكترونية السورية',
          url: 'https://egov.sy/page/en/132/0/home.html',
          description:
            'Allows citizens to post opinions on projects, laws, and resolutions, providing a platform for engagement with government initiatives.',
          descriptionAr:
            'تسمح للمواطنين بنشر آرائهم حول المشاريع والقوانين والقرارات، وتوفر منصة للمشاركة في المبادرات الحكومية.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Government of Syria - Wikipedia',
          nameAr: 'حكومة سوريا - ويكيبيديا',
          url: 'https://en.wikipedia.org/wiki/Government_of_Syria',
          description:
            'Detailed information on the Syrian government structure, key officials, and political developments.',
          descriptionAr:
            'معلومات مفصلة عن هيكل الحكومة السورية والمسؤولين الرئيسيين والتطورات السياسية.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
      ],
    },
    {
      title: 'OSINT and Data Resources',
      titleAr: 'موارد OSINT والبيانات',
      sources: [
        {
          name: 'GitHub - OSINT-Tools-Syria',
          nameAr: 'جيثب - أدوات OSINT سوريا',
          url: 'https://github.com/paulpogoda/OSINT-Tools-Syria',
          description:
            'A repository of OSINT resources categorized into open data portals, legal entities, maps, vehicles, people, public procurements, and WHOIS data.',
          descriptionAr:
            'مستودع لموارد OSINT مصنفة إلى بوابات البيانات المفتوحة والكيانات القانونية والخرائط والمركبات والأشخاص والمشتريات العامة وبيانات WHOIS.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'Syria Justice and Accountability Centre (SJAC)',
          nameAr: 'مركز العدالة والمساءلة في سوريا',
          url: 'https://syriaaccountability.org/inside-sjacs-open-source-investigative-team/',
          description:
            "Uses open-source database 'Bayanat' to compile and analyze millions of videos, interviews, and documents related to the Syrian conflict.",
          descriptionAr:
            "يستخدم قاعدة بيانات مفتوحة المصدر 'بيانات' لتجميع وتحليل ملايين مقاطع الفيديو والمقابلات والوثائق المتعلقة بالنزاع السوري.",
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
      ],
    },
    {
      title: 'Local Syrian Advertising and Marketing',
      titleAr: 'الإعلان والتسويق السوري المحلي',
      sources: [
        {
          name: 'Sortlist',
          nameAr: 'سورت ليست',
          url: 'https://www.sortlist.com/l/syria-sy',
          description:
            'Platform connecting businesses with marketing agencies in Syria, covering brand strategy, digital marketing, and social media management.',
          descriptionAr:
            'منصة تربط الشركات بوكالات التسويق في سوريا، وتغطي استراتيجية العلامة التجارية والتسويق الرقمي وإدارة وسائل التواصل الاجتماعي.',
          languages: ['English', 'Arabic'],
        },
        {
          name: 'TechBehemoths',
          nameAr: 'تيك بيهيموثس',
          url: 'https://techbehemoths.com/companies/digital-marketing/syria',
          description:
            'Lists digital marketing agencies in Syria, highlighting their specializations and client base.',
          descriptionAr:
            'قوائم وكالات التسويق الرقمي في سوريا، مع تسليط الضوء على تخصصاتها وقاعدة عملائها.',
          languages: ['English', 'Arabic'],
        },
        {
          name: 'Ibtikar',
          nameAr: 'ابتكار',
          url: 'https://www.ibtikar.com/',
          description:
            'Damascus-based ad agency serving local and international clients, affiliated with TBWA, with over 30 staff.',
          descriptionAr:
            'وكالة إعلانية مقرها دمشق تخدم عملاء محليين ودوليين، وترتبط بـ TBWA، ويعمل بها أكثر من 30 موظفاً.',
          languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        },
        {
          name: 'R Interactives',
          nameAr: 'آر إنتراكتيفز',
          url: 'https://www.rinteractives.com/digital-marketing-agency-in-syria.html',
          description:
            'Performance digital marketing agency offering DCO, conversion optimization, social media marketing, and lead generation.',
          descriptionAr:
            'وكالة تسويق رقمي للأداء تقدم DCO وتحسين التحويل وتسويق وسائل التواصل الاجتماعي وتوليد العملاء المحتملين.',
          languages: ['English', 'Arabic'],
        },
        {
          name: 'ArabAd',
          nameAr: 'عرب آد',
          url: 'https://www.arabadonline.com/en/details/advertising/the-advertising-industry-in-syria-rising-from-the-ashes-of-war',
          description:
            'Provides insights into the Syrian advertising industry, highlighting agencies like Ibtikar and their role in the market.',
          descriptionAr:
            'يقدم رؤى حول صناعة الإعلان السورية، مع تسليط الضوء على وكالات مثل ابتكار ودورها في السوق.',
          languages: ['English', 'Arabic'],
        },
      ],
    },
  ];

  return (
    <div
      className={`data-sources-container bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 ${isArabic ? 'rs-arabic text-right' : 'text-left'}`}
    >
      <h2
        className={`text-2xl font-bold mb-6 text-purple-800 ${isArabic ? 'text-right' : 'text-left'}`}
      >
        {isArabic ? 'مصادر البيانات والمراجع' : 'Data Sources & References'}
      </h2>

      <div className="space-y-4">
        {sourceCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="border border-slate-200 rounded-lg overflow-hidden"
          >
            <button
              className={`w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors ${isArabic ? 'flex-row-reverse' : ''}`}
              onClick={() => toggleCategory(category.title)}
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {isArabic ? category.titleAr : category.title}
              </h3>
              {expandedCategories.includes(category.title) ? (
                <ChevronUp className="h-5 w-5 text-slate-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-500" />
              )}
            </button>

            {expandedCategories.includes(category.title) && (
              <div className="p-4 space-y-4">
                {category.sources.map((source, sourceIndex) => (
                  <div
                    key={sourceIndex}
                    className="border-b border-slate-100 last:border-b-0 pb-4 last:pb-0"
                  >
                    <div
                      className={`flex items-center justify-between mb-2 ${isArabic ? 'flex-row-reverse' : ''}`}
                    >
                      <h4 className="font-medium text-slate-900">
                        {isArabic && source.nameAr
                          ? source.nameAr
                          : source.name}
                      </h4>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center text-blue-600 hover:text-blue-800 text-sm ${isArabic ? 'flex-row-reverse ml-2' : 'mr-2'}`}
                      >
                        <span className={`${isArabic ? 'ml-1' : 'mr-1'}`}>
                          {isArabic ? 'فتح الرابط' : 'Visit'}
                        </span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <p className="text-sm text-slate-600 mb-2">
                      {isArabic && source.descriptionAr
                        ? source.descriptionAr
                        : source.description}
                    </p>

                    <div
                      className={`flex items-center text-xs text-slate-500 ${isArabic ? 'flex-row-reverse' : ''}`}
                    >
                      <Globe className="h-3 w-3 mx-1" />
                      <div
                        className={`flex flex-wrap ${isArabic ? 'mr-2' : 'ml-2'}`}
                      >
                        {source.languages.map((lang, langIndex) => (
                          <span
                            key={langIndex}
                            className={`inline-block bg-slate-100 rounded-full px-2 py-1 text-xs ${isArabic ? 'ml-1 mb-1' : 'mr-1 mb-1'}`}
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecoveryDashboardDataSources;
