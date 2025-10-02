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
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
        extrabold: 800,
      },
      colors:{
        // Legacy colors (keeping for compatibility)
        lightGray: '#8A8A8A',
        lighterGray: '#878686',
        LMveryLightBeige:"#FEFAF6",
        LMlightBeige:"#EADBC8",
        LMbeige:"#DAC0A3",
        DMdarkGray:"#222831",
        DMlightGray:"#393E46",
        LMBlue:"#102C57",
        DMyellow:"#FFD1E3",
        DMwhite:"#EEEEEE",

        // New Beautiful Light Theme Palette
        sage: '#9BABB8',        // Soft sage green-blue
        cream: '#EEE3CB',       // Warm cream
        sand: '#D7C0AE',        // Sandy beige
        mocha: "#967E76",       // Rich mocha brown
        
        // Terminal/Dark sections
        charcoal: '#2C2C2C',    // Very dark charcoal for terminals
        slate: '#3A3A3A',       // Slightly lighter slate
        ash: '#4A4A4A',         // Medium ash for accents
        
        // Text colors
        'text-primary': '#2C2C2C',    // Dark text for light theme
        'text-secondary': '#5A5A5A',  // Secondary text
        'text-muted': '#7A7A7A',      // Muted text
      },
      fontSize: {
        '32px': ['32px', '2rem'],
        '40px': ['40px', '2.5rem'],
        
    },
    },
  },
  plugins: [],
};
