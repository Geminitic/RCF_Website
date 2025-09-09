/**
 * Data source service for the Recovery Dashboard
 * This file provides access to various Syria-related data sources and references
 */

interface DataSource {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  url: string;
  description: {
    en: string;
    ar: string;
  };
  languages: string[];
  category: string;
}

export interface SourceCategory {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  sources: DataSource[];
}

/**
 * Comprehensive list of Syria data sources categorized by type
 */
export const DATA_SOURCES: SourceCategory[] = [
  {
    id: 'news-media',
    title: {
      en: 'News and Media Sources',
      ar: 'مصادر الأخبار والإعلام',
    },
    sources: [
      {
        id: 'syria-direct',
        name: {
          en: 'Syria Direct',
          ar: 'سوريا دايركت',
        },
        url: 'https://syriadirect.org/',
        description: {
          en: 'A comprehensive news platform covering housing, land, property, environment, diaspora, refugees, and more.',
          ar: 'منصة إخبارية شاملة تغطي الإسكان والأراضي والممتلكات والبيئة والشتات واللاجئين والمزيد.',
        },
        languages: ['English', 'Arabic', 'Turkish'],
        category: 'news-media',
      },
      {
        id: 'syrian-observer',
        name: {
          en: 'The Syrian Observer',
          ar: 'المراقب السوري',
        },
        url: 'https://syrianobserver.com',
        description: {
          en: 'A daily online news service focusing on Syrian political and civil society developments.',
          ar: 'خدمة إخبارية يومية على الإنترنت تركز على التطورات السياسية والمجتمع المدني السوري.',
        },
        languages: ['English'],
        category: 'news-media',
      },
      {
        id: 'enab-baladi',
        name: {
          en: 'Enab Baladi',
          ar: 'عنب بلدي',
        },
        url: 'https://english.enabbaladi.net/',
        description: {
          en: 'A nonprofit media organization established in 2011, providing round-the-clock coverage of Syrian affairs.',
          ar: 'منظمة إعلامية غير ربحية تأسست عام 2011، وتوفر تغطية على مدار الساعة للشؤون السورية.',
        },
        languages: ['English', 'Arabic', 'Turkish'],
        category: 'news-media',
      },
      {
        id: 'syria-source',
        name: {
          en: 'SyriaSource (Atlantic Council)',
          ar: 'سوريا سورس (المجلس الأطلسي)',
        },
        url: 'https://www.atlanticcouncil.org/category/blogs/syriasource/',
        description: {
          en: 'Amplifies local and regional voices, providing on-the-ground coverage and analysis of Syrian dynamics.',
          ar: 'يضخم الأصوات المحلية والإقليمية، ويوفر تغطية ميدانية وتحليلاً للديناميكيات السورية.',
        },
        languages: ['English', 'Farsi', 'Hebrew'],
        category: 'news-media',
      },
      {
        id: 'sana',
        name: {
          en: 'Syrian Arab News Agency (SANA)',
          ar: 'وكالة الأنباء العربية السورية (سانا)',
        },
        url: 'https://sana.sy/en/',
        description: {
          en: 'The official state-run news agency, publishing over 500 news stories daily in multiple languages.',
          ar: 'وكالة الأنباء الرسمية التي تديرها الدولة، وتنشر أكثر من 500 قصة إخبارية يومياً بلغات متعددة.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'news-media',
      },
      {
        id: 'albaath-media',
        name: {
          en: 'Albaath Media',
          ar: 'إعلام البعث',
        },
        url: 'https://albaathmedia.sy/',
        description: {
          en: 'A comprehensive news outlet offering articles, analyses, TV reports, videos, and infographics on Syrian affairs.',
          ar: 'وسيلة إعلامية شاملة تقدم مقالات وتحليلات وتقارير تلفزيونية وفيديوهات ورسومات معلوماتية عن الشؤون السورية.',
        },
        languages: ['Arabic'],
        category: 'news-media',
      },
      {
        id: 'syria-news',
        name: {
          en: 'Syria.News',
          ar: 'سوريا.نيوز',
        },
        url: 'https://syria.news/',
        description: {
          en: 'One of the first Syrian online newspapers, covering sports, politics, local news, and world news in Arabic.',
          ar: 'واحدة من أولى الصحف السورية على الإنترنت، تغطي الرياضة والسياسة والأخبار المحلية والعالمية باللغة العربية.',
        },
        languages: ['Arabic'],
        category: 'news-media',
      },
    ],
  },
  {
    id: 'data-aggregators',
    title: {
      en: 'Regional Data Aggregators and Analytical Platforms',
      ar: 'منصات تجميع البيانات الإقليمية والتحليلية',
    },
    sources: [
      {
        id: 'hdx',
        name: {
          en: 'Humanitarian Data Exchange (HDX)',
          ar: 'منصة تبادل البيانات الإنسانية',
        },
        url: 'https://data.humdata.org/group/syr',
        description: {
          en: 'Provides 351 humanitarian datasets from 56 organizations covering conflict events, aid operations, education, food security, healthcare, and more.',
          ar: 'توفر 351 مجموعة بيانات إنسانية من 56 منظمة تغطي أحداث النزاع وعمليات الإغاثة والتعليم والأمن الغذائي والرعاية الصحية والمزيد.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'data-aggregators',
      },
      {
        id: 'world-bank',
        name: {
          en: 'World Bank Syria Data',
          ar: 'بيانات البنك الدولي عن سوريا',
        },
        url: 'https://www.worldbank.org/en/country/syria',
        description: {
          en: "Monitors economic and social impacts of the conflict, providing analytical reports on Syria's economic decline and recovery efforts.",
          ar: 'يراقب الآثار الاقتصادية والاجتماعية للنزاع، ويقدم تقارير تحليلية عن التراجع الاقتصادي في سوريا وجهود التعافي.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'data-aggregators',
      },
      {
        id: 'unhcr',
        name: {
          en: 'UNHCR Syria Situation Reports',
          ar: 'تقارير مفوضية اللاجئين عن الوضع في سوريا',
        },
        url: 'https://reporting.unhcr.org/operational/situations/syria-situation',
        description: {
          en: 'Provides operational updates on Syrian refugees, including registration numbers, humanitarian needs, and policy impacts in host countries.',
          ar: 'توفر تحديثات تشغيلية عن اللاجئين السوريين، بما في ذلك أرقام التسجيل والاحتياجات الإنسانية وتأثيرات السياسات في البلدان المضيفة.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'data-aggregators',
      },
      {
        id: 'ocha',
        name: {
          en: 'OCHA Syria Humanitarian Fund',
          ar: 'صندوق الأمم المتحدة الإنساني لسوريا',
        },
        url: 'https://www.unocha.org/syrian-arab-republic',
        description: {
          en: 'Manages the Syria Humanitarian Fund, supporting NGOs and UN agencies in rapid emergency response.',
          ar: 'يدير صندوق سوريا الإنساني، ويدعم المنظمات غير الحكومية ووكالات الأمم المتحدة في الاستجابة السريعة للطوارئ.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'data-aggregators',
      },
      {
        id: 'atlantic-council',
        name: {
          en: 'Atlantic Council SyriaSource',
          ar: 'سوريا سورس من المجلس الأطلسي',
        },
        url: 'https://www.atlanticcouncil.org/blogs/syriasource/conflict-data-collection-and-monitoring-in-syria/',
        description: {
          en: 'Provides on-the-ground coverage and analysis from local, regional, and international experts on Syrian dynamics.',
          ar: 'يوفر تغطية ميدانية وتحليلاً من خبراء محليين وإقليميين ودوليين حول الديناميكيات السورية.',
        },
        languages: ['English', 'Farsi', 'Hebrew'],
        category: 'data-aggregators',
      },
    ],
  },
  {
    id: 'research-institutions',
    title: {
      en: 'Local Syrian Research Institutions and Think Tanks',
      ar: 'مؤسسات البحث ومراكز الفكر السورية المحلية',
    },
    sources: [
      {
        id: 'scpr',
        name: {
          en: 'Syrian Center for Policy Research (SCPR)',
          ar: 'المركز السوري لبحوث السياسات',
        },
        url: 'https://scpr-syria.org/',
        description: {
          en: 'Independent think tank conducting policy-oriented research on solidarity economy, human empowerment, justice, and inclusive institutions.',
          ar: 'مركز فكر مستقل يجري أبحاثاً موجهة للسياسات حول اقتصاد التضامن وتمكين الإنسان والعدالة والمؤسسات الشاملة.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'research-institutions',
      },
      {
        id: 'mei',
        name: {
          en: 'Middle East Institute (MEI)',
          ar: 'معهد الشرق الأوسط',
        },
        url: 'https://www.mei.edu/',
        description: {
          en: 'Provides research and analysis on Syrian politics, conflict dynamics, and regional policy.',
          ar: 'يقدم أبحاثاً وتحليلات حول السياسة السورية وديناميكيات النزاع والسياسة الإقليمية.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'research-institutions',
      },
      {
        id: 'omran-center',
        name: {
          en: 'Omran Center for Strategic Studies',
          ar: 'مركز عمران للدراسات الاستراتيجية',
        },
        url: 'https://omranstudies.org/',
        description: {
          en: 'Focuses on objective analysis of Syria and the region, publishing studies on politics, economic development, and local administration.',
          ar: 'يركز على التحليل الموضوعي لسوريا والمنطقة، وينشر دراسات عن السياسة والتنمية الاقتصادية والإدارة المحلية.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'research-institutions',
      },
      {
        id: 'jusoor',
        name: {
          en: 'Jusoor For Studies',
          ar: 'جسور للدراسات',
        },
        url: 'https://jusoor.co/en',
        description: {
          en: 'Independent research institution specializing in political, economic, and social studies related to Syria.',
          ar: 'مؤسسة بحثية مستقلة متخصصة في الدراسات السياسية والاقتصادية والاجتماعية المتعلقة بسوريا.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'research-institutions',
      },
    ],
  },
  {
    id: 'government-sources',
    title: {
      en: 'Local Syrian Government Websites and Data Sources',
      ar: 'مواقع الحكومة السورية المحلية ومصادر البيانات',
    },
    sources: [
      {
        id: 'egov',
        name: {
          en: 'Syrian E-Government Portal',
          ar: 'بوابة الحكومة الإلكترونية السورية',
        },
        url: 'https://egov.sy/page/en/132/0/home.html',
        description: {
          en: 'Allows citizens to post opinions on projects, laws, and resolutions, providing a platform for engagement with government initiatives.',
          ar: 'تسمح للمواطنين بنشر آرائهم حول المشاريع والقوانين والقرارات، وتوفر منصة للمشاركة في المبادرات الحكومية.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'government-sources',
      },
      {
        id: 'gov-wiki',
        name: {
          en: 'Government of Syria - Wikipedia',
          ar: 'حكومة سوريا - ويكيبيديا',
        },
        url: 'https://en.wikipedia.org/wiki/Government_of_Syria',
        description: {
          en: 'Detailed information on the Syrian government structure, key officials, and political developments.',
          ar: 'معلومات مفصلة عن هيكل الحكومة السورية والمسؤولين الرئيسيين والتطورات السياسية.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'government-sources',
      },
    ],
  },
  {
    id: 'osint-resources',
    title: {
      en: 'OSINT and Data Resources',
      ar: 'موارد OSINT والبيانات',
    },
    sources: [
      {
        id: 'github-osint',
        name: {
          en: 'GitHub - OSINT-Tools-Syria',
          ar: 'جيثب - أدوات OSINT سوريا',
        },
        url: 'https://github.com/paulpogoda/OSINT-Tools-Syria',
        description: {
          en: 'A repository of OSINT resources categorized into open data portals, legal entities, maps, vehicles, people, public procurements, and WHOIS data.',
          ar: 'مستودع لموارد OSINT مصنفة إلى بوابات البيانات المفتوحة والكيانات القانونية والخرائط والمركبات والأشخاص والمشتريات العامة وبيانات WHOIS.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'osint-resources',
      },
      {
        id: 'sjac',
        name: {
          en: 'Syria Justice and Accountability Centre (SJAC)',
          ar: 'مركز العدالة والمساءلة في سوريا',
        },
        url: 'https://syriaaccountability.org/inside-sjacs-open-source-investigative-team/',
        description: {
          en: "Uses open-source database 'Bayanat' to compile and analyze millions of videos, interviews, and documents related to the Syrian conflict.",
          ar: "يستخدم قاعدة بيانات مفتوحة المصدر 'بيانات' لتجميع وتحليل ملايين مقاطع الفيديو والمقابلات والوثائق المتعلقة بالنزاع السوري.",
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'osint-resources',
      },
    ],
  },
  {
    id: 'advertising-marketing',
    title: {
      en: 'Local Syrian Advertising and Marketing',
      ar: 'الإعلان والتسويق السوري المحلي',
    },
    sources: [
      {
        id: 'sortlist',
        name: {
          en: 'Sortlist',
          ar: 'سورت ليست',
        },
        url: 'https://www.sortlist.com/l/syria-sy',
        description: {
          en: 'Platform connecting businesses with marketing agencies in Syria, covering brand strategy, digital marketing, and social media management.',
          ar: 'منصة تربط الشركات بوكالات التسويق في سوريا، وتغطي استراتيجية العلامة التجارية والتسويق الرقمي وإدارة وسائل التواصل الاجتماعي.',
        },
        languages: ['English', 'Arabic'],
        category: 'advertising-marketing',
      },
      {
        id: 'techbehemoths',
        name: {
          en: 'TechBehemoths',
          ar: 'تيك بيهيموثس',
        },
        url: 'https://techbehemoths.com/companies/digital-marketing/syria',
        description: {
          en: 'Lists digital marketing agencies in Syria, highlighting their specializations and client base.',
          ar: 'قوائم وكالات التسويق الرقمي في سوريا، مع تسليط الضوء على تخصصاتها وقاعدة عملائها.',
        },
        languages: ['English', 'Arabic'],
        category: 'advertising-marketing',
      },
      {
        id: 'ibtikar',
        name: {
          en: 'Ibtikar',
          ar: 'ابتكار',
        },
        url: 'https://www.ibtikar.com/',
        description: {
          en: 'Damascus-based ad agency serving local and international clients, affiliated with TBWA, with over 30 staff.',
          ar: 'وكالة إعلانية مقرها دمشق تخدم عملاء محليين ودوليين، وترتبط بـ TBWA، ويعمل بها أكثر من 30 موظفاً.',
        },
        languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
        category: 'advertising-marketing',
      },
      {
        id: 'r-interactives',
        name: {
          en: 'R Interactives',
          ar: 'آر إنتراكتيفز',
        },
        url: 'https://www.rinteractives.com/digital-marketing-agency-in-syria.html',
        description: {
          en: 'Performance digital marketing agency offering DCO, conversion optimization, social media marketing, and lead generation.',
          ar: 'وكالة تسويق رقمي للأداء تقدم DCO وتحسين التحويل وتسويق وسائل التواصل الاجتماعي وتوليد العملاء المحتملين.',
        },
        languages: ['English', 'Arabic'],
        category: 'advertising-marketing',
      },
      {
        id: 'arabad',
        name: {
          en: 'ArabAd',
          ar: 'عرب آد',
        },
        url: 'https://www.arabadonline.com/en/details/advertising/the-advertising-industry-in-syria-rising-from-the-ashes-of-war',
        description: {
          en: 'Provides insights into the Syrian advertising industry, highlighting agencies like Ibtikar and their role in the market.',
          ar: 'يقدم رؤى حول صناعة الإعلان السورية، مع تسليط الضوء على وكالات مثل ابتكار ودورها في السوق.',
        },
        languages: ['English', 'Arabic'],
        category: 'advertising-marketing',
      },
    ],
  },
];

/**
 * Get all data sources organized by category
 * @returns Array of source categories with their sources
 */
export const getAllDataSources = (): SourceCategory[] => {
  return DATA_SOURCES;
};

/**
 * Get data sources by category
 * @param categoryId The category ID to filter by
 * @returns Array of sources in the specified category
 */
export const getDataSourcesByCategory = (categoryId: string): DataSource[] => {
  const category = DATA_SOURCES.find((cat) => cat.id === categoryId);
  return category ? category.sources : [];
};

/**
 * Get a specific data source by ID
 * @param sourceId The source ID to retrieve
 * @returns The data source object or undefined if not found
 */
export const getDataSourceById = (sourceId: string): DataSource | undefined => {
  for (const category of DATA_SOURCES) {
    const source = category.sources.find((src) => src.id === sourceId);
    if (source) return source;
  }
  return undefined;
};

/**
 * Search data sources by name or description
 * @param query The search query
 * @param language The language to search in ('en' or 'ar')
 * @returns Array of matching data sources
 */
export const searchDataSources = (
  query: string,
  language: 'en' | 'ar' = 'en'
): DataSource[] => {
  const results: DataSource[] = [];
  const lowerQuery = query.toLowerCase();

  for (const category of DATA_SOURCES) {
    for (const source of category.sources) {
      const nameField = language === 'en' ? source.name.en : source.name.ar;
      const descField =
        language === 'en' ? source.description.en : source.description.ar;

      if (
        nameField.toLowerCase().includes(lowerQuery) ||
        descField.toLowerCase().includes(lowerQuery)
      ) {
        results.push(source);
      }
    }
  }

  return results;
};

export default {
  getAllDataSources,
  getDataSourcesByCategory,
  getDataSourceById,
  searchDataSources,
};
