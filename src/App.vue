<script setup>
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <Header />
    <div class="container-fluid p-0">
      
            <RouterView />


    </div>

</template>

<style>
body {
    font-family: var(--principal-font);

}
</style>
