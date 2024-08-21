<script setup>
import { RouterLink } from 'vue-router';

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
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{name: 'admin'}" class="nav-link active" aria-current="page" href="">Admin</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
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
    font-size: 2rem;
    font-weight: 600;
}

.logo {
    width: 200px;
}
</style>
