<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { reset } from '@formkit/vue';
import Link from '@/components/Link.vue';
import { useIngredientesStore } from '@/stores/ingredientes';


const toast = inject("toast");
const router = useRouter()
const ingredientes = useIngredientesStore();


const submitHandler = async (formData) => {
    try {
        const data = await ingredientes.creaIngrediente(formData);
        console.log(data)

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
       
        console.log("ERROR", error)
       
        toast.open({
            message: error.response.data.msg,
            type: "error"
        });

    }

}

</script>

<template>
    <div class="">

        <h1 class="text-center">Nuevo Ingrediente</h1>
        <div class="shadow p-3 formulario">
            <FormKit id="ingredienteForm" type="form" submit-label="Nuevo Ingrediente"
                incomplete-message="No se puedo enviar, revisa los mensajes" @submit="submitHandler">
                <FormKit type="text" label="Nombre" name="nombre" placeholder="Ingrediente" validation="required"
                    :validation-messages="{ required: 'Campo obligatorio' }" />
                <FormKit type="text" label="Descripción" name="descripcion" placeholder="Descripcion" />

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