/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
  	themes:[],
  },
  plugins: [require('daisyui'),require('tailwind-scrollbar-hide')],
}
