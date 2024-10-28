import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3333"
});

export const getImageUrl = (imageName) => {
    return `${api.defaults.baseURL}/files/${imageName}`;
};