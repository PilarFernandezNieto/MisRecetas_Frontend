<script setup>
import AdminNav from "../../components/AdmiNav.vue"

</script>
<template>
    <AdminNav />
    <div class="fondo-admin alto-minimo">


        <div class="container mx-auto py-5">
            <RouterView />
        </div>
    </div>

</template>
<style scoped>

</style>