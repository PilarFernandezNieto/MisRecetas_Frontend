<script setup>
import { onMounted, ref } from 'vue';
import ingredientesAPI from '@/api/ingredientesAPI';

const participantes = ref({})
onMounted(async () => {
    try {
        const { data } = await ingredientesAPI.getParticipantes();
        participantes.value = data
        console.log(participantes.value)

    } catch (error) {
        console.log(error);
    }
});
</script>
<template>
    <div class="container p-5">
        <div class="row">
            <div v-for="participante in participantes" class="card col-4 g-2" style="width: 24rem;">

                <div class="card-body">
                    <h5 class="card-title">{{ participante.nombre }}</h5>
                    <p class="card-text">{{ participante.informacion.direccion }}</p>
                    <p class="card-text">{{ participante.informacion.localidad }} </p>
                    <p class="card-text">({{ participante.informacion.provincia }})</p>
                    <ul class="list-group">
                        <li class="list-group-item">Teléfono fijo: {{ participante.informacion.telefono.prefijo_fijo.pre }}-{{ participante.informacion.telefono.prefijo_fijo.fijo }}</li>
                        <li class="list-group-item">Prefijo  fijo: {{ participante.informacion.telefono.prefijo_movil.pre }}-{{ participante.informacion.telefono.prefijo_movil.movil }}</li>
                        
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>