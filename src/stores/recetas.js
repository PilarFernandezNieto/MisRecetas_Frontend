import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import recetasAPI from "@/api/recetasAPI";

export const useRecetasStore = defineStore("recetas", () => {
    const recetas = ref([]);
    

    onMounted(async () => {
        try {
            const {data } = await recetasAPI.all()
            recetas.value = data
        } catch (error){
            console.log(error)
        }

    })



    


    return {
        recetas,
        

    }
})