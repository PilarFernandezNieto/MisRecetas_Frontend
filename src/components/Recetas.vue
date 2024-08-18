<script setup>

defineProps({
    receta: {
        type: Object
    }
})



</script>

<template>



    <div class="receta col-12 col-md-4 my-2">
        <div class="card">
            <img src=" /img/salmorejo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ receta.receta.nombre }}</h5>
                <p class="card-text">{{ receta.instrucciones }}</p>
                <p class="card-text">Desde: {{ receta.receta.origen }}</p>
                <RouterLink :to="{ name: 'ver-receta', params: { id: receta.receta.id } }" class="btn">Ver Receta
                </RouterLink>
            </div>
        </div>
    </div>





</template>



<style scoped>
h2 {
    font-size: 2.5rem;
    color: var(--amber-800);
    text-align: center;
    font-family: var(--titulo-font);
}



.btn {
    background-color: var(--amber-800);
    border: none;
    width: 100%;
    color: white;
}

.btn:hover {
    background-color: var(--amber-700);
    color: white;
}
</style>