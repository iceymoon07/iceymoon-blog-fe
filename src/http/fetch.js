import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const fetch = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 20000
})

export default fetch