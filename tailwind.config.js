/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/views/admin/NuevoIngredienteView.vue",
    "./src/views/auth/RegistroView.vue",
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
