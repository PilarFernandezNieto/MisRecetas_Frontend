<script setup>

</script>
<template>
    <div class="">

        <h1 class="text-center">Nueva Receta</h1>
        <div class="shadow p-3 formulario">
            <FormKit id="recetaForm" type="form" submit-label="Nueva Receta"
                incomplete-message="No se puedo enviar, revisa los mensajes" @submit="submitHandler">
                <FormKit type="file" label="Imagen" accept=".jpg, jpeg, .png"
                    multiple="false" />
                <FormKit type="text" label="Nombre" name="nombre" placeholder="Receta" validation="required"
                    :validation-messages="{ required: 'Campo obligatorio' }" />
                <FormKit type="text" label="Descripción" name="descripcion" placeholder="Descripcion" />

            </FormKit>
            <Link to="ingredientes" class="row p-0 m-0">Volver</Link>
        </div>


    </div>
</template>



<style scoped></style>