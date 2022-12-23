/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'overpass': ['Overpass', 'sans-serif'],
    },
    screens: {
      sm: '340px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryClr: 'hsl(25, 97%, 53%)',
        neutralClr300: 'hsl(0, 0%, 100%)',
        neutralClr400: 'hsl(217, 12%, 63%)',
        neutralClr500: 'hsl(216, 12%, 54%)',
        neutralClr600: 'hsl(213, 19%, 18%)',
        neutralClr700: 'hsl(216, 12%, 8%)',
        neutralClr800: 'hsl(210, 18%, 14%)',
      },
    },
  },
  plugins: [],
}
