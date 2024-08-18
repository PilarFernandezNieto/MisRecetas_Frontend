<script setup>
import { ref } from "vue";
import { recetasStore } from "@/stores/recetas"
import Recetas from "@/components/Recetas.vue";

const recetas = recetasStore();




</script>


<template>
    <div class="listado-recetas"> 
        <div class="row">
        <Recetas v-for="receta in recetas.recetas" :key="receta.id" :receta="receta" class="col-12 col-md-4 " />
        
    </div>
    </div>

</template>


<style scoped>
.listado-recetas {
    width: 100%;
    margin: 0 auto;

}

@media (width > 991px) {
    .listado-recetas {
        width: 75%;
    }
}

</style>