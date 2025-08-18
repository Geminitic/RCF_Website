import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import LazyImage from '../common/LazyImage';

interface Photo {
  url: string;
  caption?: string;
  captionAr?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  titleAr?: string;
  className?: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  title = 'Photo Gallery',
  titleAr = 'معرض الصور',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { currentLanguage } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className={`photo-gallery ${className}`}>
      <h2 className="text-3xl font-bold mb-6 text-center">
        {currentLanguage.code === 'ar' ? titleAr : title}
      </h2>

      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-xl shadow-lg mb-6 h-96">
        <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
          <button
            onClick={prevSlide}
            className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="h-full w-full">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <LazyImage
                src={photo.url}
                alt={photo.caption || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                onClick={() => openLightbox(index)}
              />
              {(photo.caption || photo.captionAr) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 backdrop-blur-sm">
                  <p className="text-sm text-center">
                    {currentLanguage.code === 'ar' && photo.captionAr
                      ? photo.captionAr
                      : photo.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`h-20 overflow-hidden rounded-md cursor-pointer transition-all ${
              index === currentIndex
                ? 'ring-4 ring-indigo-500 ring-opacity-75'
                : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <LazyImage
              src={photo.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={closeLightbox}
                className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-between px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevSlide}
                className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div
              className="max-w-5xl max-h-screen p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[currentIndex].url}
                alt={
                  photos[currentIndex].caption ||
                  `Gallery image ${currentIndex + 1}`
                }
                className="max-w-full max-h-[85vh] mx-auto object-contain"
              />
              {(photos[currentIndex].caption ||
                photos[currentIndex].captionAr) && (
                <div className="bg-black/50 text-white p-3 mt-2 rounded backdrop-blur-sm">
                  <p className="text-center">
                    {currentLanguage.code === 'ar' &&
                    photos[currentIndex].captionAr
                      ? photos[currentIndex].captionAr
                      : photos[currentIndex].caption}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
