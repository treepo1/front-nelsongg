import axios from 'axios'

const api = axios.create({
    baseURL : "https://nelson-gg-back.herokuapp.com/",
})

export default api;
