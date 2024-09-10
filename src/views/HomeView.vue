<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Recetas from '@/components/Recetas.vue';
import Buscador from '@/components/Buscador.vue';
const authRoutes = [
    {name: "registro", text: "Regístrate aquí"},
    {name: "login", text: "Inicia Sesión"},

]
</script>

<template>
  <main class="p-10 homeview fondo-body d-fle flex-column">
    <div class="container">
      <Buscador />
      <nav class="row mt-5 justify-content-between">
            <RouterLink v-for="(route, index) in authRoutes" :key="index" :to="{name: route.name}"  class="col-12 col-md-4 text-center text-md-left py-2 mb-2">{{ route.text }}</RouterLink>

        </nav>
    </div>
  
  </main>



</template>
<style scoped>
/* HomeView */

h2 {
  font-size: 2.5rem;
  color: var(--amber-800);
  text-align: center;
  font-family: var(--titulo-font);
}

section {
  margin: 8rem 0;
}
a {
    background-color: var(--amber-400);
    padding: 0.2rem 0.5rem;
    text-transform: uppercase;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.8rem;
    justify-content: center;
    transition: background-color 0.5s ease-in;
}
a:hover {
    background-color: var(--amber-500);
}
nav {
    width: 90%;
    margin: 0 auto;
}
@media(width > 798px){
    a {
        padding: 0.5rem 1rem;
    }
    nav {
        width: 66.66%;
    }
}
@media (width > 991px){
    nav {
        max-width: 50%;
    }
  }


</style>