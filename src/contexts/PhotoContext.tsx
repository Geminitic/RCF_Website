import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

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
  addPhoto: (photo: Omit<Photo, 'id' | 'uploadDate' | 'approved'>, approved?: boolean) => void;
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
  // Simplified photo data using placeholder images
  const [photos] = useState<Photo[]>(() => {
    const basePhotos: Photo[] = [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        featured: true,
        likes: 0,
        comments: []
      },
      {
        id: '2',
        url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Cultural Festival',
        titleAr: 'مهرجان ثقافي',
        description: 'Celebrating local heritage and traditions',
        descriptionAr: 'الاحتفال بالتراث والتقاليد المحلية',
        location: 'Damascus',
        locationAr: 'دمشق',
        category: 'culture',
        uploadedBy: 'Community Member',
        uploadDate: '2024-01-10',
        approved: true,
        featured: true,
        likes: 0,
        comments: []
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        featured: true,
        likes: 0,
        comments: []
      }
    ];

    return basePhotos.map((p) => ({
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
  });

  const targetCount = 1000; // Reduced target
  const uploadedCount = photos.filter(p => p.approved).length;

  const addPhoto = (
    photoData: Omit<Photo, 'id' | 'uploadDate' | 'approved'>,
    approved = false
  ) => {
    // Implementation would add to state
  };

  const likePhoto = (id: string) => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(`liked-${id}`)) return;
    
    const current = parseInt(localStorage.getItem(`likes-${id}`) || '0') + 1;
    localStorage.setItem(`likes-${id}`, String(current));
    localStorage.setItem(`liked-${id}`, '1');
  };

  const addComment = (id: string, name: string, text: string) => {
    if (typeof window === 'undefined') return;
    const comment = { id: Date.now().toString(), name, text };
    const stored = JSON.parse(localStorage.getItem(`comments-${id}`) || '[]');
    stored.push(comment);
    localStorage.setItem(`comments-${id}`, JSON.stringify(stored));
  };

  const approvePhoto = () => {};
  const deletePhoto = () => {};

  const featuredPhotos = photos.filter(photo => photo.featured && photo.approved);
  const communityPhotos = photos.filter(photo => photo.approved);
  const pendingPhotos = photos.filter(photo => !photo.approved);
  
  // Generate minimal additional photos
  const randomPhotos = useMemo(() => {
    const generated = [];
    for (let i = 4; i <= 12; i++) {
      generated.push({
        id: `random-${i}`,
        url: `https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&sig=${i}`,
        title: `Community Story ${i}`,
        titleAr: `قصة المجتمع ${i}`,
        description: 'A story from our community network',
        descriptionAr: 'قصة من شبكة مجتمعنا',
        location: 'Various',
        locationAr: 'متنوعة',
        category: 'community',
        uploadedBy: 'Community',
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