<script setup>
import { RouterLink } from 'vue-router';
import { useIngredientesStore } from '@/stores/ingredientes';
const props = defineProps({
    ingrediente: {
        type: Object
    }
})
const ingredientes = useIngredientesStore();



</script>
<template>
    <tr>
        <td>{{ ingrediente.nombre }}</td>
        <td>{{ ingrediente.descripcion }}</td>
        <td>
            <RouterLink :to="{ name: 'edita-ingrediente', params: { id: ingrediente.id } }" class="btn editar me-2">
                <i class="fa-regular fa-pen-to-square"></i>
            </RouterLink>
            <button class="btn borrar" @click="ingredientes.eliminaIngrediente(ingrediente.id)">
                <i class="fa-regular fa-trash-can"></i>
            </button>
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