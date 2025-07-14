import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Globe,
  Clock,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      titleAr: 'راسلنا',
      details: ['info@rhizomefoundation.ca'],
      detailsAr: ['info@rhizomefoundation.ca']
    },
    {
      icon: Phone,
      title: 'Call Us',
      titleAr: 'اتصل بنا',
      details: ['+1 (416) 555-0123', '+963 11 555-0456'],
      detailsAr: ['+1 (416) 555-0123', '+963 11 555-0456']
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      titleAr: 'زرنا',
      details: [
        '2028 157 St S.W T6W 5ER Edmonton, Canada',
        'Latakia Sheikh Daher Square, 1st floor facing Saladin bookstore'
      ],
      detailsAr: [
        '2028 157 ستريت جنوب غرب، T6W 5ER، إدمونتون، كندا',
        'اللاذقية، ساحة الشيخ ضاهر، الطابق الأول مقابل مكتبة صلاح الدين'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      titleAr: 'ساعات العمل',
      details: ['Mon-Fri: 9AM-6PM EST', 'Sat: 10AM-4PM EST'],
      detailsAr: ['الإثنين-الجمعة: 9ص-6م', 'السبت: 10ص-4م']
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'text-sky-500' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'text-blue-700' }
  ];

  const offices = [
    {
      name: 'Rhizome Canada',
      nameAr: 'ريزوم كندا',
      address: '2028 157 St S.W, T6W 5ER Edmonton, Canada',
      addressAr: '2028 157 ستريت جنوب غرب، T6W 5ER، إدمونتون، كندا',
      phone: '+1 (416) 555-0123',
      email: 'info@rhizomefoundation.ca',
      hours: 'Mon-Fri: 9AM-6PM EST',
      hoursAr: 'الإثنين-الجمعة: 9ص-6م بتوقيت شرق أمريكا',
      mapUrl:
        'https://www.openstreetmap.org/export/embed.html?bbox=-113.7138411%2C53.3372558%2C-113.2714783%2C53.7162646&layer=mapnik'
    },
    {
      name: 'Rhizome Syria',
      nameAr: 'ريزوم سوريا',
      address: 'Latakia Sheikh Daher Square, 1st floor facing Saladin bookstore',
      addressAr: 'اللاذقية، ساحة الشيخ ضاهر، الطابق الأول مقابل مكتبة صلاح الدين',
      phone: '+963 11 555-0456',
      email: 'info@rhizomsyria.org',
      hours: 'Sun-Thu: 9AM-5PM Damascus Time',
      hoursAr: 'الأحد-الخميس: 9ص-5م بتوقيت دمشق',
      mapUrl:
        'https://www.openstreetmap.org/export/embed.html?bbox=35.6181044%2C35.3600185%2C35.9381044%2C35.6800185&layer=mapnik'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-indigo-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('contact-title', 'Connect With Us', 'تواصل معنا')}
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              {t(
                'contact-subtitle',
                'Your voice matters to us. Reach out and let\'s start a conversation about creating change together.',
                'صوتك يهمنا. تواصل معنا ولنجعل التغيير واقعًا معًا.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@rhizomsyria.org"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {t('email-us', 'Email Us', 'راسلنا')}
              </a>
              <a
                href="tel:+14165550123"
                className="inline-flex items-center px-6 py-3 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-900 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t('call-us', 'Call Us', 'اتصل بنا')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className={`text-3xl font-bold text-stone-900 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                {t('send-message', 'Send us a Message', 'أرسل لنا رسالة')}
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className={`text-xl font-bold text-green-600 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('message-sent', 'Message Sent!', 'تم إرسال الرسالة!')}
                  </h3>
                  <p className={`text-stone-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('message-sent-desc', 'Thank you for reaching out. We\'ll get back to you soon.', 'شكراً لتواصلك معنا. سنعود إليك قريباً.')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                        {t('your-name', 'Your Name', 'اسمك')}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${currentLanguage.code === 'ar' ? 'font-arabic text-right' : ''}`}
                        required
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                        {t('your-email', 'Your Email', 'بريدك الإلكتروني')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('subject', 'Subject', 'الموضوع')}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${currentLanguage.code === 'ar' ? 'font-arabic text-right' : ''}`}
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('message', 'Message', 'الرسالة')}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className={`w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${currentLanguage.code === 'ar' ? 'font-arabic text-right' : ''}`}
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-stone-300 rounded"
                    />
                    <label htmlFor="newsletter" className={`ml-2 text-sm text-stone-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('newsletter-signup', 'Subscribe to our newsletter for updates', 'اشترك في نشرتنا الإخبارية للحصول على التحديثات')}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        {t('sending', 'Sending...', 'جاري الإرسال...')}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {t('send-message-btn', 'Send Message', 'أرسل الرسالة')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className={`text-3xl font-bold text-stone-900 mb-6 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('contact-info', 'Contact Information', 'معلومات الاتصال')}
                </h2>
                <p className={`text-lg text-stone-600 mb-8 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(
                    'contact-info-desc',
                    'Reach out to us through any of these channels. We\'re here to help and answer your questions.',
                    'تواصل معنا عبر أي من هذه القنوات؛ نحن جاهزون للمساعدة والإجابة عن أسئلتك.'
                  )}
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-stone-900 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                          {t(`contact-${index}-title`, info.title, info.titleAr)}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className={`text-stone-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                              {currentLanguage.code === 'ar' ? info.detailsAr[detailIndex] : detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className={`font-semibold text-stone-900 mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('follow-us', 'Follow Us', 'تابعنا')}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors ${social.color}`}
                        title={social.name}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-center mb-16 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              {t('our-offices', 'Our Offices', 'مكاتبنا')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t(
                'offices-description',
                'Visit us at our locations or connect with our regional teams.',
                'تفضل بزيارتنا في مواقعنا أو تواصل مع فرقنا الإقليمية.'
              )}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-indigo-50 to-stone-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold text-stone-900 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t(`office-${index}-name`, office.name, office.nameAr)}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <p className={`text-stone-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(`office-${index}-address`, office.address, office.addressAr)}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                    <a href={`tel:${office.phone}`} className="text-stone-700 hover:text-indigo-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                    <a href={`mailto:${office.email}`} className="text-stone-700 hover:text-indigo-600 transition-colors">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                    <p className={`text-stone-700 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(`office-${index}-hours`, office.hours, office.hoursAr)}
                    </p>
                  </div>

                  {office.mapUrl && (
                    <div className="mt-4">
                      <iframe
                        src={office.mapUrl}
                        style={{ border: 0 }}
                        width="100%"
                        height="200"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <button className="w-full flex items-center justify-center px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    {t('contact-office', 'Contact This Office', 'اتصل بهذا المكتب')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;