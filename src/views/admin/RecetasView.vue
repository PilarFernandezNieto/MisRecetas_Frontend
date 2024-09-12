<script setup>
import { onMounted, ref, nextTick } from 'vue';
import Link from '@/components/Link.vue';
import { useRecetasStore } from '@/stores/recetas';
import Receta from '@/components/Receta.vue';
const recetasStore = useRecetasStore();

</script>

<template>

    <div>
        <h1 class="mb-5 text-center">Lista de Recetas</h1>
        <div class="lista-recetas ">

            <Link to="nueva-receta" class="">NuevaReceta</Link>
            <table class="display table mt-3" ref="table">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Origen</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    <Receta v-for="receta in recetasStore.recetas" :key="receta.id" :receta="receta.receta" />

                </tbody>
            </table>
        </div>

    </div>

</template>
<style scoped>
input {
    width: 95%;
    border-color: #b6b6b6;
    border-radius: 4px;

}

@media(width > 798px) {
    input {
        width: 30%;
    }
}

.boton {
    text-align: center;
}

a {
    background-color: var(--amber-500);
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.5s;


}

a:hover {
    background-color: var(--amber-700);
}

.lista-recetas {
    justify-content: center;
}
</style>
