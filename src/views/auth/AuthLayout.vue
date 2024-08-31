<script setup>
import { RouterView, RouterLink } from 'vue-router';
const authRoutes = [
    {name: "registro", text: "Crear una cuenta"},
    {name: "login", text: "Iniciar Sesión"}
]

</script>
<template>
    <div class="container my-5 authLayout">
        <RouterView />
        <nav class="mx-auto d-flex justify-content-between mt-5">
            <RouterLink v-for="(route, index) in authRoutes" :key="index" :to="{name: route.name}">{{ route.text }}</RouterLink>

        </nav>
    </div>



</template>



<style scoped>
a {
    background-color: var(--amber-400);
    padding: 0.2rem 0.5rem;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.5s ease-in;
}
a:hover {
    background-color: var(--amber-500);
}
nav {
    width: 90%;
    margin: 0 auto;
}
@media(width > 798px){
    a {
        padding: 0.5rem 1rem;
    }
    nav {
        width: 66.66%;
    }
}

</style>