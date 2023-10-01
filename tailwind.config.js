/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluedark': '#0E091E',
        'blueprimary':'#24217B',
        'bluelight':'#2C309D',
        'waterdark':'#050E2D',
        'waterlight':'#051E8E',
        "purple1":'#080D2C',
        "purple2":'#1B2063',
        "navybluedark":'#070C28',
        "navyblue":'#0A0E2D',
        "bluedark2":'#080C2E',
        "blue2":'#171D4C',
        "bluedark3":'#090F30',
        "blue3":'#1D2863',
      },
    }
  },
  plugins: [require('daisyui')],
  
}

