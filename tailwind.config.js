/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F3A',
          50: '#F0F4FA',
          100: '#DCE6F3',
          200: '#B9CFE7',
          300: '#8FB2D7',
          400: '#5F8DC2',
          500: '#346BA9',
          600: '#1F4F8A',
          700: '#143765',
          800: '#0B1F3A',
          900: '#061324',
          950: '#030A14',
        },
        accent: {
          DEFAULT: '#2F6BFF',
          50: '#EFF4FF',
          100: '#DBE6FE',
          200: '#BFD3FE',
          300: '#93B8FD',
          400: '#6093FA',
          500: '#2F6BFF',
          600: '#1D4FE8',
          700: '#153BB8',
          800: '#173394',
          900: '#182F75',
          hover: '#1D4FE8',
        },
        highlight: {
          DEFAULT: '#FF9933',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#FF9933',
          600: '#EA7518',
          700: '#C2570C',
          800: '#9A4112',
          900: '#7C3412',
        },
        background: '#F8FAFC',
        dark: {
          bg: '#060F1E',
          card: '#0B1A30',
          elevated: '#112442',
          border: '#193259',
          muted: '#8CA3C7'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(11, 31, 58, 0.08)',
        'soft-xl': '0 20px 40px -15px rgba(11, 31, 58, 0.12)',
        'glow-accent': '0 0 25px -5px rgba(47, 107, 255, 0.4)',
        'glow-highlight': '0 0 25px -5px rgba(255, 153, 51, 0.4)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
