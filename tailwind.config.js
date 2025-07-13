/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1fbfe',
          100: '#e3f6fb',
          200: '#c5ecf7',
          300: '#a3dbe4',
          400: '#7cced8',
          500: '#4eb5cb',
          600: '#37a3bb',
          700: '#1b8aa5',
          800: '#03729d',
          900: '#023b4b',
        },
        secondary: {
          50: '#f2feff',
          100: '#defcff',
          200: '#c6f8fb',
          300: '#a8f0f5',
          400: '#7cdedf',
          500: '#4ecbd1',
          600: '#31bac5',
          700: '#0fa7b8',
          800: '#0b95a9',
          900: '#087890',
        },
        accent: {
          50: '#fefeff',
          100: '#e8f8fa',
          200: '#d1eef3',
          300: '#b4e0e7',
          400: '#97d2db',
          500: '#7cced8',
          600: '#5cb7c2',
          700: '#3ea1ad',
          800: '#1e8b99',
          900: '#03729d',
        },
        rhizome: {
          green: '#03729d',
          blue: '#4eb5cb',
          orange: '#0bd2d1',
          dark: '#023b4b',
          light: '#a3dbe4',
          red: '#fefeff'
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