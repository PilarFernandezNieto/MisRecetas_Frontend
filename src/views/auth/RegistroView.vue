<script setup>
import { inject } from "vue";
import { reset } from "@formkit/vue";
import authApi from "../../api/authApi.js"
const toast = inject("toast")

const handleSubmit = async ({ password_confirm, ...formData }) => {
    try {
        const { data } = await authApi.registro(formData)
            toast.open({
                type: "success",
                message: data.msg
            })
            reset("registroForm")
    } catch (error) {
        toast.open({
                type: "error",
                message: error.response.data.msg
            })
    }

}

</script>

<template>
    <h1 class="text-center">Crea una cuenta</h1>
    <div class="w-11/12  md:w-2/3 lg:w-1/2 mx-auto">
        <FormKit type="form" :actions="false" incomplete-message="No se ha enviado. Verifica todos los campos"
            @submit="handleSubmit" id="registroForm">
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
            <FormKit type="password" label="Repetir contraseña" name="password_confirm"
                placeholder="Repite la contraseña" validation="required|confirm" :validation-messages="{
                    required: 'La contraseña es obligatoria',
                    confirm: 'Las contraseñas no son iguales'
                }" />
            <FormKit type="submit">Crear cuenta</FormKit>

        </FormKit>
    </div>
</template>



<style lang="scss" scoped></style>