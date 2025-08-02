import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
/* eslint-disable react-refresh/only-export-components */

interface Language {
  code: 'en' | 'ar';
  name: string;
  direction: 'ltr' | 'rtl';
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (_language: Language) => void;
  t: (_key: string, _enText: string, _arText: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'ar', name: 'العربية', direction: 'rtl' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const { hostname, pathname } = window.location;
      if (hostname.includes('rhizomsyria.org') || pathname.startsWith('/rhizome-syria')) {
        return languages[1];
      }
    }
    return languages[0];
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  useEffect(() => {
    document.documentElement.dir = currentLanguage.direction;
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  const t = (key: string, enText: string, arText: string): string => {
    return currentLanguage.code === 'ar' ? arText : enText;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { languages };
