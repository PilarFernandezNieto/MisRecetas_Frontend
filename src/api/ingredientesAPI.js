import api from "@/lib/axios";


export default {
    create(data){
        return api.post("/ingredientes", data, {headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
        }})
    },
}