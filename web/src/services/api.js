import axios from "axios";

export const api = axios.create({
    // Conexão do Front com a API
    //baseURL: "https://notes-api-c7xl.onrender.com"
    baseURL: "http://localhost:3333"
})
