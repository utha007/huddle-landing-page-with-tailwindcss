/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'violet' : 'hsl(257, 40%, 49%)',
        'smagenta' : 'hsl(300, 69%, 71%)',
      }
    },
  },
  plugins: [],
}
