/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0F0F0F',
        bronze: '#CDAA7D',
        bone: '#F8F6F3',
        espresso: '#3E2C27',
        ash: '#B0B0B0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'], // Keep for hero only
        sans: ['Inter', 'sans-serif'], // Primary font for everything else
        mono: ['Inter', 'sans-serif'], // Use Inter instead of monospace
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}; 