export interface Language {
  code: 'en' | 'ar';
  name: string;
  direction: 'ltr' | 'rtl';
}

export const languages: Language[] = [
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'ar', name: 'العربية', direction: 'rtl' },
];
