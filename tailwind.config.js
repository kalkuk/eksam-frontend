/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
 
    extend: {
      colors: {
        'dark': {
          900: 'hsl(348, 22, 10)',
          800: 'hsl(347, 10, 18)',
          700: 'hsl(348, 22, 30)',
          600: 'hsl(348, 22, 40)',
          500: 'hsl(348, 22, 50)',
        },
        
        'primary': 'hsl(1,79,52)',
        'secondary': 'hsl(2,79,721)',
        'light': 'hsl(60, 21, 94)',
      },
    },
  },
  plugins: [],
}

