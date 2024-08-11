<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main class="p-10 min-vh-100 homeview container">
    <div class="row justify-content-center">
      <h2 class="py-5 ">Buscador de recetas</h2>
      <div class="border-0 rounded-2 shadow row w-50 mx-auto buscador">
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
<style scoped>
/* HomeView */
h2 {
  font-size: 2.5rem;
  color: var(--amber-800);
  text-align: center;
  font-family: var(--titulo-font);
}

.buscador form {
  width: 75%;
  margin: 0 auto;
}

.buscador {
  background-image: url("/public/img/fondo_buscador_min.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.buscador .btn {
  background-color: var(--amber-700);
  color: white;
  transition: all 0.2s ease;
}

.buscador .btn:hover {
  background-color: var(--amber-600);
}
</style>