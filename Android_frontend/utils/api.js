import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4242/",
    responseType: "json"
});