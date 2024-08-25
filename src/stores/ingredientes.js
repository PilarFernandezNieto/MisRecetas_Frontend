import { ref, onMounted, computed, reactive, watch } from "vue";
import { defineStore } from "pinia";
import ingredientesAPI from "@/api/ingredientesAPI";

export const useIngredientesStore = defineStore("ingredientes", () => {
  const ingredientes = ref([]);
  const nuevoIngrediente = reactive({
    id: "",
    nombre: "",
    descripcion: ""
  });

  const searchTerm = ref('');
  onMounted(async () => {
    try {
      const { data } = await ingredientesAPI.all();
      ingredientes.value = data;
    } catch (error) {
      console.log(error);
    }
  });
  const filteredIngredientes = computed(() => {
    console.log('Filtrando ingredientes, tipo:', Array.isArray(ingredientes.value) ? 'array' : 'no array');

    if (!Array.isArray(ingredientes.value)) {
      console.error("ingredientes no es un array:", ingredientes.value);
      return [];
    }

    if (!searchTerm.value) {
      console.log("Hola")
      return ingredientes.value;
    }
    return ingredientes.value.filter(ingrediente => {
      console.log(ingrediente)
      ingrediente.nombre.toLowerCase().includes(searchTerm.value.toLowerCase())
    })
  })

  async function creaIngrediente(formData) {
    try {
      const { data } = await ingredientesAPI.create(formData);
      nuevoIngrediente.id = data.resultado.id;
      nuevoIngrediente.nombre = formData.nombre;
      nuevoIngrediente.descripcion = formData.descripcion;
      ingredientes.value.push(nuevoIngrediente);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function actualizaIngrediente(id, formData) {
    try {
      const { data } = await ingredientesAPI.update(id, formData);

      const index = ingredientes.value.findIndex(ingrediente => {
        ingrediente.id === id;
      });

      if (index !== -1) {
        ingredientes.value[index] = data.ingrediente;
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function eliminaIngrediente(id) {
    const result = await Swal.fire({
      title: "¿Seguro que quieres eliminar el ingrediente?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      width: "400px",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo"
    });

    if (result.isConfirmed) {
      try {
        const { data } = await ingredientesAPI.delete(id);

        console.log(data);
        if (!data.error) {
          ingredientes.value = ingredientes.value.filter(ingrediente => ingrediente.id !== id);
          Swal.fire({
            title: "¡Eliminado!",
            text: "El ingrediente ha sido eliminado.",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar el ingrediente.",
            icon: "error"
          });
        }
      } catch (error) {

        console.log(error);
      }
    }
  }

  return {
    ingredientes,
    filteredIngredientes,
    creaIngrediente,
    actualizaIngrediente,
    eliminaIngrediente
  };
});
