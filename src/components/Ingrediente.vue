<script setup>
defineProps({
    ingrediente: {
        type: Object
    }
})

</script>
<template>
    <div class="card ingrediente">
        <div class="card-body">
            <h5 class="card-title">{{ ingrediente.nombre }}</h5>
            <p class="card-text">{{ ingrediente.descripcion }}</p>
            <div class="row gap-2">
                <RouterLink :to="{ name: 'edita-ingrediente', params: { id: ingrediente.id } }" class="col-5 btn">
                    Editar
                </RouterLink>
                <button type="button" class="col-5 btn">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>



<style scoped></style>