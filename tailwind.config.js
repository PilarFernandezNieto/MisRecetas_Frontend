/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/views/admin/NuevoIngredienteView.vue",
    "./formkit.config.js",
    
  ],
  theme: {
    extend: {
    
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
