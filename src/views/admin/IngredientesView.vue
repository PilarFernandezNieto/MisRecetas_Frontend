<script setup>
import { onMounted, ref, nextTick } from 'vue';
import Link from '@/components/Link.vue';
import Ingrediente from '@/components/Ingrediente.vue';
import { useIngredientesStore } from '@/stores/ingredientes';
import { dataTableConfig } from '@/config/datatablesConfig';

let dt
const ingredientes = useIngredientesStore();
const table = ref()




</script>

<template>

    <div>
        <h1 class="mb-5 text-center">Lista de ingredientes</h1>
        <div class="lista-ingredientes ">

            <Link to="nuevo-ingrediente" class="">Nuevo Ingrediente</Link>
            <table class="display table mt-3" ref="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    <Ingrediente v-for="ingrediente in ingredientes.ingredientes" :key="ingrediente.id"
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

@media(width > 798px) {
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
