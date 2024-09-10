<script setup>
import { useRoute } from 'vue-router';
import Link from './Link.vue';
import { useUserStore } from '@/stores/user';


const userStore = useUserStore()
const route = useRoute();
const navRoutes = [
    {
        name: "admin",
        text: "Admin"
    },
    {
        name: "login",
        text: "Iniciar sesión"
    },

]

</script>

<template>
    <nav class="navbar navbar-expand-lg z-2 navegacion-principal ">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="/img/logo.png" alt="Bootstrap" class="logo img-fluid">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end flex-column align-items-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: rgba(255, 255, 255, 0.6);
}

.navegacion-principal a {
    font-size: 1.2rem;
    font-weight: 600;
}
.link-hover{
    border: 0.5px solid #666;
    border-radius: 3.85px;
}

.logo {
    width: 200px;
}
</style>
