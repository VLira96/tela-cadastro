/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          dark: '#ECEC00',
          light: '#FFFFA9'
        },
        brown: {
          taupe: '#483C32'
        },
        gray: {
          light: '#FCFCFC'
        }
      }
    },
  },
  plugins: [],
}