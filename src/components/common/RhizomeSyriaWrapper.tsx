import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import RhizomeSyriaPage from '../../pages/RhizomeSyriaPage';

const RhizomeSyriaWrapper: React.FC = () => {
  const { setLanguage } = useLanguage();

  // Set language to Arabic when component mounts
  useEffect(() => {
    // Create the Arabic language object
    const arabicLanguage = {
      code: 'ar' as const,
      name: 'العربية',
      direction: 'rtl' as const,
    };
    setLanguage(arabicLanguage);
  }, [setLanguage]);

  return <RhizomeSyriaPage />;
};

export default RhizomeSyriaWrapper;
