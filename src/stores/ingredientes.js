import { defineStore } from "pinia";
import ingredientesAPI from "@/api/ingredientesAPI";

export const ingredientesStore = defineStore("ingredientes", () => {

async function nuevoIngrediente(ingrediente){
   try {
    const { data } = await ingredientesAPI.create(ingrediente);

    console.log(data);
    
   } catch (error) {
    console.log(error);
    
   }
    
}


    return {
        nuevoIngrediente
    }
})