import api from "@/lib/axios";

const cabecera = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
export default {
   registro(data){
    return api.post("/auth/registro", data, cabecera )
   },
   confirmarCuenta(token){
      return api.get(`/auth/confirmar-cuenta/${token}`)
   },
   login(data){
      return api.post("/auth/login", data, cabecera)
   },
   auth() {
      const token= localStorage.getItem("AUTH_TOKEN")
      
      const config = {};

      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        };
      }
      
      return api.get('/auth/user', config)
   }

}