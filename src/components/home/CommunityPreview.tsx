import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Upload, Target, Eye, Grid } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { usePhoto } from '../../contexts/PhotoContext';

const CommunityPreview: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const { communityPhotos, allPhotos, uploadedCount, targetCount } = usePhoto();
  const [showAll, setShowAll] = useState(false);

  const progressPercentage = (uploadedCount / targetCount) * 100;
  const displayPhotos = showAll ? allPhotos.slice(0, 20) : communityPhotos.slice(0, 6);

  const getGridClass = (index: number) => {
    if (showAll) {
      // More varied grid for full view
      if (index % 7 === 0) return 'md:col-span-2 md:row-span-2'; // large
      if (index % 5 === 0) return 'md:row-span-2'; // tall
      if (index % 3 === 0) return 'md:col-span-2'; // wide
      return ''; // normal
    } else {
      // Simpler grid for preview
      if (index === 0) return 'md:col-span-2 md:row-span-2'; // first one large
      if (index === 2) return 'md:col-span-2'; // third one wide
      return ''; // normal
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          <h2 className="text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
            {t('community-wall-title', 'Community Canvas', 'لوحة المجتمع')}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            {t(
              'community-wall-description',
              'A vibrant mosaic of stories, achievements, and moments that define our shared journey.',
              'فسيفساء نابضة من القصص والإنجازات واللحظات التي تحدد رحلتنا المشتركة.'
            )}
          </p>

          {/* Progress Tracker */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-stone-700">
                  {t('documentation-goal', 'Community Stories', 'قصص المجتمع')}
                </span>
              </div>
              <span className="text-sm font-bold text-emerald-600">
                {uploadedCount.toLocaleString()} / {targetCount.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-stone-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 h-3 rounded-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </motion.div>
            </div>
            <p className="text-xs text-stone-500 mt-1">
              {progressPercentage.toFixed(1)}% {t('completed', 'completed', 'مكتمل')}
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setShowAll(false)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors ${
                !showAll
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              <Eye className="h-4 w-4 mr-2" />
              {t('community-photos', 'Community Photos', 'صور المجتمع')}
            </button>
            <button
              onClick={() => setShowAll(true)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors ${
                showAll
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              <Grid className="h-4 w-4 mr-2" />
              {t('all-content', 'All Content', 'جميع المحتوى')}
            </button>
          </div>
        </motion.div>

        {/* Photos Grid */}
        <div className={`grid grid-cols-2 ${showAll ? 'md:grid-cols-4 lg:grid-cols-5' : 'md:grid-cols-3'} gap-4 mb-12 auto-rows-[200px]`}>
          {displayPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl aspect-square ${getGridClass(index)}`}
            >
              <img
                src={photo.url}
                alt={t('photo-title', photo.title, photo.titleAr)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className={`font-semibold text-sm mb-1 line-clamp-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('photo-title', photo.title, photo.titleAr)}
                </h3>
                <p className={`text-xs opacity-90 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('photo-location', photo.location, photo.locationAr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/community-wall"
            className="group inline-flex items-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Camera className="h-5 w-5 mr-2" />
            <span>
              {t('explore-wall', 'Explore Wallfinity', 'استكشف وولفينيتي')}
            </span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button className="group inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full border-2 border-emerald-700 hover:bg-emerald-50 transition-all duration-300">
            <Upload className="h-5 w-5 mr-2" />
            <span>
              {t('contribute-story', 'Contribute Your Story', 'ساهم بقصتك')}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPreview;