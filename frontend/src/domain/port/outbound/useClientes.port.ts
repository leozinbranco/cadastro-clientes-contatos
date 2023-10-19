export interface IInsereClienteRequest {
  nome: string
  email: string
  tel1: string
  tel2: string
}

export interface IUpdateClienteRequest extends Partial<IInsereClienteRequest> {}
