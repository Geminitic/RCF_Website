import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Upload,
  Filter,
  Search,
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Calendar,
  X,
  Camera,
  Target,
  Users,
  Globe,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePhoto } from '../contexts/PhotoContext';
import { useUser } from '../contexts/UserContext';
import PhotoUploadModal from '../components/community/PhotoUploadModal';

const CommunityWallPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const { likePhoto, addComment, photos, uploadedCount, targetCount } =
    usePhoto();
  const { isAdmin } = useUser();
  const [taglineEn, setTaglineEn] = useState(
    () =>
      localStorage.getItem('cw-tagline-en') ||
      'A vibrant tapestry of stories, moments, and memories that celebrate our global Syrian community.'
  );
  const [taglineAr, setTaglineAr] = useState(
    () =>
      localStorage.getItem('cw-tagline-ar') ||
      'نسيج نابض من القصص واللحظات والذكريات التي تحتفي بمجتمعنا السوري العالمي.'
  );
  const [editingTagline, setEditingTagline] = useState(false);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [loadedPhotos, setLoadedPhotos] = useState(12);

  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
    rootMargin: '100px',
  });

  const categories = [
    { key: 'all', en: 'All', ar: 'الكل' },
    { key: 'community', en: 'Community', ar: 'المجتمع' },
    { key: 'culture', en: 'Culture', ar: 'الثقافة' },
    { key: 'education', en: 'Education', ar: 'التعليم' },
    { key: 'youth', en: 'Youth', ar: 'الشباب' },
    { key: 'events', en: 'Events', ar: 'الفعاليات' },
  ];

  // Generate additional photos for infinite scroll
  const generateMorePhotos = useCallback(() => {
    const additionalPhotos = [];
    const basePhotos = photos.filter((p) => p.approved);

    for (let i = 0; i < 12; i++) {
      const basePhoto = basePhotos[i % basePhotos.length];
      additionalPhotos.push({
        ...basePhoto,
        id: `generated-${Date.now()}-${i}`,
        title: `${basePhoto.title} ${Math.floor(Math.random() * 100)}`,
        titleAr: `${basePhoto.titleAr} ${Math.floor(Math.random() * 100)}`,
        url: `https://source.unsplash.com/600x600/?syria&sig=${Date.now() + i}`,
        uploadDate: new Date(
          Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
        ).toISOString(),
      });
    }
    return additionalPhotos;
  }, [photos]);

  const [allPhotos, setAllPhotos] = useState(() => [
    ...photos.filter((p) => p.approved),
    ...generateMorePhotos(),
  ]);

  useEffect(() => {
    if (inView && loadedPhotos < allPhotos.length) {
      setTimeout(() => {
        const newPhotos = generateMorePhotos();
        setAllPhotos((prev) => [...prev, ...newPhotos]);
        setLoadedPhotos((prev) => prev + 12);
      }, 500);
    }
  }, [inView, loadedPhotos, allPhotos.length, generateMorePhotos]);

  useEffect(() => {
    let filtered = allPhotos.slice(0, loadedPhotos);

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (photo) => photo.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (photo) =>
          photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          photo.titleAr.includes(searchTerm) ||
          photo.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          photo.locationAr.includes(searchTerm)
      );
    }

    setFilteredPhotos(filtered);
  }, [allPhotos, loadedPhotos, selectedCategory, searchTerm]);

  const progressPercentage = (uploadedCount / targetCount) * 100;

  const getGridClass = (index: number) => {
    const patterns = [
      '', // normal
      'md:col-span-2', // wide
      'md:row-span-2', // tall
      'md:col-span-2 md:row-span-2', // large
    ];

    // Create interesting patterns
    if (index % 7 === 0) return patterns[3]; // large every 7th
    if (index % 5 === 0) return patterns[2]; // tall every 5th
    if (index % 3 === 0) return patterns[1]; // wide every 3rd
    return patterns[0]; // normal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-sky-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-800 via-sky-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('community-wall-title', 'Community Canvas', 'لوحة المجتمع')}
            </h1>
            {editingTagline ? (
              <div className="mb-8 max-w-3xl mx-auto space-y-2">
                <input
                  className="w-full px-3 py-2 text-stone-800 rounded"
                  value={taglineEn}
                  onChange={(e) => setTaglineEn(e.target.value)}
                />
                <input
                  className="w-full px-3 py-2 text-stone-800 rounded"
                  value={taglineAr}
                  onChange={(e) => setTaglineAr(e.target.value)}
                  dir="rtl"
                />
                <button
                  className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded"
                  onClick={() => {
                    localStorage.setItem('cw-tagline-en', taglineEn);
                    localStorage.setItem('cw-tagline-ar', taglineAr);
                    setEditingTagline(false);
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                {currentLanguage.code === 'ar' ? taglineAr : taglineEn}
              </p>
            )}
            {isAdmin && !editingTagline && (
              <button
                className="mb-4 underline"
                onClick={() => setEditingTagline(true)}
              >
                Edit Tagline
              </button>
            )}

            {/* Progress Tracker */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span className="font-medium">
                    {t(
                      'documentation-goal',
                      'Documentation Goal',
                      'هدف التوثيق'
                    )}
                  </span>
                </div>
                <span className="font-bold">
                  {uploadedCount.toLocaleString()} /{' '}
                  {targetCount.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-indigo-800 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 h-4 rounded-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </motion.div>
              </div>
              <p className="text-sm text-indigo-200 mt-2">
                {progressPercentage.toFixed(1)}%{' '}
                {t('completed', 'completed', 'مكتمل')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">
                  {Math.floor(uploadedCount / 10)}+
                </div>
                <div className="text-sm text-indigo-200">
                  {t('contributors', 'Contributors', 'مساهمون')}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Globe className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-indigo-200">
                  {t('countries', 'Countries', 'دولة')}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Camera className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">
                  {filteredPhotos.length}+
                </div>
                <div className="text-sm text-indigo-200">
                  {t('stories', 'Stories', 'قصة')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                type="text"
                placeholder={t(
                  'search-placeholder',
                  'Search stories...',
                  'البحث في القصص...'
                )}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  currentLanguage.code === 'ar' ? 'font-arabic text-right' : ''
                }`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-stone-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  currentLanguage.code === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {t(`category-${category.key}`, category.en, category.ar)}
                  </option>
                ))}
              </select>
            </div>

            {/* Upload Button */}
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Upload className="h-5 w-5 mr-2" />
              {t('upload-story', 'Upload Story', 'رفع قصة')}
            </button>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${getGridClass(index)}`}
                onClick={() => setSelectedPhoto(photo)}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-full">
                  <img
                    src={photo.url}
                    alt={t('photo-title', photo.title, photo.titleAr)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3
                      className={`font-semibold mb-1 line-clamp-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {t('photo-title', photo.title, photo.titleAr)}
                    </h3>
                    <div className="flex items-center text-xs opacity-90 mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span
                        className={
                          currentLanguage.code === 'ar' ? 'font-arabic' : ''
                        }
                      >
                        {t('photo-location', photo.location, photo.locationAr)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          className="flex items-center space-x-1 hover:text-red-300 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            likePhoto(photo.id);
                          }}
                        >
                          <Heart className="h-4 w-4" />
                          <span>{photo.likes}</span>
                        </button>
                        <button
                          className="flex items-center space-x-1 hover:text-blue-300 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPhoto(photo);
                          }}
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>{photo.comments.length}</span>
                        </button>
                      </div>
                      <button
                        className="hover:text-indigo-300 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (navigator.share) {
                            navigator.share({ url: window.location.href });
                          } else {
                            navigator.clipboard.writeText(window.location.href);
                          }
                        }}
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                      {t(
                        `category-${photo.category}`,
                        photo.category,
                        photo.category
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Trigger */}
          <div ref={loadMoreRef} className="mt-12 text-center">
            {loadedPhotos < allPhotos.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center space-x-3"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full"
                />
                <span
                  className={`text-indigo-600 font-medium ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                >
                  {t(
                    'loading-more',
                    'Loading more stories...',
                    'تحميل المزيد من القصص...'
                  )}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Upload Modal */}
      <PhotoUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />

      {/* Photo Detail Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedPhoto.url}
                  alt={t(
                    'photo-title',
                    selectedPhoto.title,
                    selectedPhoto.titleAr
                  )}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <h2
                  className={`text-2xl font-bold text-stone-900 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                >
                  {t('photo-title', selectedPhoto.title, selectedPhoto.titleAr)}
                </h2>

                <div className="flex items-center text-stone-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span
                    className={
                      currentLanguage.code === 'ar' ? 'font-arabic' : ''
                    }
                  >
                    {t(
                      'photo-location',
                      selectedPhoto.location,
                      selectedPhoto.locationAr
                    )}
                  </span>
                  <Calendar className="h-4 w-4 ml-4 mr-2" />
                  <span>
                    {new Date(selectedPhoto.uploadDate).toLocaleDateString()}
                  </span>
                </div>

                <p
                  className={`text-stone-700 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                >
                  {t(
                    'photo-description',
                    selectedPhoto.description,
                    selectedPhoto.descriptionAr
                  )}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      onClick={() => likePhoto(selectedPhoto.id)}
                    >
                      <Heart className="h-5 w-5" />
                      <span>{selectedPhoto.likes}</span>
                    </button>
                    <button
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                      onClick={() => {
                        const name = prompt('Name');
                        const text = name ? prompt('Comment') : null;
                        if (name && text)
                          addComment(selectedPhoto.id, name, text);
                      }}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>{selectedPhoto.comments.length}</span>
                    </button>
                  </div>
                  <button
                    className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
                    onClick={() => {
                      if (navigator.share)
                        navigator.share({ url: window.location.href });
                      else navigator.clipboard.writeText(window.location.href);
                    }}
                  >
                    <Share2 className="h-5 w-5" />
                    <span>{t('share', 'Share', 'مشاركة')}</span>
                  </button>
                </div>
                {selectedPhoto.comments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {selectedPhoto.comments.map((c) => (
                      <div
                        key={c.id}
                        className="text-sm text-stone-800 border-b pb-1"
                      >
                        <strong>{c.name}:</strong> {c.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommunityWallPage;
