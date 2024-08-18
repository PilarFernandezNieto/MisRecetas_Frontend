<script setup>
import { RouterLink } from 'vue-router';
import Link from './Link.vue';

</script>


<template>
    <div class="container-fluid  p-0 admin-nav">
   
            <div class="fondo-nav">
                <ul class="nav justify-content-end nav-underline w-75 mx-auto py-2">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'ingredientes' }" class="nav-link">Ingredientes</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'ingredientes' }" class="nav-link">Recetas</RouterLink>
                    </li>
                
                </ul>
            </div>
    
        <Link to="home" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover m-5">Ir a Inicio</Link>
        
       

    </div>
</template>


<style scoped>
.admin-nav a {
    color: #333;
    font-size: 1.5rem;
}
.fondo-nav {
    background: rgb(254, 243, 199);
    background: radial-gradient(circle, rgba(254, 243, 199, 1) 0%, rgba(253, 224, 71, 1) 100%);
    
}
</style>