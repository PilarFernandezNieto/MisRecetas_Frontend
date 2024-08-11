<script setup>
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <Header />
    <div class="bg-gradient-to-b from-amber-100 to-amber-300  w-full mx-auto">
        <div class="container mx-auto">
            <RouterView />
        </div>

    </div>

</template>
