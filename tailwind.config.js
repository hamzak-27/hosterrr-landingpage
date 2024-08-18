/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        lato:"'Lato', sans-serif",
      }

    },
  },
  plugins: [],
};

