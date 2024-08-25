<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    ingrediente: {
        type: Object
    }
})



</script>
<template>
   <tr>
    <td>{{ ingrediente.nombre }}</td>
    <td>{{ ingrediente.descripcion }}</td>
    <td>
        <RouterLink :to="{ name: 'edita-ingrediente', params: { id: ingrediente.id } }" class="editar me-2">
            <i class="fa-regular fa-pen-to-square"></i>
        </RouterLink>
        <a type="button" class="borrar">
            <i class="fa-regular fa-trash-can"></i>
                </a>
    </td>
   </tr>
   
</template>



<style scoped>

</style>