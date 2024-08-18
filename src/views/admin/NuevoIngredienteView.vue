<script setup>
import { reactive } from 'vue';
import Link from '@/components/Link.vue';
import { ingredientesStore } from '@/stores/ingredientes';

const ingredientes = ingredientesStore();
const formData = reactive({
    nombre: "",
    descripcion: ""
})

const submitHandler = async (data) => {
    try {
        await ingredientes.nuevoIngrediente(data)
    } catch (error) {
        console.log(error);
        
    }
    
}

</script>

<template>
    <div class="">

        <h1 class="text-center">Nuevo Ingrediente</h1>
        <div class="shadow p-5 formulario">
            <FormKit 
                type="form" submit-label="Nuevo Ingrediente"
                incomplete-message="No se puedo enviar, revisa los mensajes"

                @submit="submitHandler"
              
                >
                <FormKit 
                    type="text" label="Nombre" name="nombre" 
                    placeholder="Ingrediente" validation="required"
                    :validation-messages="{ required: 'Campo obligatorio' }"
                    
                     />
                <FormKit 
                    type="text" label="Descripción" 
                    name="descripcion" placeholder="Descripcion"
                 
                     />

            </FormKit>
            <Link to="ingredientes" class="row p-0 m-0">Volver</Link>
        </div>


    </div>
</template>



<style scoped>
.formulario {
    width: 95%;
    margin: 0 auto;
}



@media (width > 991px) {
    .formulario {
        width: 50%;
    }
}
</style>