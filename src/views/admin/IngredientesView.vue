<script setup>
import Ingrediente from '@/components/Ingrediente.vue';
import Link from '@/components/Link.vue';


</script>

<template>
 
    <h1 class="mb-5">Lista de ingredientes</h1>
    <Link to="nuevo-ingrediente">Nuevo Ingrediente</Link>
    <Ingrediente class="my-5" />

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
