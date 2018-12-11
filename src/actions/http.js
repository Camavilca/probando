import axios from 'axios'
import { urlhttp } from '../actions/constante'
const http = axios.create({
    // baseURL: 'http://localhost:5000/v1/'
    baseURL: urlhttp
    // baseURL: 'http://ec2-18-236-145-198.us-west-2.compute.amazonaws.com:8080/v2/'
})
export default http;