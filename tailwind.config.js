import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      primary: colors.blue,
      secondary: colors.yellow,
      
    },
  },
  plugins: [],
}

