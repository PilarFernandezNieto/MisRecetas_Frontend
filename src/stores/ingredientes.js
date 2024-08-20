import { inject } from "vue";
import { defineStore } from "pinia";
import ingredientesAPI from "@/api/ingredientesAPI";

export const ingredientesStore = defineStore("ingredientes", () => {
const toast = inject("toast");

async function nuevoIngrediente(ingrediente){
   try {
    const {data} = await ingredientesAPI.create(ingrediente);
    return data
    
   } catch (error) {
    console.log(error);
   }
    
}


    return {
        nuevoIngrediente
    }
})