/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope: ["Manrope", "sans-serif"]
      },
      colors:{
        bg: 'rgb(16, 53, 112)',
        toBg: 'rgb(0, 79, 206)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

