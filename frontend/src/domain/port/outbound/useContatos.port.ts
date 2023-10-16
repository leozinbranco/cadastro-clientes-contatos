import { PrecoVenda } from 'domain/entities'

// interface PrecosDeTabela extends Record<Lowercase<PrecoVenda['tipoEnergia']>, number> {}
export interface IContatos extends Record<PrecoVenda['submercado'], PrecosDeTabela> {
  ano: number
}

export interface IInserePrecoVendaRequest {
  ano: number
  convSE: number
  i50: number
  i100: number
  S: number
  NE: number
  N: number
}

export type ICurvaForwardTabela = Array<{
  PRODUTO: number
  'CONV SE': string
  'Spread-I50 SE': string
  'Spread-I100 SE': string
  'Spread S-SE': string
  'Spread NE-SE': string
  'Spread N-SE': string
}>
