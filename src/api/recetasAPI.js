import api from "@/lib/axios";


export default {
    all(){
        return api.get("/recetas")
    },
    recetaById(id) {
        return api.get(`/recetas/ver-receta?id=${id}`)
    }
}
y