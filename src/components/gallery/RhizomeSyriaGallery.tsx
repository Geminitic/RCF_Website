import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import LazyImage from '../common/LazyImage';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Image as ImageIcon,
  Pause,
  Play,
} from 'lucide-react';

const RhizomeSyriaGallery: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    '/WhatsApp Image 2025-07-13 at 7.01.55 AM (4).jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.55 AM (1).jpeg',
    '/WhatsApp Image 2025-07-13 at 6.55.08 AM (1).jpeg',
    '/WhatsApp Image 2025-06-17 at 12.35.14 AM.jpeg',
    '/WhatsApp Image 2025-06-17 at 12.35.14 AM (1).jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.56 AM.jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.56 AM (7).jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.56 AM (6).jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.56 AM (5).jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.56 AM (4).jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.55 AM (5).jpeg',
    '/WhatsApp Image 2025-07-13 at 7.01.54 AM (2).jpeg',
  ];

  const captions = [
    {
      en: 'Horizontal connections between local communities',
      ar: 'روابط أفقية بين المجتمعات المحلية',
    },
    {
      en: 'Distributed intelligence through networks',
      ar: 'الذكاء الموزّع عبر الشبكات',
    },
    {
      en: 'Capacity building with youth as change agents',
      ar: 'بناء القدرات مع الشباب كعوامل للتغيير',
    },
    {
      en: 'Communities leading their own development',
      ar: 'المجتمعات تقود تنميتها بنفسها',
    },
    {
      en: 'Bridging knowledge across diverse contexts',
      ar: 'ربط المعرفة عبر سياقات متنوعة',
    },
    {
      en: 'Building resilience through interconnection',
      ar: 'بناء المرونة من خلال الترابط',
    },
    {
      en: 'Knowledge emerging from lived experience',
      ar: 'المعرفة تنبثق من التجربة المعاشة',
    },
    {
      en: 'Local craftspeople as keepers of tradition',
      ar: 'الحرفيون المحليون كحفظة للتقاليد',
    },
    {
      en: 'Collaborative planning for sustainable futures',
      ar: 'التخطيط التعاوني لمستقبل مستدام',
    },
    {
      en: 'Adaptive leadership across multiple nodes',
      ar: 'القيادة التكيفية عبر عقد متعددة',
    },
    {
      en: 'Emergent solutions from collective wisdom',
      ar: 'حلول ناشئة من الحكمة الجماعية',
    },
    {
      en: 'Integration of diverse perspectives and approaches',
      ar: 'دمج وجهات النظر والنهج المتنوعة',
    },
  ];

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (galleryRef.current?.requestFullscreen) {
        galleryRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Auto-advance the slideshow
  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isPaused, galleryImages.length]);

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="galleryGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6B46C1" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <path
            d="M50,50 Q30,30 50,10 Q70,30 90,50 Q70,70 50,90 Q30,70 10,50 Q30,30 50,50"
            fill="none"
            stroke="url(#galleryGradient)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rs-heading-2 text-center text-white mb-8 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
        >
          {t('gallery-heading', 'Our Community in Action', 'مجتمعنا في العمل')}
        </motion.h2>

        <div
          ref={galleryRef}
          className={`relative mx-auto overflow-hidden rounded-2xl shadow-2xl ${isFullscreen ? 'w-full h-screen' : 'max-w-5xl h-[600px]'} transition-all duration-500`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            >
              {isPaused ? (
                <Play className="h-5 w-5" />
              ) : (
                <Pause className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleFullscreen}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
              aria-label="Toggle fullscreen"
            >
              <Maximize className="h-5 w-5" />
            </button>
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
              aria-label="Toggle thumbnails"
            >
              <ImageIcon className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <LazyImage
                  src={galleryImages[currentIndex]}
                  alt={`Rhizome Syria ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-end">
                  <div className="p-8 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 rounded-full mr-3"></div>
                        <p className="text-sm font-medium text-white/80">
                          {currentIndex + 1}/{galleryImages.length}
                        </p>
                      </div>
                      <h3
                        className={`text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
                      >
                        {t(
                          `gallery-caption-${currentIndex}`,
                          captions[currentIndex].en,
                          captions[currentIndex].ar
                        )}
                      </h3>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500"
              initial={{ width: '0%' }}
              animate={{
                width: `${(currentIndex / (galleryImages.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Thumbnails panel */}
          <AnimatePresence>
            {showThumbnails && (
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 z-20"
              >
                <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 overflow-x-auto max-h-32">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer h-16 overflow-hidden rounded-md transition-all ${
                        index === currentIndex
                          ? 'ring-2 ring-orange-500 ring-offset-1 scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                    >
                      <LazyImage
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Gallery info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-center text-white"
        >
          <div
            className={`rs-body-large text-white/80 ${currentLanguage.code === 'ar' ? 'rs-arabic' : ''}`}
          >
            {t(
              'gallery-description',
              'These images showcase our work on the ground with Syrian communities. Each photo represents a story of collaboration, resilience, and community-led development.',
              'تعرض هذه الصور عملنا على الأرض مع المجتمعات السورية. كل صورة تمثل قصة تعاون ومرونة وتنمية يقودها المجتمع.'
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RhizomeSyriaGallery;
