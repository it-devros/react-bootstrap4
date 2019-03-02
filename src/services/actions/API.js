import axios from 'axios'
import config from '../env'

const API = axios.create({
  baseURL: config.API_ROOT_URL,
})

API.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error.response.data)
  },
)

export default API
