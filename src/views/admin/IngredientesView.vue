<script setup>
import { onMounted, watch, nextTick } from 'vue';
import Link from '@/components/Link.vue';
import Ingrediente from '@/components/Ingrediente.vue';
import { useIngredientesStore } from '@/stores/ingredientes';



const store = useIngredientesStore();



</script>

<template>

    <div>
        <h1 class="mb-5">Lista de ingredientes</h1>
        <Link to="nuevo-ingrediente">Nuevo Ingrediente</Link>
        <div class="row gap-3 lista-ingredientes ">
            <table id="lista-ingredientes" class="table mt-5">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    <Ingrediente v-for="ingrediente in store.ingredientes" :key="ingrediente.id"
                        :ingrediente="ingrediente" />
                </tbody>

            </table>
        </div>
    </div>

</template>
<style scoped>
a {
    background-color: var(--amber-500);
    padding: 1rem 2rem;
    border-radius: 8px;
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
