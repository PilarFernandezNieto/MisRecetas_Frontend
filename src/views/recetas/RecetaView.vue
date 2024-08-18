<script setup>
import { onMounted, ref } from 'vue';
import Receta from '@/components/Receta.vue';
import { useRoute, useRouter } from 'vue-router';
import peticionesApi from '@/api/recetasAPI';

const route = useRoute()
const router = useRouter()
const { id } = route.params
const receta = ref({})

onMounted(async () => {
    try {
        const  {data}  = await peticionesApi.recetaById(id)
        console.log(data);
        receta.value = data;
       
        

    } catch (error) {
      console.log(error)
    }
})

</script>

<template>
    <Receta :receta="receta" /> 
   
</template>



<style  scoped>

</style>