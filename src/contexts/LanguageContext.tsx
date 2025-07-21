import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  code: 'en' | 'ar';
  name: string;
  direction: 'ltr' | 'rtl';
}

interface LanguageContextType {
  currentLanguage: Language;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (_language: Language) => void;
  // eslint-disable-next-line no-unused-vars
  t: (_key: string, _enText: string, _arText: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'ar', name: 'العربية', direction: 'rtl' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
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
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    document.documentElement.dir = language.direction;
    document.documentElement.lang = language.code;
  };

  const t = (_key: string, _enText: string, _arText: string): string => {
    return currentLanguage.code === 'ar' ? _arText : _enText;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { languages };
