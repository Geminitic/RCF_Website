import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { photoList } from '../data/photoList';

interface Photo {
  id: string;
  url: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  location: string;
  locationAr: string;
  category: string;
  uploadedBy: string;
  uploadDate: string;
  approved: boolean;
  featured: boolean;
  likes: number;
  comments: { id: string; name: string; text: string }[];
}

interface PhotoContextType {
  photos: Photo[];
  uploadedCount: number;
  targetCount: number;
  addPhoto: (
    photo: Omit<Photo, 'id' | 'uploadDate' | 'approved'>,
    approved?: boolean
  ) => void;
  likePhoto: (id: string) => void;
  addComment: (id: string, name: string, text: string) => void;
  approvePhoto: (id: string) => void;
  deletePhoto: (id: string) => void;
  pendingPhotos: Photo[];
  featuredPhotos: Photo[];
  communityPhotos: Photo[];
  allPhotos: Photo[];
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const usePhoto = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};

interface PhotoProviderProps {
  children: ReactNode;
}

export const PhotoProvider: React.FC<PhotoProviderProps> = ({ children }) => {
  const [photos, setPhotos] = useState<Photo[]>(() => {
    const base: Photo[] = [
    // Real community photos
    {
      id: '1',
      url: '/484134928_122145258254471410_1133353559349890810_n.jpg',
      title: 'Community Gathering',
      titleAr: 'تجمع مجتمعي',
      description: 'A vibrant community event bringing people together',
      descriptionAr: 'فعالية مجتمعية نابضة بالحياة تجمع الناس معاً',
      location: 'Aleppo',
      locationAr: 'حلب',
      category: 'community',
      uploadedBy: 'RCF Team',
      uploadDate: '2024-01-15',
      approved: true,
      featured: true
    },
    {
      id: '2',
      url: '/WhatsApp Image 2025-06-17 at 12.41.33 AM.jpeg',
      title: 'Cultural Festival',
      titleAr: 'مهرجان ثقافي',
      description: 'Celebrating local heritage and traditions',
      descriptionAr: 'الاحتفال بالتراث والتقاليد السورية',
      location: 'Damascus',
      locationAr: 'دمشق',
      category: 'culture',
      uploadedBy: 'Community Member',
      uploadDate: '2024-01-10',
      approved: true,
      featured: true
    },
    {
      id: '3',
      url: '/WhatsApp Image 2025-06-19 at 12.35.09 PM.jpeg',
      title: 'Youth Engagement',
      titleAr: 'مشاركة الشباب',
      description: 'Young people participating in community activities',
      descriptionAr: 'الشباب يشاركون في الأنشطة المجتمعية',
      location: 'Homs',
      locationAr: 'حمص',
      category: 'youth',
      uploadedBy: 'Youth Coordinator',
      uploadDate: '2024-01-08',
      approved: true,
      featured: true
    },
    {
      id: '4',
      url: '/WhatsApp Image 2025-06-19 at 12.35.10 PM.jpeg',
      title: 'Educational Workshop',
      titleAr: 'ورشة تعليمية',
      description: 'Learning and skill development session',
      descriptionAr: 'جلسة تعلم وتطوير المهارات',
      location: 'Latakia',
      locationAr: 'اللاذقية',
      category: 'education',
      uploadedBy: 'Education Team',
      uploadDate: '2024-01-05',
      approved: true,
      featured: true
    },
    // New community photos from attachments
    {
      id: '5',
      url: '/504435580_688802243919719_1259884751197443936_n.jpeg',
      title: 'Community Outreach Program',
      titleAr: 'برنامج التوعية المجتمعية',
      description: 'Volunteers engaging with local community members',
      descriptionAr: 'متطوعون يتفاعلون مع أعضاء المجتمع المحلي',
      location: 'Edmonton, Canada',
      locationAr: 'إدمونتون، كندا',
      category: 'community',
      uploadedBy: 'Rhizome Canada',
      uploadDate: '2024-01-20',
      approved: true,
      featured: true
    },
    {
      id: '6',
      url: '/WhatsApp Image 2025-06-17 at 12.35.13 AM (2).jpeg',
      title: 'Community Support Initiative',
      titleAr: 'مبادرة الدعم المجتمعي',
      description: 'Team members providing assistance and support',
      descriptionAr: 'أعضاء الفريق يقدمون المساعدة والدعم',
      location: 'Local Region',
      locationAr: 'المنطقة',
      category: 'community',
      uploadedBy: 'RCF Team',
      uploadDate: '2024-01-18',
      approved: true,
      featured: true
    },
    {
      id: '7',
      url: '/WhatsApp Image 2025-06-17 at 12.35.14 AM.jpeg',
      title: 'Environmental Project',
      titleAr: 'مشروع بيئي',
      description: 'Community members working on environmental restoration',
      descriptionAr: 'أعضاء المجتمع يعملون على الترميم البيئي',
      location: 'Local Region',
      locationAr: 'المنطقة',
      category: 'community',
      uploadedBy: 'Environmental Team',
      uploadDate: '2024-01-16',
      approved: true,
      featured: true
    },
    {
      id: '8',
      url: '/WhatsApp Image 2025-06-17 at 12.35.14 AM (1).jpeg',
      title: 'Tree Planting Initiative',
      titleAr: 'مبادرة زراعة الأشجار',
      description: 'Volunteers planting trees for community green spaces',
      descriptionAr: 'متطوعون يزرعون الأشجار للمساحات الخضراء المجتمعية',
      location: 'Local Region',
      locationAr: 'المنطقة',
      category: 'community',
      uploadedBy: 'Green Team',
      uploadDate: '2024-01-14',
      approved: true,
      featured: true
    },
    {
      id: '9',
      url: '/WhatsApp Image 2025-06-17 at 12.35.14 AM (2).jpeg',
      title: 'Community Garden Project',
      titleAr: 'مشروع الحديقة المجتمعية',
      description: 'Building sustainable community gardens together',
      descriptionAr: 'بناء حدائق مجتمعية مستدامة معاً',
      location: 'Local Region',
      locationAr: 'المنطقة',
      category: 'community',
      uploadedBy: 'Garden Team',
      uploadDate: '2024-01-12',
      approved: true,
      featured: true
    },
    {
      id: '10',
      url: '/Untitled design (1).jpg',
      title: 'Community Workshop',
      titleAr: 'ورشة مجتمعية',
      description: 'Hands-on training session for local residents',
      descriptionAr: 'جلسة تدريب عملية للسكان المحليين',
      location: 'Toronto, Canada',
      locationAr: 'تورونتو، كندا',
      category: 'community',
      uploadedBy: 'RCF Team',
      uploadDate: '2024-01-22',
      approved: true,
      featured: true
    },
    {
      id: '11',
      url: '/WhatsApp Image 2025-06-17 at 12.39.55 AM (1).jpeg',
      title: 'Arts Event',
      titleAr: 'فعالية فنية',
      description: 'Showcasing creative work from youth members',
      descriptionAr: 'عرض أعمال إبداعية من أعضاء الشباب',
      location: 'Damascus',
      locationAr: 'دمشق',
      category: 'culture',
      uploadedBy: 'Arts Collective',
      uploadDate: '2024-01-21',
      approved: true,
      featured: true
    },
    {
      id: '12',
      url: '/WhatsApp Image 2025-06-19 at 12.35.09 PM copy.jpeg',
      title: 'Food Distribution',
      titleAr: 'توزيع الطعام',
      description: 'Volunteers distributing meals to families',
      descriptionAr: 'متطوعون يوزعون وجبات للأسر',
      location: 'Aleppo',
      locationAr: 'حلب',
      category: 'community',
      uploadedBy: 'Relief Team',
      uploadDate: '2024-01-19',
      approved: true,
      featured: true
    },
    {
      id: '13',
      url: '/WhatsApp Image 2025-06-19 at 12.35.09 PM copy copy.jpeg',
      title: 'Community Meeting',
      titleAr: 'اجتماع مجتمعي',
      description: 'Planning upcoming neighbourhood projects',
      descriptionAr: 'التخطيط لمشاريع الحي القادمة',
      location: 'Edmonton, Canada',
      locationAr: 'إدمونتون، كندا',
      category: 'community',
      uploadedBy: 'Rhizome Canada',
      uploadDate: '2024-01-17',
      approved: true,
      featured: true
    }
    ];

    const existingUrls = new Set(base.map(p => p.url));
    const extras: Photo[] = photoList
      .filter(url => !existingUrls.has(url))
      .map((url, index) => ({
        id: `auto-${index}`,
        url,
        title: 'Community Photo',
        titleAr: 'صورة المجتمع',
        description: 'Shared by the community.',
        descriptionAr: 'صورة تمت مشاركتها من المجتمع.',
        location: 'Unknown',
        locationAr: 'غير معروف',
        category: 'community',
        uploadedBy: 'Community',
        uploadDate: new Date().toISOString(),
        approved: true,
        featured: false
      }));

    const initial = [...base, ...extras].map((p) => ({
      ...p,
      likes: parseInt(
        typeof window !== 'undefined'
          ? localStorage.getItem(`likes-${p.id}`) || '0'
          : '0'
      ),
      comments: typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem(`comments-${p.id}`) || '[]')
        : []
    }));

    return initial;
  });

  // Total number of stories the community aims to collect
  const targetCount = 5000;

  // Count only the photos that have been approved
  const uploadedCount = photos.filter(p => p.approved).length;

  const addPhoto = (
    photoData: Omit<Photo, 'id' | 'uploadDate' | 'approved'>,
    approved = false
  ) => {
    const newPhoto: Photo = {
      ...photoData,
      id: Date.now().toString(),
      uploadDate: new Date().toISOString(),
      approved,
      likes: 0,
      comments: []
    };
    setPhotos(prev => [newPhoto, ...prev]);
  };

  const likePhoto = (id: string) => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(`liked-${id}`)) return;
    setPhotos(prev =>
      prev.map(p =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
    const current = parseInt(localStorage.getItem(`likes-${id}`) || '0') + 1;
    localStorage.setItem(`likes-${id}`, String(current));
    localStorage.setItem(`liked-${id}`, '1');
  };

  const addComment = (id: string, name: string, text: string) => {
    if (typeof window === 'undefined') return;
    const comment = { id: Date.now().toString(), name, text };
    setPhotos(prev =>
      prev.map(p =>
        p.id === id ? { ...p, comments: [...p.comments, comment] } : p
      )
    );
    const stored = JSON.parse(localStorage.getItem(`comments-${id}`) || '[]');
    stored.push(comment);
    localStorage.setItem(`comments-${id}`, JSON.stringify(stored));
  };

  const approvePhoto = (id: string) => {
    setPhotos(prev => prev.map(photo =>
      photo.id === id ? { ...photo, approved: true } : photo
    ));
  };

  const deletePhoto = (id: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
  };

  const featuredPhotos = photos.filter(photo => photo.featured && photo.approved);
  const communityPhotos = photos.filter(photo => photo.approved);
  const pendingPhotos = photos.filter(photo => !photo.approved);
  
  // Generate additional random photos for the full wall
  const randomPhotos = useMemo(() => {
    const generated = [];
    for (let i = 10; i <= 50; i++) {
      generated.push({
        id: `random-${i}`,
        url: `https://source.unsplash.com/600x600/?syria&sig=${i}`,
        title: `Community Story ${i}`,
        titleAr: `قصة المجتمع ${i}`,
        description: 'A story from our growing community network',
        descriptionAr: 'قصة من شبكة مجتمعنا المتنامية',
        location: 'Various Locations',
        locationAr: 'مواقع متنوعة',
        category: 'community',
        uploadedBy: 'Community Member',
        uploadDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        approved: true,
        featured: false,
        likes: 0,
        comments: []
      });
    }
    return generated;
  }, []);

  const allPhotos = useMemo(() => [...communityPhotos, ...randomPhotos], [communityPhotos, randomPhotos]);

  return (
    <PhotoContext.Provider value={{
      photos,
      uploadedCount,
      targetCount,
      addPhoto,
      likePhoto,
      addComment,
      approvePhoto,
      deletePhoto,
      pendingPhotos,
      featuredPhotos,
      communityPhotos,
      allPhotos
    }}>
      {children}
    </PhotoContext.Provider>
  );
};
