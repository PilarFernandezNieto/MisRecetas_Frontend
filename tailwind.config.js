/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "imgHeader": "url('/img/slide.jpg')" 
      }
    },
  },
  plugins: [],
  important: true
}

