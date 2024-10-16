/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'lightblue': '#B9E6FF',
        'darkslategrey': '#2C382A',
        'darkslateblue': '#4663AC',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.35)',
        '4xl': '0 45px 65px rgba(0, 0, 0, 0.45)',
        'box': '1px 6px 6px rgba(0, 0, 0, 0.25)',
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [],
}
