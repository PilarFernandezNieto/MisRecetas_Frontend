<script setup>
import { ref } from 'vue';
const ingrediente =  {
    id: 1,
    nombre: "Patatas"
}

</script>
<template>
    <div>
        <h1>Ingrediente</h1>
        <p>{{ ingrediente.nombre }}</p>
        <RouterLink :to="{ name: 'edita-ingrediente', params: { id: ingrediente.id } }">
            Editar
        </RouterLink>
        <button type="button">
            Eliminar
        </button>
    </div>
</template>



<style scoped></style>