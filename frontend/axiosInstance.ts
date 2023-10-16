import axios, { HeadersDefaults } from 'axios'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = process.env.BACKEND_URL

type headers = {
  'Content-Type': string
  Accept: string
  Authorization: string
}

axiosClient.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json'
} as headers & HeadersDefaults

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access-token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

export default axiosClient
