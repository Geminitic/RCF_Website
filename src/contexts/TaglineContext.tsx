import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BilingualText {
  en: string;
  ar: string;
}

interface TaglineContextType {
  title: BilingualText;
  subtitle: BilingualText;
  setTagline: (title: BilingualText, subtitle: BilingualText) => void;
}

const defaultTitle: BilingualText = {
  en: 'Community Canvas',
  ar: 'لوحة المجتمع'
};

const defaultSubtitle: BilingualText = {
  en: 'A vibrant tapestry of stories, moments, and memories that celebrate our global Syrian community.',
  ar: 'نسيج نابض من القصص واللحظات والذكريات التي تحتفي بمجتمعنا السوري العالمي.'
};

const TaglineContext = createContext<TaglineContextType | undefined>(undefined);

export const useTagline = () => {
  const ctx = useContext(TaglineContext);
  if (!ctx) {
    throw new Error('useTagline must be used within a TaglineProvider');
  }
  return ctx;
};

interface Props {
  children: ReactNode;
}

export const TaglineProvider: React.FC<Props> = ({ children }) => {
  const [title, setTitle] = useState<BilingualText>(() => {
    const stored = localStorage.getItem('tagline-title');
    return stored ? JSON.parse(stored) : defaultTitle;
  });
  const [subtitle, setSubtitle] = useState<BilingualText>(() => {
    const stored = localStorage.getItem('tagline-subtitle');
    return stored ? JSON.parse(stored) : defaultSubtitle;
  });

  const setTagline = (t: BilingualText, s: BilingualText) => {
    setTitle(t);
    setSubtitle(s);
    localStorage.setItem('tagline-title', JSON.stringify(t));
    localStorage.setItem('tagline-subtitle', JSON.stringify(s));
  };

  return (
    <TaglineContext.Provider value={{ title, subtitle, setTagline }}>
      {children}
    </TaglineContext.Provider>
  );
};
