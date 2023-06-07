/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
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
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
