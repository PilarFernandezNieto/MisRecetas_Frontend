<script setup>
defineProps({
    ingrediente: {
        type: Object
    }
})

</script>
<template>
    <div class="card ingrediente">
        <h5 class="card-header">{{ ingrediente.nombre }}</h5>
        <div class="card-body">
            <p class="card-text">{{ ingrediente.descripcion }}</p>
            <div class="d-flex justify-content-end">
                <RouterLink :to="{ name: 'edita-ingrediente', params: { id: ingrediente.id } }" class="btn me-2 editar">
                    Editar
                </RouterLink>
                <button type="button" class="btn eliminar">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
   
</template>



<style scoped>
.card-header {
    background-color: var(--amber-200);
}
.ingrediente .editar {
    background-color: var(--amber-400);
}
.ingrediente .editar:hover{
    background-color: var(--amber-500);
}
.ingrediente .eliminar {
    background-color: var(--red-600);
    color: white;
}
.ingrediente .eliminar:hover {
    background-color: var(--red-700);
    
}
.ingrediente {
    border-color: var(--amber-600);
}
</style>