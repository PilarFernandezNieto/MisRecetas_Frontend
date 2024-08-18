<script setup>
defineProps({
    receta: {
        type: Object
    }
})


</script>

<template>

    <div class="container">
        {{ receta }}
        <h2>{{ receta.receta.nombre }}</h2>
       
     
       

    </div>

</template>



<style scoped></style>