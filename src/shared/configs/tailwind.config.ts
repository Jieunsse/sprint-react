// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#3692FF',
          150: '#2F80ED',
          200: '#1967D6',
          300: '#1251AA',
        },
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        error: {
          DEFAULT: '#F74747',
        },
      },
    },
  },
  plugins: [],
};

export default config;
