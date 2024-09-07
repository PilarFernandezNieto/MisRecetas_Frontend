<script setup>
import AdminNav from "../../components/AdmiNav.vue"

</script>
<template>
    <AdminNav />
    <div class="fondo-admin alto-minimo d-flex flex-column justify-content-center">

        <div class="container mx-auto py-5 ">
            <h1 class="text-center">Panel de Administración</h1>
            <RouterView />
        </div>
    </div>

</template>
<style scoped>

</style>