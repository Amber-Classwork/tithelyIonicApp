/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "pale-green": "#5BD9A4",
        "dark-blue": "#15243B"
      },
      fontSize: {
        '2xs': '.65rem'
      }
    },
  },
  plugins: [],
}