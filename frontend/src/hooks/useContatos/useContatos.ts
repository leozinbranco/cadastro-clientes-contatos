import axios, { AxiosResponse } from 'axios'
import { ICurvaForwardTabela, IInserePrecoVendaRequest, IPrecoVenda } from 'domain/port/outbound'
import { LeitorCSV } from 'utils'
import { object, number, array, ValidationError } from 'yup'

export const usePrecoVenda = () => {
  const inserirClientes = async (file: File): Promise<AxiosResponse> => {
    const nestAPI = process.env.BACKEND_URL
    const token = process.env.VITE_SIMULADOR_TOKEN
    const headers = {
      'x-api-key': token,
      'Content-Type': 'application/json;charset=utf-8'
    }

    try {
    //   const csv = await LeitorCSV().parseFile(file) as ICurvaForwardTabela
    //   const csvFormataValores = csv.map(spread => ({
    //     ano: spread.PRODUTO,
    //     convSE: parseFloat(spread['CONV SE'].toString().replace(',', '.')),
    //     i50: parseFloat(spread['Spread-I50 SE'].toString().replace(',', '.')),
    //     i100: parseFloat(spread['Spread-I100 SE'].toString().replace(',', '.')),
    //     S: parseFloat(spread['Spread S-SE'].toString().replace(',', '.')),
    //     NE: parseFloat(spread['Spread NE-SE'].toString().replace(',', '.')),
    //     N: parseFloat(spread['Spread N-SE'].toString().replace(',', '.'))
    //   }))
    //   await validar(csvFormataValores)
      const request: IInserePrecoVendaRequest[] = csvFormataValores

      const response = await axios.put(`${nestAPI}preco-venda`, request, { headers })
      return response.data as AxiosResponse
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  const getClientes = async (request: { anoInicial: number, anoFinal: number }): Promise<Contatos[]> => {
    const nestAPI = process.env.BACKEND_URL
    const token = 'teste'// process.env.VITE_SIMULADOR_TOKEN
    const headers = {
      'x-api-key': token,
      'Content-Type': 'application/json;charset=utf-8'
    }

    try {
      const response = await axios.post(`${nestAPI}contatos`, request, { headers })
      return response.data as Contatos[]
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { getClientes, inserirClientes }
}
