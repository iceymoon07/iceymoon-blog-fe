import axios from 'axios'
import { Message } from 'element-ui'

const fetch = axios.create({
    baseURL: "/api",
    timeout: 20000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
})

fetch.interceptors.request.use(config => config, error => Promise.reject(error))

fetch.interceptors.response.use(
    response => { return response.data },
    error => {
        if (error.response) {
            Message.error(error.response.data.message[0])
        }
    }
)

export default fetch