export interface Cliente {
  readonly id: number
  readonly nome: string
  readonly email: string
  readonly tel1: string
  readonly tel2: string
  readonly dataRegistro: Date
  readonly contato_id?: number
}
