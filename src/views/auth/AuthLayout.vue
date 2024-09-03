<script setup>
import { RouterView, RouterLink } from 'vue-router';
const authRoutes = [
    {name: "registro", text: "Regístrate aquí"},
    {name: "login", text: "Inicia Sesión"},

]

</script>
<template>
    <div class="container my-5 authLayout alto-minimo">
        <RouterView />
        <nav class="row mt-5 justify-content-between">
            <RouterLink v-for="(route, index) in authRoutes" :key="index" :to="{name: route.name}"  class="col-12 col-md-4 text-center text-md-left py-2 mb-2">{{ route.text }}</RouterLink>

        </nav>
    </div>



</template>



<style scoped>
a {
    background-color: var(--amber-400);
    padding: 0.2rem 0.5rem;
    text-transform: uppercase;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.8rem;
    justify-content: center;
    transition: background-color 0.5s ease-in;
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