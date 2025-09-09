import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Camera, MapPin, Tag, User } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { usePhoto } from '../../contexts/PhotoContext';
import { useUser } from '../../contexts/UserContext';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({ isOpen, onClose }) => {
  const { t, currentLanguage } = useLanguage();
  const { addPhoto } = usePhoto();
  const { isAdmin } = useUser();
  const [formData, setFormData] = useState({
    title: '',
    titleAr: '',
    description: '',
    descriptionAr: '',
    location: '',
    locationAr: '',
    category: 'community',
    uploadedBy: '',
    featured: false
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { key: 'community', en: 'Community', ar: 'المجتمع' },
    { key: 'culture', en: 'Culture', ar: 'الثقافة' },
    { key: 'education', en: 'Education', ar: 'التعليم' },
    { key: 'youth', en: 'Youth', ar: 'الشباب' },
    { key: 'events', en: 'Events', ar: 'الفعاليات' }
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsSubmitting(true);

    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create photo object
    const newPhoto = {
      ...formData,
      url: previewUrl, // In real app, this would be the uploaded file URL
      featured: false
    };

    addPhoto(newPhoto, isAdmin);

    if (isAdmin) {
      alert('Photo uploaded successfully.');
    } else {
      alert('Your photo has been submitted for admin approval.');
    }

    // Reset form
    setFormData({
      title: '',
      titleAr: '',
      description: '',
      descriptionAr: '',
      location: '',
      locationAr: '',
      category: 'community',
      uploadedBy: '',
      featured: false
    });
    setSelectedFile(null);
    setPreviewUrl('');
    setIsSubmitting(false);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold text-stone-900 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('upload-story-title', 'Share Your Story', 'شارك قصتك')}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* File Upload */}
                <div>
                  <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('photo-upload', 'Upload Photo', 'رفع صورة')}
                  </label>
                  <div className="border-2 border-dashed border-stone-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
                    {previewUrl ? (
                      <div className="relative">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-h-48 mx-auto rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFile(null);
                            setPreviewUrl('');
                          }}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Camera className="h-12 w-12 text-stone-400 mx-auto mb-4" />
                        <p className={`text-stone-600 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                          {t('drag-drop', 'Drag and drop your photo here, or click to select', 'اسحب وأفلت صورتك هنا، أو انقر للاختيار')}
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="photo-upload"
                          required
                        />
                        <label
                          htmlFor="photo-upload"
                          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 cursor-pointer transition-colors"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {t('select-photo', 'Select Photo', 'اختر صورة')}
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Title */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {t('title-english', 'Title (English)', 'العنوان (إنجليزي)')}
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('title-arabic', 'Title (Arabic)', 'العنوان (عربي)')}
                    </label>
                    <input
                      type="text"
                      value={formData.titleAr}
                      onChange={(e) => handleInputChange('titleAr', e.target.value)}
                      className={`w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${currentLanguage.code === 'ar' ? 'font-arabic text-right' : ''}`}
                      dir="rtl"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {t('description-english', 'Description (English)', 'الوصف (إنجليزي)')}
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('description-arabic', 'Description (Arabic)', 'الوصف (عربي)')}
                    </label>
                    <textarea
                      value={formData.descriptionAr}
                      onChange={(e) => handleInputChange('descriptionAr', e.target.value)}
                      rows={3}
                      className={`w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${currentLanguage.code === 'ar' ? 'font-arabic text-right' : ''}`}
                      dir="rtl"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      {t('location-english', 'Location (English)', 'الموقع (إنجليزي)')}
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-stone-700 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      <MapPin className="h-4 w-4 inline mr-1" />
                      {t('location-arabic', 'Location (Arabic)', 'الموقع (عربي)')}
                    </label>
                    <input
                      type="text"
                      value={formData.locationAr}
                      onChange={(e) => handleInputChange('locationAr', e.target.value)}
                      className={`w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${currentLanguage.code === 'ar' ? 'font-arabic text-right' : ''}`}
                      dir="rtl"
                    />
                  </div>
                </div>

                {/* Category and Uploader */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <Tag className="h-4 w-4 inline mr-1" />
                      {t('category', 'Category', 'الفئة')}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className={`w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {categories.map((category) => (
                        <option key={category.key} value={category.key}>
                          {t(`category-${category.key}`, category.en, category.ar)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      {t('your-name', 'Your Name', 'اسمك')}
                    </label>
                    <input
                      type="text"
                      value={formData.uploadedBy}
                      onChange={(e) => handleInputChange('uploadedBy', e.target.value)}
                      className={`w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 text-stone-600 hover:text-stone-800 transition-colors"
                  >
                    {t('cancel', 'Cancel', 'إلغاء')}
                  </button>
                  <button
                    type="submit"
                    disabled={!selectedFile || isSubmitting}
                    className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        {t('uploading', 'Uploading...', 'جاري الرفع...')}
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        {t('share-story', 'Share Story', 'شارك القصة')}
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Guidelines */}
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <h3 className={`font-semibold text-emerald-800 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('guidelines-title', 'Community Guidelines', 'إرشادات المجتمع')}
                </h3>
                <ul className={`text-sm text-emerald-700 space-y-1 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  <li>• {t('guideline-1', 'Share authentic stories and experiences', 'شارك القصص والتجارب الأصيلة')}</li>
                  <li>• {t('guideline-2', 'Respect privacy and obtain consent when featuring others', 'احترم الخصوصية واحصل على الموافقة عند عرض الآخرين')}</li>
                  <li>• {t('guideline-3', 'Use appropriate language and content', 'استخدم لغة ومحتوى مناسبين')}</li>
                  <li>• {t('guideline-4', 'All submissions are reviewed before publication', 'جميع المساهمات تُراجع قبل النشر')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoUploadModal;