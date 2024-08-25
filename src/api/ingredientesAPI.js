import api from "@/lib/axios";


export default {
    all(){
        return api.get("/ingredientes")
    },
    create(data){
        return api.post("/ingredientes", data, {headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
        }})
    },
    getById(id){
        return api.get(`/ingredientes/${id}`)
    },
    update(id, data){
        return api.put(`/ingredientes/actualizar/${id}`, data)
    },

}