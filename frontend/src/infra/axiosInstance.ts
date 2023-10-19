/* eslint-disable @typescript-eslint/require-await */
import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(async config => {
  // const { cookies } = (await import('next/headers'))
  // const token = cookies().get('token')?.value
  console.log('ENTROU INTERCEPTOR')
  const token = localStorage.getItem('access-token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
