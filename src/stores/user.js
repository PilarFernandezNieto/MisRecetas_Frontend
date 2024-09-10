import {ref, onMounted, computed} from "vue"
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import authApi from "@/api/authApi";

export const useUserStore = defineStore("user", () => {

    const router = useRouter()
    const user = ref({})
    onMounted(async () => {
        try {
            const {data} = await authApi.auth()
            user.value = data
            
        } catch (error) {
            console.log(error)
            user.value = {}
        }
        
    })

    const getUserName = computed(() => user.value?.nombre ? user.value?.nombre: "")
    const isAdmin = computed(() => user.value?.admin ? true : false)

    function logout() {
        localStorage.removeItem("AUTH_TOKEN")
        user.value = {}
        router.push({name: "login"})
    }

    
    return {
        user,
        getUserName,
        isAdmin,
        logout

    }
})