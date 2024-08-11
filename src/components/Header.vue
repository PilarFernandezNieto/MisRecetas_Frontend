<script setup>
import NavHeader from './NavHeader.vue';
import { RouterLink } from 'vue-router';


</script>

<template>
    <div
        class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 bg-imgHeader inset-0 h-full w-full bg-cover bg-right md:bg-center">
        <div class="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <NavHeader class="absolute inset-0 top-0 left-0" />

        <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center items-center z-20 space-y-5">

            <div class="mx-auto max-w-2xl lg:mx-0 ">
                <a href="/">
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Mis Recetas</h1>
                </a>
            </div>
            <div class="flex w-96 justify-around">
                <RouterLink to="/recetas" class="text-white text-2xl">Recetas</RouterLink>
                <RouterLink to="/recetas" class="text-white text-2xl">Noticias</RouterLink>
            </div>

        </div>
    </div>
</template>
