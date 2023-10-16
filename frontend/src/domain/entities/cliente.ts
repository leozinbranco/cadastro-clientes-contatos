export interface Cliente {
  readonly nome: string
  readonly email: string
  readonly telefones: string[]
  readonly vigenciaMatriz?: string
  readonly dataRegistro: Date
}
