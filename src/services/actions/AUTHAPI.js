import axios from 'axios'
import config from '../env'

const AUTHAPI = axios.create({
  baseURL: config.API_ROOT_URL,
})

AUTHAPI.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  },
  error => {
    return Promise.reject(error.response.data)
  },
)

AUTHAPI.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error.response.data)
  },
)

export default AUTHAPI
