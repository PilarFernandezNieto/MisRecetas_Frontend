import api from "@/lib/axios";

const cabecera = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
export default {
   registro(data){
    return api.post("/auth/registro", data, cabecera )
   }

}