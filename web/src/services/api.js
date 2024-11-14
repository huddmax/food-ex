import axios from "axios";


export const api = axios.create({
    baseURL: "https://food-ex.onrender.com"
});

export const getImageUrl = (imageName) => {
    return `${api.defaults.baseURL}/files/${imageName}`;
};