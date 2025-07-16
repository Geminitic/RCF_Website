/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { languages, Language } from '../data/languages';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, enText: string, arText: string) => string;
}


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

  const t = (key: string, enText: string, arText: string): string => {
    return currentLanguage.code === 'ar' ? arText : enText;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
