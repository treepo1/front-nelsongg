import axios from 'axios'

const api = axios.create({
    baseURL : "https://nelson-gg.herokuapp.com/",
})

export default api;
