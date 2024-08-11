<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main class="p-10 min-vh-100 homeview container">
    <div class="row justify-content-center">
      <h2 class="py-5 ">Buscador de recetas</h2>
      <div class="border rounded-2 shadow row w-50 mx-auto buscador">
        <form>
          <div class="row p-3 ">
            <div class="input-group">
              <input id="receta" placeholder="Buscar receta" class="form-control">
              <button type="submit" class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>

            </div>
          </div>
        </form>
      </div>
    </div>
  </main>

</template>
