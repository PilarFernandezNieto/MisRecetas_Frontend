<script setup>
import Link from '@/components/Link.vue';
import { useIngredientesStore } from '@/stores/ingredientes';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from "datatables.net-bs5"

DataTable.use(DataTablesCore)

 


const store = useIngredientesStore();
const columns = [
  { data: 'nombre', title: 'Nombre' },
  { data: 'descripcion', title: 'Descripcion' }
];




</script>

<template>
 
    <h1 class="mb-5">Lista de ingredientes</h1>
    <Link to="nuevo-ingrediente">Nuevo Ingrediente</Link>
    <div class="row gap-3 mb-5 lista-ingredientes ">
    <!-- <Ingrediente class="col-12 col-md-5" v-for="ingrediente in store.ingredientes"  :ingrediente="ingrediente" /> -->
    <DataTable
        :columns="columns"
       :data="store.ingredientes"
        class="display table"
    />
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
