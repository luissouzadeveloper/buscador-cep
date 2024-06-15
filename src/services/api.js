import axios from "axios";

// 65900470/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;