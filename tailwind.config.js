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
        toBg: 'rgb(0, 79, 206)',
        likebg: 'rgb(242, 243, 243)',
        anotherbg: 'rgb(239, 239, 239)',
        anotherbg: 'rgb(0, 40, 104)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

