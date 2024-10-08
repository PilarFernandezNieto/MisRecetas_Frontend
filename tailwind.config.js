/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/views/admin/NuevoIngredienteView.vue",
    "./src/views/admin/NuevaRecetaView.vue",
    "./src/views/auth/RegistroView.vue",
    "./src/views/auth/LoginView.vue",
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
