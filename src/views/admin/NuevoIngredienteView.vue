<script setup>

</script>

<template>
    <div class="">
        <h1 class="text-center">Nuevo Ingrediente</h1>
        <div class="shadow p-5 formulario">
            <FormKit type="form" submit-label="Nuevo Ingrediente">
            <FormKit type="text" label="Nombre" name="nombre" placeholder="Ingrediente" validation="required" 
            :validation-messages="{required:'Campo obligatorio'}"/>
            <FormKit type="text" label="Descripción" name="descripcion" placeholder="Descripcion"/>

        </FormKit>
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