<script setup>
import { RouterLink } from 'vue-router';
defineProps({
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
        <RouterLink :to="{ name: 'edita-ingrediente', params: { id: ingrediente.id } }" class="btn me-2 editar">
                    Editar
        </RouterLink>
        <a type="button" class="btn borrar">
                    Eliminar
                </a>
    </td>
   </tr>
   
</template>



<style scoped>

</style>