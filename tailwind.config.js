/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize:{
      'xxs':'0.26rem',
      'ms':'0.7rem',
      'placeholder':'0.37rem',
      'placeholderIcon':'0.6rem',
      'footer':'0.4rem'
    },
    container: {
      padding: '1rem',
    },
    // screenSize:{
    //   // 'galaxy':'@media (min-width: 420px) { ... }',
    //   // 'fold':'@media (max-width: 420px) { ... }'
    // },

  },
  plugins: [
    require('tailwind-scrollbar-hide',"daisyui")
  ],
};
