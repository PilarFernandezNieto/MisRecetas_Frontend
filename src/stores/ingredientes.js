import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import ingredientesAPI from "@/api/ingredientesAPI";

export const useIngredientesStore = defineStore("ingredientes", () => {
  const ingredientes = ref([]);
  const router = useRouter();

  onMounted(async () => {
    try {
      const { data } = await ingredientesAPI.all();
      ingredientes.value = data;
    } catch (error) {
      console.log(error);
    }
  });

  async function creaIngrediente(formData) {
    try {
      const { data } = await ingredientesAPI.create(formData);
      if (data.result !== "error") {
        const nuevoIngrediente = {
          id: data.result.id,
          nombre: formData.nombre,
          descripcion: formData.descripcion
        };
        ingredientes.value.push(nuevoIngrediente);
      }
    return data;
    } catch (error) {
      console.log("Mi error", error);
    }
  }
  async function actualizaIngrediente(id, formData) {
    try {
      const { data } = await ingredientesAPI.update(id, formData);
      
      if (data.result !== "error") {
        const index = ingredientes.value.findIndex(ingrediente => ingrediente.id == id);
        if (index !== -1) {
          ingredientes.value[index] = data.ingrediente;
        }
        router.push({ name: "ingredientes" });
      } 
      return data;
    } catch (error) {
      console.log("error de catch", error);
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

        if (!data.error) {
          ingredientes.value = ingredientes.value.filter(ingrediente => ingrediente.id !== id);
          Swal.fire({
            title: "¡Eliminado!",
            text: data.msg,
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
    creaIngrediente,
    actualizaIngrediente,
    eliminaIngrediente
  };
});
