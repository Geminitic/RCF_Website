import { Project, CommunityMember, NewsItem } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Digital Heritage Preservation',
    titleAr: 'حفظ التراث الرقمي',
    description: 'Amplifying Syrian voices through innovative multimedia storytelling and digital preservation of cultural heritage. This transformative initiative equips community members with tools and training to document and share their authentic narratives.',
    descriptionAr: 'تضخيم الأصوات السورية من خلال السرد المبتكر متعدد الوسائط والحفظ الرقمي للتراث الثقافي. هذه المبادرة التحويلية تزود أعضاء المجتمع بالأدوات والتدريب لتوثيق ومشاركة سردياتهم الأصيلة.',
    location: 'Damascus',
    coordinates: [33.5138, 36.2765],
    status: 'active',
    category: 'Media',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    participants: 85,
    startDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Resilient Communities Network',
    titleAr: 'شبكة المجتمعات المرنة',
    description: 'Cultivating sustainable food systems and vibrant social spaces that bridge refugee settlements and host communities. Fostering deep connections through shared agricultural wisdom and meaningful cultural exchange.',
    descriptionAr: 'رعاية أنظمة غذائية مستدامة ومساحات اجتماعية نابضة تربط مستوطنات اللاجئين والمجتمعات المضيفة. تعزيز روابط عميقة من خلال الحكمة الزراعية المشتركة والتبادل الثقافي الهادف.',
    location: 'Aleppo',
    coordinates: [36.2021, 37.1343],
    status: 'active',
    category: 'Community',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    participants: 120,
    startDate: '2023-11-01'
  },
  {
    id: '3',
    title: 'Educational Technology Hub',
    titleAr: 'مركز التكنولوجيا التعليمية',
    description: 'Developing innovative learning platforms and resources for displaced Syrian students. Bridging educational gaps through technology and peer-to-peer learning networks.',
    descriptionAr: 'تطوير منصات تعليمية مبتكرة وموارد للطلاب السوريين النازحين. سد الفجوات التعليمية من خلال التكنولوجيا وشبكات التعلم من نظير إلى نظير.',
    location: 'Latakia',
    coordinates: [35.5311, 35.7796],
    status: 'planned',
    category: 'Education',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    participants: 65,
    startDate: '2024-03-01'
  },
  {
    id: '4',
    title: 'Cultural Heritage Archive',
    titleAr: 'أرشيف التراث الثقافي',
    description: 'Preserving Syrian cultural heritage through digital documentation and community-led oral history projects. Creating accessible archives for future generations.',
    descriptionAr: 'الحفاظ على التراث الثقافي السوري من خلال التوثيق الرقمي ومشاريع التاريخ الشفوي بقيادة المجتمع. إنشاء أرشيف يمكن الوصول إليه للأجيال القادمة.',
    location: 'Homs',
    coordinates: [34.7478, 36.7259],
    status: 'completed',
    category: 'Culture',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    participants: 45,
    startDate: '2023-06-01'
  },
  {
    id: '5',
    title: 'Youth Leadership Network',
    titleAr: 'شبكة القيادة الشبابية',
    description: 'Building the next generation of community leaders through mentorship, training, and collaborative projects that address local challenges.',
    descriptionAr: 'بناء الجيل القادم من قادة المجتمع من خلال الإرشاد والتدريب والمشاريع التعاونية التي تعالج التحديات المحلية.',
    location: 'Tartus',
    coordinates: [34.8886, 35.8869],
    status: 'active',
    category: 'Leadership',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    participants: 75,
    startDate: '2024-02-01'
  },
  {
    id: '6',
    title: 'Women Entrepreneurs Collective',
    titleAr: 'جماعة رائدات الأعمال',
    description: 'Supporting Syrian women entrepreneurs through business training, microfinance, and networking opportunities across the diaspora.',
    descriptionAr: 'دعم رائدات الأعمال السوريات من خلال التدريب التجاري والتمويل الأصغر وفرص التواصل عبر الشتات.',
    location: 'Daraa',
    coordinates: [32.6189, 36.1021],
    status: 'active',
    category: 'Economic',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    participants: 95,
    startDate: '2023-09-15'
  }
];

