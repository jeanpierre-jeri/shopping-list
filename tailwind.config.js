/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif']
      },
      colors: {
        primary: '#F9A109',
        content: '#34333A',
        gray: '#C1C1C4'
      },
      screens: {
        xs: '450px'
      }
    }
  },
  plugins: []
}
