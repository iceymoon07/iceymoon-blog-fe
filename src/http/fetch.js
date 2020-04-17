import axios from 'axios'

const fetch = axios.create({
    baseURL: "/api",
    timeout: 20000,
    withCredentials: true
})

export default fetch