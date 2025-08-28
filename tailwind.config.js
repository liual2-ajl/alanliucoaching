/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#e0f2f7',
          100: '#b3e0ed',
          200: '#80cee3',
          300: '#4dbcdc',
          400: '#26aed5',
          500: '#009fce',
          600: '#008bb8',
          700: '#0076a1',
          800: '#00618a',
          900: '#004c73',
          950: '#00365c',
        },
      },
    },
  },
  plugins: [],
}

