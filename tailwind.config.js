/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#55d4ff',
          100: '#22c7ff',
          200: '#00b2ee',
          300: '#0094c6',
          400: '#0084b1',
          500: '#0079a2',
          600: '#006283',
          700: '#004b65',
          800: '#003446',
          900: '#001e28',
        },
        secondary: {
          50: '#81f8ff',
          100: '#4ef6ff',
          200: '#1bf3ff',
          300: '#00e5f2',
          400: '#00d1dd',
          500: '#00c3ce',
          600: '#00a6af',
          700: '#008991',
          800: '#006c72',
          900: '#004f54',
        },
        accent: {
          50: '#31e1fd',
          100: '#02d7f9',
          200: '#02abc7',
          300: '#01889e',
          400: '#01778a',
          500: '#016a7b',
          600: '#01505d',
          700: '#01363e',
          800: '#001c20',
          900: '#000102',
        },
        rhizome: {
          green: '#065f46',
          blue: '#3b82f6',
          orange: '#f97316',
          dark: '#1f2937',
          light: '#f9fafb',
          red: '#9d174d'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'rhizome-pulse': 'rhizomePulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rhizomePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        }
      },
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'Arial', 'sans-serif'],
        'sans': ['Poppins', 'Noto Sans Arabic', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};