/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#A5ECFF',
          100: '#5DDDFF',
          200: '#3AD5FF',
          300: '#16CEFF',
          400: '#00BFF1',
          500: '#00A2CE',
          600: '#0086AA',
          700: '#006A86',
          800: '#004E62',
          900: '#00323F',
        },
        secondary: {
          50: '#A9FFFE',
          100: '#61FFFE',
          200: '#3EFFFE',
          300: '#1AFFFD',
          400: '#00F5F4',
          500: '#00D2D1',
          600: '#00AEAD',
          700: '#008A89',
          800: '#006666',
          900: '#004342',
        },
        accent: {
          50: '#84EFFF',
          100: '#3CE6FE',
          200: '#19E1FF',
          300: '#00D5F4',
          400: '#00B6D0',
          500: '#0097AD',
          600: '#007789',
          700: '#005865',
          800: '#003941',
          900: '#001A1E',
        },
        rhizome: {
          green: '#00A2CE',
          blue: '#00D2D1',
          orange: '#0097AD',
          dark: '#00323F',
          light: '#A5ECFF',
          red: '#006A86'
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