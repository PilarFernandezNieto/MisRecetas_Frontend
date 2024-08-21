<script setup>
import Ingrediente from '@/components/Ingrediente.vue';
import Link from '@/components/Link.vue';
import { useIngredientesStore } from '@/stores/ingredientes';

const store = useIngredientesStore();




</script>

<template>
 
    <h1 class="mb-5">Lista de ingredientes</h1>
    <div class="row gap-2 justify-between mb-5">
    <Ingrediente class="col-6 col-md-2" v-for="ingrediente in store.ingredientes"  :ingrediente="ingrediente" />
    </div>
    <Link to="nuevo-ingrediente">Nuevo Ingrediente</Link>
</template>
<style scoped>
a {
    background-color: var(--amber-500);
    padding: 1rem 2rem;
    border-radius: 8px;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.5s;

}
a:hover {
    background-color: var(--amber-700);
}
</style>
