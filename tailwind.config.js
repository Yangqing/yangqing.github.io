/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        gray: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          600: '#555555',
          500: '#737373',
          200: '#eeeeee',
        },
      },
      spacing: {
        700: '700px',
      },
    },
  },
  plugins: [],
};
