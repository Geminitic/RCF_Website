import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, Leaf, Mountain, Droplets, Star, Award, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/rhizome-canada.css';

const RhizomeCanadaSubpage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const programs = Array.from({ length: 3 }, (_, i) => ({
    id: String(i + 1),
    title: '',
    titleAr: '',
    description: '',
    descriptionAr: '',
    participants: 0,
    location: '',
    locationAr: '',
    icon: [Leaf, Star, Mountain][i],
    gradient: ['var(--rc-gradient-nature)', 'var(--rc-gradient-canadian)', 'var(--rc-gradient-forest)'][i]
  }));

  const products = [
    {
      id: '1',
      title: 'Heritage Blend Coffee',
      titleAr: 'قهوة مزيج التراث',
      description: 'Ethically sourced coffee blend supporting Syrian farmers and Canadian roasters.',
      descriptionAr: 'مزيج قهوة مصدر أخلاقياً يدعم المزارعين السوريين ومحمصي القهوة الكنديين.',
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Artisan Honey Collection',
      titleAr: 'مجموعة العسل الحرفي',
      description: 'Pure Canadian honey from community-supported beekeepers.',
      descriptionAr: 'عسل كندي نقي من مربي النحل المدعومين من المجتمع.',
      price: '$18.99',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Cultural Recipe Book',
      titleAr: 'كتاب الوصفات الثقافية',
      description: 'Traditional Syrian recipes adapted for Canadian kitchens.',
      descriptionAr: 'وصفات سورية تقليدية مكيفة للمطابخ الكندية.',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Families Fed',
      labelAr: 'عائلة أطعمت',
      icon: Leaf
    },
    {
      number: '50+',
      label: 'Films Showcased',
      labelAr: 'فيلم عُرض',
      icon: Star
    },
    {
      number: '25+',
      label: 'Organizations Connected',
      labelAr: 'منظمة متصلة',
      icon: Mountain
    },
    {
      number: '12',
      label: 'Months Active',
      labelAr: 'شهر نشط',
      icon: Target
    }
  ];

  return (
    <div className="rhizome-canada min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
      {/* Hero Section with Canadian Logo Integration */}
      <section className="rc-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 via-emerald-600/90 to-green-600/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo Integration */}
            <div className="rc-logo-container justify-center mb-8">
              <img 
                src="/public/20250626_0153_Upscaled Vector Design_remix_01jynkghz8fg4v5w094qqj0epj.png" 
                alt="Rhizome Canada Logo" 
                className="h-20 w-auto rc-float"
              />
            </div>
            
            <h1 className={`rc-heading-1 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('rhizome-canada-title', 'Rhizome Canada', 'ريزوم كندا')}
            </h1>
            
            <p className={`rc-body-large text-white/90 max-w-4xl mx-auto mb-8 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'canada-hero-description',
                'Fostering Syrian-Canadian community connections through sustainable initiatives, cultural celebration, and collaborative partnerships.',
                'تعزيز الروابط المجتمعية السورية الكندية من خلال المبادرات المستدامة والاحتفال الثقافي والشراكات التعاونية.'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rc-button-primary">
                {t('explore-programs', 'Explore Programs', 'استكشف البرامج')}
              </button>
              <button className="rc-button-secondary bg-white/20 border-white/50 text-white hover:bg-white hover:text-teal-600">
                {t('shop-products', 'Shop Products', 'تسوق المنتجات')}
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Mountain Border */}
        <div className="rc-mountain-border" />
      </section>

      {/* Programs Section */}
      <section className="rc-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`rc-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('our-programs', 'Our Programs', 'برامجنا')}
            </h2>
            <p className={`rc-body-large max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'programs-description',
                'Community-driven initiatives that strengthen connections and build sustainable futures.',
                'مبادرات مجتمعية تقوي الروابط وتبني مستقبلاً مستداماً.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="rc-card rc-fade-in group"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
                    style={{ background: program.gradient }}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className={`rc-heading-3 mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`program-${index}-title`, program.title, program.titleAr)}
                  </h3>
                  
                  <p className={`rc-body mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`program-${index}-desc`, program.description, program.descriptionAr)}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                        {t(`program-${index}-location`, program.location, program.locationAr)}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{program.participants} {t('participants', 'participants', 'مشارك')}</span>
                    </div>
                  </div>
                  
                  <button className="rc-button-primary w-full mt-6 group-hover:scale-105 transition-transform">
                    {t('learn-more', 'Learn More', 'اعرف المزيد')}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="rc-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`rc-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('featured-products', 'Featured Products', 'المنتجات المميزة')}
            </h2>
            <p className={`rc-body-large max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'products-description',
                'Ethically sourced products that support both Syrian heritage and Canadian communities.',
                'منتجات مصدرة أخلاقياً تدعم التراث السوري والمجتمعات الكندية.'
              )}
            </p>
          </motion.div>

          <div className="rc-product-grid">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rc-product-card rc-scale-in"
              >
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="rc-product-image"
                />
                
                <div className="rc-product-content">
                  <h3 className={`rc-product-title ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`product-${index}-title`, product.title, product.titleAr)}
                  </h3>
                  
                  <p className={`rc-product-description ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`product-${index}-desc`, product.description, product.descriptionAr)}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="rc-product-price">{product.price}</span>
                    <button className="rc-button-primary">
                      {t('add-to-cart', 'Add to Cart', 'أضف للسلة')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="rc-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`rc-heading-2 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('our-impact', 'Our Impact', 'تأثيرنا')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center rc-scale-in"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {achievement.number}
                  </div>
                  
                  <div className={`rc-caption ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`achievement-${index}`, achievement.label, achievement.labelAr)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Garden Feature */}
      <section className="rc-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`rc-heading-2 mb-6 rc-maple-accent ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('community-garden', 'Community Garden', 'الحديقة المجتمعية')}
              </h2>
              
              <p className={`rc-body-large mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t(
                  'garden-description',
                  'Our Edmonton community garden brings together newcomers and long-term residents, fostering food security and cultural exchange.',
                  'تجمع حديقتنا المجتمعية في إدمونتون بين الوافدين الجدد والمقيمين طويل الأمد، وتعزز الأمن الغذائي والتبادل الثقافي.'
                )}
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Organic Vegetables', labelAr: 'خضروات عضوية' },
                  { label: 'Cultural Events', labelAr: 'فعاليات ثقافية' },
                  { label: 'Educational Workshops', labelAr: 'ورش تعليمية' },
                  { label: 'Community Healing', labelAr: 'الشفاء المجتمعي' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Leaf className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className={`rc-body ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(`garden-item-${index}`, item.label, item.labelAr)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-64 rounded-2xl shadow-2xl bg-stone-200 flex items-center justify-center">
                <span className="text-stone-500 text-sm">
                  {t('image-placeholder', 'Image pending', 'لا توجد صورة')}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rc-hero">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`rc-heading-2 text-white mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t('join-community', 'Join Our Community', 'انضم إلى مجتمعنا')}
            </h2>
            
            <p className={`rc-body-large text-white/90 max-w-3xl mx-auto mb-8 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
              {t(
                'join-description',
                'Be part of building sustainable communities and celebrating Syrian-Canadian connections.',
                'كن جزءاً من بناء مجتمعات مستدامة والاحتفال بالروابط السورية الكندية.'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rc-button-primary bg-white text-teal-600 hover:bg-gray-100">
                {t('get-involved', 'Get Involved', 'شارك معنا')}
              </button>
              <button className="rc-button-secondary border-white text-white hover:bg-white hover:text-teal-600">
                {t('shop-now', 'Shop Now', 'تسوق الآن')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RhizomeCanadaSubpage;