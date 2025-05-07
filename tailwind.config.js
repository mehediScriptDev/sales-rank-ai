/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        bg: 'rgb(16, 53, 112)',
        toBg: 'rgb(0, 79, 206)',
        likebg: 'rgb(242, 243, 243)',
        anotherbg: 'rgb(239, 239, 239)',
        btnbg: 'rgb(0, 40, 104)',
        gradient: 'rgb(255, 111, 185)',
        togradient: 'rgb(103, 151, 255)'
      },
      fontFamily:{
        manrope: "Manrope",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

