import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockCommunityMembers } from '../../data/mockData';
import ScrollReveal from '../common/ScrollReveal';
import MagneticHover from '../common/MagneticHover';
import RippleEffect from '../common/RippleEffect';

const CommunityCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState<Record<string, boolean>>({});
  const { t, currentLanguage } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockCommunityMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockCommunityMembers.length) % mockCommunityMembers.length);
  };

  const flipCard = (memberId: string) => {
    setIsFlipped(prev => ({ ...prev, [memberId]: !prev[memberId] }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-accent-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-20"
            style={{
              right: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 gradient-text">
              {t('community-title', 'Meet Our Community', 'تعرف على مجتمعنا')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                'community-desc',
                'Inspiring individuals building change across Syria through collaboration and innovation',
                'أفراد ملهمون يبنون التغيير في جميع أنحاء سوريا من خلال التعاون والابتكار'
              )}
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="relative">
          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <MagneticHover strength={0.2}>
              <RippleEffect>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-600 hover-glow"
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
              </RippleEffect>
            </MagneticHover>
            
            <MagneticHover strength={0.2}>
              <RippleEffect>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-600 hover-glow"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </RippleEffect>
            </MagneticHover>
          </div>

          {/* Enhanced Carousel */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + mockCommunityMembers.length) % mockCommunityMembers.length;
              const member = mockCommunityMembers[index];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${member.id}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.7,
                    scale: isCenter ? 1 : 0.9,
                    y: 0,
                    zIndex: isCenter ? 10 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative ${isCenter ? 'transform scale-105' : ''}`}
                >
                  {/* Enhanced Flip Card Container */}
                  <div
                    className="relative w-full h-96 cursor-pointer card-hover"
                    onClick={() => flipCard(member.id)}
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{ rotateY: isFlipped[member.id] ? 180 : 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {/* Enhanced Front of Card */}
                      <div
                        className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden hover-lift"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="relative h-64 overflow-hidden">
                          <motion.img
                            src={member.image}
                            alt={t('member-image', member.name, member.nameAr)}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <motion.div 
                            className="absolute bottom-4 left-4 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <h3 className={`text-xl font-bold ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                              {t('member-name', member.name, member.nameAr)}
                            </h3>
                            <p className={`text-sm opacity-90 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                              {t('member-role', member.role, member.roleAr)}
                            </p>
                          </motion.div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <MapPin className="h-4 w-4 text-primary-600" />
                            <span className="text-sm text-gray-600">{member.location}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.skills.slice(0, 3).map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: skillIndex * 0.1 }}
                                className="px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full font-medium hover:bg-primary-200 transition-colors"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                          
                          <div className="text-center">
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-xs text-gray-500 flex items-center justify-center space-x-2"
                            >
                              <motion.div
                                animate={{ rotate: [0, 180, 360] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-4 h-4 border-2 border-primary-300 border-t-primary-600 rounded-full"
                              />
                              <span>{t('click-to-flip', 'Click to flip', 'انقر للقلب')}</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Back of Card */}
                      <div
                        className={`absolute inset-0 w-full h-full bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 rounded-2xl shadow-xl p-6 text-white ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="flex flex-col h-full relative overflow-hidden">
                          {/* Background pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full transform rotate-45 scale-150" />
                          </div>
                          
                          <div className="flex items-center mb-4 relative z-10">
                            <Star className="h-5 w-5 text-yellow-300 mr-2" />
                            <span className="font-semibold">
                              {t('featured-member', 'Featured Member', 'عضو مميز')}
                            </span>
                          </div>
                          
                          <p className="text-sm leading-relaxed mb-6 flex-grow relative z-10">
                            {t('member-bio', member.bio, member.bioAr)}
                          </p>
                          
                          <div className="space-y-3 relative z-10">
                            <h4 className="font-semibold text-sm">
                              {t('skills', 'Skills & Expertise', 'المهارات والخبرات')}
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {member.skills.map((skill, skillIndex) => (
                                <motion.span
                                  key={skillIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: skillIndex * 0.1 }}
                                  className="px-2 py-1 bg-white/20 text-white text-xs rounded-md hover:bg-white/30 transition-colors"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                            
                            {member.social && (
                              <div className="flex space-x-3 pt-2">
                                {Object.entries(member.social).map(([platform, _handle]) => (
                                  <MagneticHover key={platform} strength={0.3}>
                                    <motion.button
                                      whileHover={{ scale: 1.2, rotate: 10 }}
                                      whileTap={{ scale: 0.9 }}
                                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </motion.button>
                                  </MagneticHover>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {mockCommunityMembers.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="w-full h-full bg-primary-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCarousel;
