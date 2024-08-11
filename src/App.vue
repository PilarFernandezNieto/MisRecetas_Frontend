<script setup>
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <Header />
    <div class="container-fluid fondo-body">
        <div class="container mx-auto">
            <RouterView />
        </div>

    </div>

</template>

<style>
body {
    font-family: var(--principal-font);

}
</style>