export const mockCommunityMembers: CommunityMember[] = [
  {
    id: '1',
    name: 'Layla Hassan',
    nameAr: 'ليلى حسان',
    role: 'Community Organizer & Digital Storyteller',
    roleAr: 'منظمة مجتمعية وراوية رقمية',
    bio: 'Passionate about building bridges between communities and fostering collaborative change through innovative storytelling techniques. Layla has organized over 50 community events and trained hundreds of people in digital storytelling.',
    bioAr: 'شغوفة ببناء الجسور بين المجتمعات وتعزيز التغيير التعاوني من خلال تقنيات السرد المبتكرة. نظمت ليلى أكثر من 50 فعالية مجتمعية ودربت المئات في السرد الرقمي.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['Community Building', 'Digital Storytelling', 'Project Management', 'Public Speaking', 'Cultural Preservation'],
    location: 'Damascus',
    social: {
      twitter: '@laylahassan',
      instagram: '@layla_community',
      linkedin: 'layla-hassan-organizer'
    }
  },
  {
    id: '2',
    name: 'Omar Khalil',
    nameAr: 'عمر خليل',
    role: 'Documentary Filmmaker & Media Producer',
    roleAr: 'صانع أفلام وثائقية ومنتج إعلامي',
    bio: 'Documenting stories of resilience and hope across Syrian communities worldwide. Omar\'s work has been featured in international film festivals and has helped amplify Syrian voices globally.',
    bioAr: 'توثيق قصص المرونة والأمل في المجتمعات السورية حول العالم. تم عرض أعمال عمر في مهرجانات سينمائية دولية وساعدت في تضخيم الأصوات السورية عالمياً.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['Documentary Filmmaking', 'Video Production', 'Storytelling', 'Cultural Documentation', 'Media Strategy'],
    location: 'Aleppo',
    social: {
      instagram: '@omar_films',
      linkedin: 'omar-khalil-filmmaker',
      twitter: '@omarkhalilfilms'
    }
  },
  {
    id: '3',
    name: 'Fatima Al-Zahra',
    nameAr: 'فاطمة الزهراء',
    role: 'Digital Rights Activist & Tech Educator',
    roleAr: 'ناشطة حقوق رقمية ومعلمة تقنية',
    bio: 'Advocating for digital privacy and online safety in marginalized communities. Fatima conducts workshops on digital literacy and has developed security protocols for activists and journalists.',
    bioAr: 'الدفاع عن الخصوصية الرقمية والسلامة عبر الإنترنت في المجتمعات المهمشة. تقوم فاطمة بإجراء ورش عمل حول محو الأمية الرقمية وطورت بروتوكولات أمنية للناشطين والصحفيين.',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['Digital Security', 'Privacy Advocacy', 'Tech Education', 'Workshop Facilitation', 'Policy Research'],
    location: 'Latakia',
    social: {
      twitter: '@fatima_digital',
      linkedin: 'fatima-alzahra-tech'
    }
  },
  {
    id: '4',
    name: 'Ahmed Mansour',
    nameAr: 'أحمد منصور',
    role: 'Youth Mentor & Educational Coordinator',
    roleAr: 'مرشد شباب ومنسق تعليمي',
    bio: 'Dedicated to empowering young Syrians through education and mentorship programs. Ahmed has established learning centers in three cities and mentored over 200 young people.',
    bioAr: 'مكرس لتمكين الشباب السوري من خلال برامج التعليم والإرشاد. أسس أحمد مراكز تعليمية في ثلاث مدن وأرشد أكثر من 200 شاب.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['Youth Mentorship', 'Educational Program Design', 'Leadership Development', 'Community Outreach', 'Curriculum Development'],
    location: 'Homs',
    social: {
      linkedin: 'ahmed-mansour-educator',
      instagram: '@ahmed_mentors'
    }
  },
  {
    id: '5',
    name: 'Nour Abdallah',
    nameAr: 'نور عبد الله',
    role: 'Artist & Cultural Preservationist',
    roleAr: 'فنانة ومحافظة على التراث الثقافي',
    bio: 'Using art to preserve and celebrate Syrian cultural heritage while creating new forms of expression that bridge traditional and contemporary themes.',
    bioAr: 'استخدام الفن للحفاظ على التراث الثقافي السوري والاحتفال به مع إنشاء أشكال جديدة من التعبير تربط بين المواضيع التقليدية والمعاصرة.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['Visual Arts', 'Cultural Documentation', 'Art Therapy', 'Exhibition Curation', 'Traditional Crafts'],
    location: 'Tartus',
    social: {
      instagram: '@nour_heritage_art',
      twitter: '@nourartist'
    }
  }
];

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'New Partnership with International Cultural Foundation',
    titleAr: 'شراكة جديدة مع المؤسسة الثقافية الدولية',
    content: 'We are excited to announce our new partnership with the International Cultural Exchange Foundation to expand our digital storytelling program across five new cities. This collaboration will provide resources and training to over 300 community members.',
    contentAr: 'نحن متحمسون للإعلان عن شراكتنا الجديدة مع مؤسسة التبادل الثقافي الدولي لتوسيع برنامج السرد الرقمي عبر خمس مدن جديدة. ستوفر هذه الشراكة الموارد والتدريب لأكثر من 300 عضو في المجتمع.',
    author: 'Rhizome Syria Team',
    date: '2024-01-15',
    category: 'news',
    image: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['partnership', 'digital storytelling', 'expansion', 'community'],
    featured: true
  },
  {
    id: '2',
    title: 'Community Art Exhibition: Voices of Resilience',
    titleAr: 'معرض الفن المجتمعي: أصوات المرونة',
    content: 'Local artists showcase their work reflecting themes of resilience and hope in our monthly exhibition. The event featured 25 artists and attracted over 500 visitors, creating meaningful conversations about identity and belonging.',
    contentAr: 'يعرض الفنانون المحليون أعمالهم التي تعكس مواضيع المرونة والأمل في معرضنا الشهري. ضم الحدث 25 فناناً وجذب أكثر من 500 زائر، مما خلق محادثات مفيدة حول الهوية والانتماء.',
    author: 'Arts Team',
    date: '2024-01-10',
    category: 'event',
    image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['art', 'exhibition', 'culture', 'resilience'],
    featured: false
  },
  {
    id: '3',
    title: 'Digital Safety Workshop Series Concludes Successfully',
    titleAr: 'اختتام سلسلة ورش السلامة الرقمية بنجاح',
    content: 'Over 150 participants learned about online safety and digital privacy in our comprehensive workshop series. The program included hands-on training sessions and provided participants with practical tools for digital security.',
    contentAr: 'تعلم أكثر من 150 مشاركاً حول السلامة عبر الإنترنت والخصوصية الرقمية في سلسلة ورش العمل الشاملة. تضمن البرنامج جلسات تدريبية عملية وزود المشاركين بأدوات عملية للأمان الرقمي.',
    author: 'Digital Security Team',
    date: '2024-01-05',
    category: 'update',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['digital safety', 'workshop', 'privacy', 'education'],
    featured: false
  },
  {
    id: '4',
    title: 'Youth Leadership Program Graduates 30 New Leaders',
    titleAr: 'برنامج القيادة الشبابية يخرج 30 قائداً جديداً',
    content: 'Our intensive 6-month youth leadership program has successfully graduated 30 young leaders who are now implementing community projects in their local areas. The program focused on project management, community organizing, and social innovation.',
    contentAr: 'تخرج برنامج القيادة الشبابية المكثف لمدة 6 أشهر بنجاح 30 قائداً شاباً ينفذون الآن مشاريع مجتمعية في مناطقهم المحلية. ركز البرنامج على إدارة المشاريع والتنظيم المجتمعي والابتكار الاجتماعي.',
    author: 'Youth Programs Team',
    date: '2024-01-02',
    category: 'update',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['youth', 'leadership', 'graduation', 'community projects'],
    featured: true
  },
  {
    id: '5',
    title: 'Documentary "Roots and Routes" Wins International Award',
    titleAr: 'الفيلم الوثائقي "الجذور والطرق" يفوز بجائزة دولية',
    content: 'The documentary "Roots and Routes," produced by our media team, has won the Best Documentary Award at the International Human Rights Film Festival. The film explores the journey of Syrian families maintaining their cultural identity while building new homes.',
    contentAr: 'فاز الفيلم الوثائقي "الجذور والطرق" الذي أنتجه فريقنا الإعلامي بجائزة أفضل فيلم وثائقي في مهرجان حقوق الإنسان السينمائي الدولي. يستكشف الفيلم رحلة العائلات السورية في الحفاظ على هويتها الثقافية أثناء بناء منازل جديدة.',
    author: 'Media Production Team',
    date: '2023-12-28',
    category: 'media',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['documentary', 'award', 'film festival', 'cultural identity'],
    featured: true
  },
  {
    id: '6',
    title: 'Community Gardens Harvest Festival Celebrates Success',
    titleAr: 'مهرجان حصاد الحدائق المجتمعية يحتفل بالنجاح',
    content: 'The community gardens network celebrated a successful harvest season with a festival that brought together over 200 families. The gardens produced over 2 tons of fresh vegetables and created lasting connections between community members.',
    contentAr: 'احتفلت شبكة الحدائق المجتمعية بموسم حصاد ناجح بمهرجان جمع أكثر من 200 عائلة. أنتجت الحدائق أكثر من طنين من الخضروات الطازجة وخلقت روابط دائمة بين أعضاء المجتمع.',
    author: 'Community Gardens Team',
    date: '2023-12-20',
    category: 'event',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['community gardens', 'harvest', 'festival', 'sustainability'],
    featured: false
  }
];