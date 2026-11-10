/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Corporate Deep Navy / Black from "FTPL" typography
        primary: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#060B14',
        },
        // Official Royal Blue from the logo ring (#0056B3)
        brandBlue: {
          DEFAULT: '#0056B3',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#0056B3',
          600: '#004899',
          700: '#003A80',
          800: '#002C66',
          900: '#001E4D',
          hover: '#004899'
        },
        // Official Flasho Red from the electric lightning bolt (#E51A1A)
        brandRed: {
          DEFAULT: '#E51A1A',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#E51A1A',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          hover: '#DC2626'
        },
        // Component aliases
        accent: {
          DEFAULT: '#0056B3',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#0056B3',
          600: '#004899',
          700: '#003A80',
          800: '#002C66',
          hover: '#004899',
        },
        highlight: {
          DEFAULT: '#E51A1A',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#E51A1A',
          600: '#DC2626',
          700: '#B91C1C',
        },
        background: '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'soft-xl': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        'glow-blue': '0 0 25px -5px rgba(0, 86, 179, 0.35)',
        'glow-red': '0 0 25px -5px rgba(229, 26, 26, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.75 },
        }
      }
    },
  },
  plugins: [],
}
