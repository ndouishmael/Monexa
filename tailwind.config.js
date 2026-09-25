/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the Monexa logo (blue → teal on navy ink)
        ink: {
          DEFAULT: '#0b2035',
          50: '#f3f6fa',
          100: '#e2eaf1',
          200: '#c4d4e2',
          300: '#96b1c9',
          400: '#5f85a6',
          500: '#3d6688',
          600: '#2c4e6c',
          700: '#233f58',
          800: '#12283d',
          900: '#0b2035',
          950: '#061420',
        },
        brand: {
          blue: '#1f6fb8',
          bluedark: '#155a99',
          teal: '#2ba79c',
          tealdark: '#1f8a80',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        dash: {
          to: { 'stroke-dashoffset': '0' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        dash: 'dash 2.5s ease forwards',
        node: 'pulseNode 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
