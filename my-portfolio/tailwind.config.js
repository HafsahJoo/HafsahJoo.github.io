/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lemonmilk : ['Lemonmilk', 'sans-serif'],
        inter : ['Inter', 'sans-serif'],
        tommy : ['tommy', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
        extrabold: 800,
      },
      colors:{
        lightGray: '#8A8A8A',
        lighterGray: '#878686',
        LMveryLightBeige:"#FEFAF6",
        LMlightBeige:"#EADBC8",
        LMbeige:"#DAC0A3",
        DMdarkGray:"#222831",
        DMlightGray:"#393E46",
        LMBlue:"#102C57",
        DMyellow:"#FFD369",
        DMwhite:"#EEEEEE",


        
      },
      fontSize: {
        '40px': ['40px', '2.5rem'],
    },
    },
  },
  plugins: [],
};
