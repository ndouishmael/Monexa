/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b2035',
          50: '#f5f8fa',
          100: '#e5edf2',
          200: '#cbd8e2',
          300: '#a4b8c7',
          400: '#718da1',
          500: '#4f6d82',
          600: '#385469',
          700: '#294155',
          800: '#182f42',
          900: '#0b2035',
          950: '#051828',
        },
        brand: {
          blue: '#096db7',
          bluedark: '#07558f',
          teal: '#18a89b',
          tealdark: '#087f78',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Aptos',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'SFMono-Regular',
          'Cascadia Code',
          'Roboto Mono',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      maxWidth: {
        content: '1280px',
      },
      keyframes: {
        'line-in': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'line-in': 'line-in .8s cubic-bezier(.22,1,.36,1) both',
      },
    },
  },
  plugins: [],
}
