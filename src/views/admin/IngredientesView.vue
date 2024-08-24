<script setup>
import Link from '@/components/Link.vue';
import { useIngredientesStore } from '@/stores/ingredientes';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from "datatables.net-bs5"
import { dataTableConfig } from '@/config/datatablesConfig';

DataTable.use(DataTablesCore)

 


const store = useIngredientesStore();
const columns = [
  { data: 'nombre', title: 'Nombre' },
  { data: 'descripcion', title: 'Descripcion' },
  {
    data: null,
    title: 'Acciones',
    render: function (data, type, row) {
      return `
        <button class="editar" onclick="editRow(${row.id})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteRow(${row.id})">Eliminar</button>
      `;
    },
    orderable: false, // Para que esta columna no sea ordenable
    searchable: false // Para que esta columna no sea filtrable
  }
];

</script>

<template>
 
    <div class="mt-5">
        <h1 class="mb-5">Lista de ingredientes</h1>
        <Link to="nuevo-ingrediente">Nuevo Ingrediente</Link>
        <div class="row gap-3 mb-5 lista-ingredientes ">
        <DataTable
            :columns="columns"
            :data="store.ingredientes"
            class="display table"
            :options="dataTableConfig"
        />
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
