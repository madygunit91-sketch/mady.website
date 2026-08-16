/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: '#f1f1ef',
        ink: '#0b0b0c',
        gilt: '#cfcfcf'
      }
    },
  },
  plugins: [],
}
