<script setup>
import Link from '@/components/Link.vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();

</script>
<template>
    <div class="fondo-nav ">

        <ul class="nav justify-content-center justify-content-md-start nav-underline  py-2">
            <li class="nav-item">
                <RouterLink :to="{ name: 'ingredientes' }" class="nav-link">Ingredientes</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink :to="{ name: 'ingredientes' }" class="nav-link">Recetas</RouterLink>
            </li>

        </ul>
        <div class="d-flex flex-column">
            <p v-if="userStore.user">Hola, {{ userStore.getUserName }}</p>
            <button type="button" @click="userStore.logout">Cerrar sesión</button>
        </div>
    </div>
    <div class="fondo-admin alto-minimo d-flex flex-column justify-content-center">

        <div class="container mx-auto py-5 ">
            <h1 class="text-center">Panel de Administración</h1>
            <RouterView />
        </div>
    </div>

</template>
<style scoped>

.fondo-nav a {
    color: #333;
    font-size: 1.6rem;
}

.fondo-nav {
    background: rgb(254, 243, 199);
    background: radial-gradient(circle, rgba(254, 243, 199, 1) 0%, rgba(253, 224, 71, 1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;

}
</style>