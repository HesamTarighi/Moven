/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#f3f3f3',
        'third': '#666666',
        'fourth': '#090909',
        'base': '#ffffff',
      },
      width: {
        '2xl': "1200px",
        'xl': "1100px",
        'lg': "1000px",
      },
      fontFamily: {
        'gilroy-medium': ['gilroy-medium'],
        'gilroy-regular': ['gilroy-regular'],
        'gilroy-bold': ['gilroy-bold'],
        'gilroy-black': ['gilroy-black'],
      },
      padding: {
        'standard': '60px'
      }
    },
  },
  plugins: [],
}

