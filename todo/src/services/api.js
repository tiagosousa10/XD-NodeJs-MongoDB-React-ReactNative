import axios from "axios";
//--ter sempre cuidado com as PERMISSOES da FIREWALL!!!!!
const api = axios.create({
  baseURL:"http://192.168.0.52:3002"
})

export default api;
