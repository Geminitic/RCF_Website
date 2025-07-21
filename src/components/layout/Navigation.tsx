import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

// Logo image sourced from the public folder. This image was provided in the
// repository and represents the Rhizome branding colors.
import LogoImage from '/20250710_0555_Rhizome Logo Design_remix_01jzt2tem6e8zse9br715pa28n (2).png';
import { useLanguage, languages } from '../../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { t, currentLanguage, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', path: '/about', en: 'About', ar: 'من نحن' },
    { key: 'programs', path: '/programs', en: 'Programs', ar: 'البرامج' },
    { key: 'rhizome-syria', path: '/rhizome-syria', en: 'Rhizome Syria', ar: 'ريزوم سوريا' },
    { key: 'knowledge', path: '/knowledge-hub', en: 'Knowledge Hub', ar: 'مركز المعرفة' },
    { key: 'calendar', path: '/calendar', en: 'Calendar', ar: 'التقويم' },
    { key: 'contact', path: '/contact', en: 'Contact', ar: 'اتصل بنا' }
  ];

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo section now uses the provided image with a subtle animation */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src={LogoImage}
              alt="Rhizome logo"
              className="w-10 h-10 object-contain rounded-md shadow-md"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className={`${currentLanguage.code === 'ar' ? 'font-arabic text-xs' : 'text-xs'}`}>
              <div className="font-bold text-teal-800 text-sm">
                {t('nav-title', 'Rhizome Community', 'ريزوم المجتمعية')}
              </div>
              <div className="text-xs text-stone-600">
                {t('nav-subtitle', 'Foundation', 'مؤسسة')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`relative px-2 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-teal-700'
                    : isScrolled
                    ? 'text-stone-700 hover:text-teal-700'
                    : 'text-white hover:text-teal-200'
                } ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
              >
                {t(`nav-${item.key}`, item.en, item.ar)}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700"
                  />
                )}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center space-x-1 px-2 py-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-stone-700 hover:text-teal-700' : 'text-white hover:text-teal-200'
                }`}
              >
                <Globe className="h-4 w-4" />
                <span>{currentLanguage.name}</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-stone-200"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-teal-50 transition-colors ${
                          currentLanguage.code === lang.code ? 'text-teal-700 font-medium' : 'text-stone-700'
                        } ${lang.code === 'ar' ? 'font-arabic' : ''}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'text-teal-700 bg-teal-50'
                      : 'text-stone-700 hover:text-teal-700 hover:bg-stone-50'
                  } ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
                >
                  {t(`nav-${item.key}`, item.en, item.ar)}
                </Link>
              ))}
              
              <div className="border-t border-stone-200 pt-2 mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      currentLanguage.code === lang.code
                        ? 'text-teal-700 bg-teal-50'
                        : 'text-stone-700 hover:text-teal-700 hover:bg-stone-50'
                    } ${lang.code === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    <div className="bg-yellow-100 text-yellow-800 text-center text-sm py-2">
      {t(
        'experimental-release',
        'This website is an experimental release. Content may change.',
        'هذا الموقع إصدار تجريبي والمحتوى قابل للتغيير.'
      )}
    </div>
    </>
  );
};

export default Navigation;