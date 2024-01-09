/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding : '16px',
    },
    fontFamily : {
      sans: [ "Nunito", "sans-serif" ],
      lobster: ['Lobster', 'cursive'],

    },
    extend: {
      colors: {
        primary : "#c12525",
        secondary : '#64748b',
        dark : '#2D3250',
        light : '#F9FAFB',
        portosec : '#323E48',
        ijo : '#2BC377',
        oren : '#957723',
        ijotua : '#0F5E24'
      },
      screens: {
        '2xl': '1320px',
      },

    },
  },
  plugins: [],
}

