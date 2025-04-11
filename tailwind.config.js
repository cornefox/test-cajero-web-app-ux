/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

module.exports = {
  darkMode: ['class', '[class="app-dark"]'],  // Se recomienda usar 'class' para mayor consistencia
  content: ['./src/**/*.{html,ts,scss,css}', './index.html'],
  plugins: [primeui],  // Carga de TailwindCSS PrimeUI
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px',
    },
  },
};
