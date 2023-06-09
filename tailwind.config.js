/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'kursus.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0C7566',
        second: '#EFFBF7' ,
        third: '#FD5B3E',
        five: '#0E7969',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

