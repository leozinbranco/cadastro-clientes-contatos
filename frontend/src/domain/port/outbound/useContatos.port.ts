export interface IInsereContatoRequest {
  nome: string
  email: string
  tel1: string
  tel2: string
  clientesId: number
}

export interface IUpdateContatoRequest extends Partial<IInsereContatoRequest> {}
