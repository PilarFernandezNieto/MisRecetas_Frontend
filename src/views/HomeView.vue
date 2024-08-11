<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main class="p-10 h-screen">
    <h2 class="text-3xl text-amber-700 font-black text-center py-5">Buscador de recetas</h2>
    <div class="bg-slate-50 opacity-80 border rounded shadow-lg max-w-96 mx-auto ">
      <form class="space-y-5 ">
        <div class="flex items-center justify-center p-5 gap-2">
          <input id="receta" placeholder="Buscar receta"
            class="z-10 border-2 rounded-lg p-2 !bg-white opacity-1 focus:outline-none focus:ring-2 focus:ring-amber-500">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>
    </div>
  </main>

</template>
