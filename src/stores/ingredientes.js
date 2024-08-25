import { ref, onMounted, computed, reactive } from "vue";
import { defineStore } from "pinia";
import ingredientesAPI from "@/api/ingredientesAPI";

export const useIngredientesStore = defineStore("ingredientes", () => {
  const ingredientes = ref([]);
  const nuevoIngrediente = reactive({
    id: "",
    nombre: "",
    descripcion: ""
  })
  const searchTerm = ref("");
  onMounted(async () => {
    try {
      const { data } = await ingredientesAPI.all();
      ingredientes.value = data;
    } catch (error) {
      console.log(error);
    }
  });
  const filteredIngredientes = computed(() => {
    if (!Array.isArray(ingredientes.value)) {
      console.error("store.ingredientes no es un array:", ingredientes.value);
      return [];
    }

    if (!searchTerm.value) {
      return ingredientes.value;
    }

    return ingredientes.value.filter(
      ingrediente => ingrediente.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()) || ingrediente.descripcion.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  async function creaIngrediente(formData) {
    try {
    
      const { data } = await ingredientesAPI.create(formData);
      nuevoIngrediente.id = data.resultado.id
      nuevoIngrediente.nombre = formData.nombre
      nuevoIngrediente.descripcion = formData.descripcion
      ingredientes.value.push(nuevoIngrediente)
      
      
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function actualizaIngrediente(id, formData) {
    try {
      
      const {data} = await ingredientesAPI.update(id, formData);
      console.log("data", data)
      
      const index = ingredientes.value.findIndex(ingrediente => {
        
        ingrediente.id === id
      } )
      
      
      if (index !== -1) {
        ingredientes.value[index] = data.ingrediente;
      }
      
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    ingredientes,
    filteredIngredientes,
    creaIngrediente,
    actualizaIngrediente
  };
});
