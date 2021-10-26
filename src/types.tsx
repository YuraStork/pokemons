import { CONST } from "./redux/pokemons-reducer";

export interface PokemonsPropsINT {
  pokemons: any,
  count: number,
  offset: number,
  maxCards: number,
  currentPage: number,
}
export interface StateINT {
  pokemons: null | [],
  count: number,
  offset: number,
  maxCards: number,
  currentPage: number
}
export interface ActionINT {
  type: CONST,
  pokemons?: any,
  count?: number,
  offset?: number,
  maxCards?: number,
  currentPage?: number,
}