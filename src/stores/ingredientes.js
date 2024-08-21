import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import ingredientesAPI from "@/api/ingredientesAPI";

export const useIngredientesStore = defineStore("ingredientes", () => {
    const ingredientes = ref([]);
    onMounted(async () => {
      try {
        const { data } = await ingredientesAPI.all();
        ingredientes.value = data
     
      } catch (error) {
        console.log(error);
      }
    });

    return {
      ingredientes
    }
})