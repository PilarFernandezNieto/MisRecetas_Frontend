<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import authApi from '@/api/authApi';

const toast = inject("toast");
const router = useRouter();

const handleSubmit = async (formData) => {
    try {
        const { data } = await authApi.login(formData)

        if (data.result !== "error") {
           localStorage.setItem("AUTH_TOKEN", data.token)
           router.push({name: "admin"})
        } else {
            toast.open({
                message: data.msg,
                type: data.result
            })
        
        }

    } catch (error) {
        toast.open({
                message: error.response.data.msg,
                type: "error"
            })
    }
}

</script>
<template>
    <h1 class="text-center">Iniciar Sesión</h1>
    <div class="w-11/12  md:w-2/3 lg:w-1/2 mx-auto">
        <FormKit type="form" :actions="false" incomplete-message="No se ha enviado. Verifica todos los campos"
            @submit="handleSubmit" id="loginForm">
            <FormKit type="email" label="Email" name="email" placeholder="Email de usuario" validation="required|email"
                :validation-messages="{
                    required: 'El email es obligatorio',
                    email: 'Email no válido'
                }" />
            <FormKit type="password" label="Contraseña" name="password" placeholder="Contraseña de usuario"
                validation="required" :validation-messages="{
                    required: 'La contraseña es obligatoria'
                }" />
            <FormKit type="submit">Inicia Sesión</FormKit>

        </FormKit>
    </div>
</template>



<style scoped></style>