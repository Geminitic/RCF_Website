import React, { createContext, useContext, useState, ReactNode } from 'react';

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
}

interface PhotoContextType {
  photos: Photo[];
  uploadedCount: number;
  targetCount: number;
  addPhoto: (photo: Omit<Photo, 'id' | 'uploadDate' | 'approved'>) => void;
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
  const [photos, setPhotos] = useState<Photo[]>([
    // Real community photos
    {
      id: '1',
      url: '/484134928_122145258254471410_1133353559349890810_n.jpg',
      title: 'Community Gathering',
      titleAr: 'تجمع مجتمعي',
      description: 'A vibrant community event bringing people together',
      descriptionAr: 'فعالية مجتمعية نابضة بالحياة تجمع الناس معاً',
      location: 'Aleppo, Syria',
      locationAr: 'حلب، سوريا',
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
      description: 'Celebrating Syrian heritage and traditions',
      descriptionAr: 'الاحتفال بالتراث والتقاليد السورية',
      location: 'Damascus, Syria',
      locationAr: 'دمشق، سوريا',
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
      location: 'Homs, Syria',
      locationAr: 'حمص، سوريا',
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
      location: 'Latakia, Syria',
      locationAr: 'اللاذقية، سوريا',
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
      location: 'Syria',
      locationAr: 'سوريا',
      category: 'community',
      uploadedBy: 'Rhizome Syria',
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
      location: 'Syria',
      locationAr: 'سوريا',
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
      location: 'Syria',
      locationAr: 'سوريا',
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
      location: 'Syria',
      locationAr: 'سوريا',
      category: 'community',
      uploadedBy: 'Garden Team',
      uploadDate: '2024-01-12',
      approved: true,
      featured: true
    }
  ]);

  const targetCount = 50000;
  const uploadedCount = photos.filter(p => p.approved).length + 1247; // Simulated existing count

  const addPhoto = (photoData: Omit<Photo, 'id' | 'uploadDate' | 'approved'>) => {
    const newPhoto: Photo = {
      ...photoData,
      id: Date.now().toString(),
      uploadDate: new Date().toISOString(),
      approved: false
    };
    setPhotos(prev => [newPhoto, ...prev]);
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
  const generateRandomPhotos = () => {
    const randomPhotos = [];
    for (let i = 10; i <= 50; i++) {
      randomPhotos.push({
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
        featured: false
      });
    }
    return randomPhotos;
  };

  const allPhotos = [...communityPhotos, ...generateRandomPhotos()];

  return (
    <PhotoContext.Provider value={{
      photos,
      uploadedCount,
      targetCount,
      addPhoto,
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