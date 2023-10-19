import { AxiosError, AxiosResponse } from 'axios'
import { Cliente } from '@/domain/entities'
import { api } from '@/infra/axiosInstance'
import { IInsereClienteRequest, IUpdateClienteRequest } from '@/domain/port/outbound'
import { IUpdateClienteResponse } from '@/domain/port/inbound'
export const useClientes = () => {
  const getClientes = async (): Promise<Cliente[]> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<Cliente[]> = await api.get(`${nestAPI}/clientes`)
      return response.data
    } catch (e) {
      const { message, code } = e as AxiosError
      throw new Error(message, { cause: { code } })
    }
  }
  const updateCliente = async (request: IUpdateClienteRequest, id: number): Promise<IUpdateClienteResponse> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<IUpdateClienteResponse> = await api.patch(`${nestAPI}/clientes/${id}`, request)
      return response.data
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  const insereCliente = async (request: IInsereClienteRequest): Promise<Cliente> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<Cliente> = await api.post(`${nestAPI}/clientes`, request)
      return response.data
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  const deleteCliente = async (id: number): Promise<Cliente> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<Cliente> = await api.delete(`${nestAPI}/clientes/${id}`)
      return response.data
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { getClientes, deleteCliente, insereCliente, updateCliente }
}
