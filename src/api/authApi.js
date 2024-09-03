import api from "@/lib/axios";

const cabecera = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
export default {
   registro(data){
    return api.post("/auth/registro", data, cabecera )
   },
   confirmarCuenta(token){
      return api.get(`/auth/confirmar-cuenta/${token}`)
   }

}