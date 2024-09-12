<script setup>
import { RouterLink } from 'vue-router';
import { useRecetasStore } from '@/stores/recetas';

const props = defineProps({
    receta: {
        type: Object
    }
})
const recetas = useRecetasStore();



</script>
<template>
    <tr>
        <td><img :src="receta.imagen" width="150px"></td>
        <td>{{ receta.nombre }}</td>
        <td>{{ receta.origen }}</td>
        <td>
            <!-- <RouterLink :to="{ name: 'edita-receta', params: { id: receta.id } }" class="btn editar me-2">
                <i class="fa-regular fa-pen-to-square"></i>
            </RouterLink>
            <button class="btn borrar" @click="ingredientes.eliminaIngrediente(receta.id)">
                <i class="fa-regular fa-trash-can"></i>
            </button> -->
        </td>
    </tr>

</template>



<style scoped>
i {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
}
</style>