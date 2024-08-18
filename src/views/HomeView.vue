<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Recetas from '@/components/Recetas.vue';



</script>

<template>
  <main class="p-10 homeview container">
    <div class="row justify-content-center">
      <h2 class="py-5 ">Buscador de recetas</h2>
      <div class="border-0 rounded-2 shadow row mx-auto buscador">
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
    <section>
<p>aqui va una seleccion de recetas</p>
    </section>
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

.buscador form {
  width: 95%;
  margin: 0 auto;
}

.buscador {
  background-image: url("/img/fondo_buscador_min.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 95%;
}

.buscador .btn {
  background-color: var(--amber-700);
  color: white;
  transition: all 0.2s ease;
}

.buscador .btn:hover {
  background-color: var(--amber-600);
}

@media (width > 991px) {
  .buscador {
    width: 50%;
  }
}
</style>