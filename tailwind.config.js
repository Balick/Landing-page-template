/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'universe': "url('../assets/img/universe.jpg')"
      }
    },
  },
  plugins: [],
}
