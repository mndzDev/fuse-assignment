/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'base-white': '#FFFFFF',
      'error': {
        50: '#FEF3F2',
        200: '#FECDCA',
        500: '#F04438',
        700: '#B42318'
      },
      'gray': {
        50: '#F9FAFB',
        100: '#F9FAFB',
        200: '#EAECF0',
        300: '#D0D5DD',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1D2939',
        900: '#101828'
      },
      'primary': {
        600: '#7F56D9',
        700: '#6941C6'
      },
      'success': {
        50: '#ECFDF3',
        200: '#ABEFC6',
        500: '#17B26A',
        700: '#067647'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
