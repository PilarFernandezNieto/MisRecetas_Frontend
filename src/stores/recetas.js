import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import Api from "@/api/peticionesApi";

export const recetasStore = defineStore("recetas", () => {
    const recetas = ref([]);


    


    return {
        recetas
    }
})