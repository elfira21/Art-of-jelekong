/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'kursus.html','Login.html','seni.html'],
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
        six: '#D8EEE7',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        body:['Montserrat']
      },
    },
  },
  plugins: [],
}

