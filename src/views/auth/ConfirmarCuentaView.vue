<script setup>
import { inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import authApi from '@/api/authApi';

const toast = inject("toast")
const route = useRoute();
const router = useRouter();
const { token } = route.params;

onMounted(async () => {
    try {
        const { data } = await authApi.confirmarCuenta(token)
        if (data.result !== "error") {
            toast.open({
                message: data.msg,
                type: "success"
            })
            setTimeout(() => {
                router.push({name: "login"})
            }, 3000)
        } else {
        
            toast.open({
                message: data.msg,
                type: "error"
            })
        }

    } catch (error){
        console.log(error)
    }
})



</script>

<template>
    <div >
        <h1 class="text-center">Confirmar Cuenta</h1>
    </div>
</template>



<style lang="scss" scoped></style>