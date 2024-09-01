<script setup>
import { onMounted, ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { reset } from '@formkit/vue';
import Link from '@/components/Link.vue';
import { useIngredientesStore } from '@/stores/ingredientes';
import ingredientesAPI from '@/api/ingredientesAPI';


const toast = inject("toast");
const route = useRoute()
const router = useRouter()
const ingredientes = useIngredientesStore();
const { id } = route.params


const formData = ref({

})

onMounted(async () => {
    const { data } = await ingredientesAPI.getById(id)
  
    formData.value.id = data.ingrediente.id
    formData.value.nombre = data.ingrediente.nombre
    formData.value.descripcion = data.ingrediente.descripcion
})


const submitHandler = async (formData) => {
    try {
        const data = await ingredientes.actualizaIngrediente(parseInt(id), formData);
        if (data.resultado !== "error") {
            toast.open({
                message: data.msg,
                type: "success"
            });
            reset("ingredienteForm")

            router.push({ name: "ingredientes" })
        } else {
            toast.open({
                message: data.msg,
                type: "error"
            });
        }

    } catch (error) {
        console.log(error);
    }
}


</script>

<template>
    <div class="">

        <h1 class="text-center">Actualiza Ingrediente</h1>
        <div class="shadow p-5 formulario">
            <FormKit id="ingredienteForm" type="form" :value="formData" submit-label="Actualiza Ingrediente"
                incomplete-message="No se puedo enviar, revisa los mensajes" @submit="submitHandler">
                <FormKit type="text" label="Nombre" name="nombre" v-model.trim="formData.nombre"
                    placeholder="Ingrediente" validation="required"
                    :validation-messages="{ required: 'Campo obligatorio' }" />
                <FormKit type="text" label="Descripción" name="descripcion" v-model.trim="formData.descripcion"
                    placeholder="Descripcion" />

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