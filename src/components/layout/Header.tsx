import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <header className="rhizome-intro">
      <div className="container flex flex-col items-center">
        {/* Logo at the top */}
        <img
          src="/public/20250710_0555_Rhizome Logo Design_remix_01jzt2tem6e8zse9br715pa28n (2).png" // Place rhizome-logo.png in your public directory
          alt="Rhizome Logo"
          style={{ height: '96px', marginBottom: '1rem' }}
        />
        <motion.h1
          initial={{ filter: 'blur(12px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.55, 0.085, 0.68, 0.53] }}
          className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-teal-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent"
        >
          {t('title', 'Rhizome Syria', 'رايزوم سوريا')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-lg md:text-xl max-w-2xl mx-auto opacity-90 ${
            currentLanguage.code === 'ar' ? 'font-arabic' : ''
          }`}
        >
          {t(
            'subtitle',
            'A non-linear network connecting communities, projects, and stories across Syria and the diaspora.',
            'شبكة غير خطية تربط المجتمعات والمشاريع والقصص عبر سوريا والشتات.'
          )}
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
