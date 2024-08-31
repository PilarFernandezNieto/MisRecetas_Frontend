<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="myapp">
    <Header />

    <RouterView />

    <Footer />
</div>

</template>

<style>

body {
    font-family: var(--principal-font);

}
</style>
