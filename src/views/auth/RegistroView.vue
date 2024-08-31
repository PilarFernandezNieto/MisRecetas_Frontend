<script setup>
import authApi from "../../api/authApi.js"

const handleSubmit = async ({password_confirm, ...formData}) => {
    try {
       await authApi.registro(formData)
    } catch (error) {
        console.log(error)
    }
    
}

</script>

<template>
    <h1 class="text-center">Crea una cuenta</h1>
    <div class="w-11/12  md:w-2/3 mx-auto">
        <FormKit type="form" :actions="false" incomplete-message="No se ha enviado. Verifica todos los campos" @submit="handleSubmit">
            <FormKit type="text" label="Nombre" name="nombre" placeholder="Tu nombre" validation="required|length:3"
                :validation-messages="{
                    required: 'El nombre es obligatorio',
                    length: 'El nombre es muy corto'
                }" />
            <FormKit type="text" label="Apellidos" name="apellidos" placeholder="Tus apellidos" />
            <FormKit type="email" label="Email" name="email" placeholder="Tu email" validation="required|email"
                :validation-messages="{
                    required: 'El email es obligatorio',
                    email: 'Email no válido'
                }" />
            <FormKit type="password" label="Contraseña" name="password" placeholder="Mínimo 8 caracteres"
                validation="required|length:8" :validation-messages="{
                    required: 'La contraseña es obligatoria',
                    email: 'La contraseña debe tener al menos 8 caracteres'
                }" />
            <FormKit type="password" label="Repetir contraseña" name="password_confirm" placeholder="Repite la contraseña"
                validation="required|confirm" :validation-messages="{
                    required: 'La contraseña es obligatoria',
                    confirm: 'Las contraseñas no son iguales'
                }" />
            <FormKit type="submit">Crear cuenta</FormKit>

        </FormKit>
    </div>
</template>



<style lang="scss" scoped></style>