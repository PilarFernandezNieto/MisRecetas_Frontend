<script setup>
import { onMounted, computed, ref } from 'vue';
import Link from '@/components/Link.vue';
import Ingrediente from '@/components/Ingrediente.vue';
import { useIngredientesStore } from '@/stores/ingredientes';

const ingredientes = useIngredientesStore();


const searchTerm = ref('');


</script>

<template>

    <div>
        <h1 class="mb-5 text-center">Lista de ingredientes</h1>

        
        <div class="row gap-3 lista-ingredientes ">
            <div class="d-flex p-0 m-0 flex-column flex-md-row justify-content-md-between align-items-center">
                <Link to="nuevo-ingrediente" class="">Nuevo Ingrediente</Link>
                <input v-model="searchTerm" class="form-control my-4" type="text"
                    placeholder="Buscar ingredientes..." />
            </div>
            <table id="lista-ingredientes" class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    <Ingrediente v-for="ingrediente in ingredientes.filteredIngredientes" :key="ingrediente.id"
                        :ingrediente="ingrediente" />
                </tbody>

            </table>
        </div>
    </div>

</template>
<style scoped>
input {
    width: 95%;
    border-color: #b6b6b6;
    border-radius: 4px;
    
}
@media(width > 798px){
    input {
        width: 30%;
    }
}
.boton {
    text-align: center;
}

a {
    background-color: var(--amber-500);
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.5s;
    

}

a:hover {
    background-color: var(--amber-700);
}

.lista-ingredientes {
    justify-content: center;
}
</style>
