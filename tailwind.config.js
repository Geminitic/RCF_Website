/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#c6f3ff',
          100: '#9deaff',
          200: '#73e1ff',
          300: '#21d0ff',
          400: '#00b3e2',
          500: '#00a3ce',
          600: '#0092b9',
          700: '#00779f',
          800: '#01546f',
          900: '#03353e',
        },
        secondary: {
          50: '#deeae0',
          100: '#a6c7aa',
          200: '#7aaa80',
          300: '#5c9162',
          400: '#4e7b53',
          500: '#47704c',
          600: '#3f6444',
          700: '#38593c',
          800: '#314e35',
          900: '#2a432d',
        },
        accent: {
          50: '#cffefe',
          100: '#8ffffe',
          200: '#51fefe',
          300: '#12fefd',
          400: '#00e7e5',
          500: '#00d2d1',
          600: '#00bdbc',
          700: '#00a8a7',
          800: '#009392',
          900: '#007d7d',
        },
        rhizome: {
          green: '#47704c',
          blue: '#00a3ce',
          orange: '#00d2d1',
          dark: '#03353e',
          light: '#f2fdfd',
          red: '#00d2d1'
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