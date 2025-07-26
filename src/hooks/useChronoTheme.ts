import { useEffect } from 'react';

const dayPalette = {
  bg: '#CCF1FF',
  gradientStart: '#CCF1FF',
  gradientEnd: '#E4FFC7',
  primary: '#E4FFC7',
  accent: '#FFDAB9',
  text: '#0A1031',
};

const nightPalette = {
  bg: '#0A1031',
  gradientStart: '#0A1031',
  gradientEnd: '#3AAFA9',
  primary: '#3AAFA9',
  accent: '#D4D8E3',
  text: '#D4D8E3',
};

export const useChronoTheme = () => {
  useEffect(() => {
    const root = document.documentElement;

    const applyPalette = (palette: typeof dayPalette) => {
      root.style.setProperty('--bg-color', palette.bg);
      root.style.setProperty('--gradient-start', palette.gradientStart);
      root.style.setProperty('--gradient-end', palette.gradientEnd);
      root.style.setProperty('--primary-color', palette.primary);
      root.style.setProperty('--accent-color', palette.accent);
      root.style.setProperty('--text-color', palette.text);
    };

    const updateTheme = () => {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 18) {
        applyPalette(dayPalette);
      } else {
        applyPalette(nightPalette);
      }
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
};
