import axios from "axios";

const api = axios.create({
    baseURL: "https://myboxapp-backend.herokuapp.com",
});

export default api;