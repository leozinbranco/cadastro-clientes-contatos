import { AxiosResponse } from 'axios'
import { Contato } from '@/domain/entities'
import { api } from '@/infra/axiosInstance'
import { IUpdateContatoResponse } from '@/domain/port/inbound/useContatos.port'
import { IInsereContatoRequest, IUpdateContatoRequest } from '@/domain/port/outbound'
export const useContatos = () => {
  const getContatosByClienteId = async (id: number): Promise<Contato[]> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<Contato[]> = await api.get(`${nestAPI}/contatos/by-client/${id}`)
      return response.data
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  const updateContato = async (request: IUpdateContatoRequest, id: number): Promise<IUpdateContatoResponse> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<IUpdateContatoResponse> = await api.patch(`${nestAPI}/contatos/${id}`, request)
      return response.data
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  const insereContato = async (request: IInsereContatoRequest): Promise<Contato> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<Contato> = await api.post(`${nestAPI}/contatos`, request)
      return response.data
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  const deleteContato = async (id: number): Promise<Contato> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
    try {
      const response: AxiosResponse<Contato> = await api.delete(`${nestAPI}/contatos/${id}`)
      return response.data
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }

  return { getContatosByClienteId, deleteContato, updateContato, insereContato }
}
