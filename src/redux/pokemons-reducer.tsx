import { pokemonsPageAPI } from "../api";
import { ActionINT, StateINT } from "../types";

export enum CONST {
  SET_POKEMONS = 'SET_POKEMONS',
  SET_NAVIGATION = 'SET_NAVIGATION',
  SET_NEXT = 'SET_NEXT',
  SET_PREV = 'SET_PREV',
  SET_MAX_CARDS = 'SET_MAX_CARDS'
}
interface SetPokemonstINT {
  type: typeof CONST.SET_POKEMONS,
  pokemons: [] | null
}
interface SetNavigationtINT {
  type: typeof CONST.SET_NAVIGATION,
  pokemons: [] | null,
  offset: number,
  currentPage: number
}
interface SetNextINT {
  type: typeof CONST.SET_NEXT
}
interface SetPrevINT {
  type: typeof CONST.SET_PREV
}
interface SetMaxCardsINT {
  type: typeof CONST.SET_MAX_CARDS,
  maxCards: number
}

export const setPokemons = (pokemons: any): SetPokemonstINT => ({ type: CONST.SET_POKEMONS, pokemons });
export const setNavigation = (offset: number, currentPage: number, pokemons: any): SetNavigationtINT => ({ type: CONST.SET_NAVIGATION, offset, currentPage, pokemons })
export const setNext = (): SetNextINT => ({ type: CONST.SET_NEXT });
export const setPrev = (): SetPrevINT => ({ type: CONST.SET_PREV });
export const setMaxCards = (maxCards: number): SetMaxCardsINT => ({ type: CONST.SET_MAX_CARDS, maxCards })

const initialState: StateINT = {
  pokemons: null,
  count: 1118,
  offset: 0,
  maxCards: 10,
  currentPage: 1
}
const pokemonsReducer = (state: StateINT = initialState, action: ActionINT) => {
  switch (action.type) {
    case CONST.SET_POKEMONS:
      return {
        ...state, pokemons: [...action.pokemons]
      }
    case CONST.SET_MAX_CARDS:
      return {
        ...state,
        maxCards: action.maxCards,
        offset: 0,
        currentPage: 1
      }
    case CONST.SET_NEXT: {
      if (state.offset <= state.count - state.maxCards) {
        return {
          ...state,
          offset: state.offset + state.maxCards
        }
      }
      else return state
    }
    case CONST.SET_PREV: {
      if (state.offset >= state.maxCards) {
        return {
          ...state,
          offset: state.offset -= state.maxCards
        }
      }
      else return state
    }
    case CONST.SET_NAVIGATION: {
      return {
        ...state, offset: action.offset,
        currentPage: action.currentPage,
        pokemons: [...action.pokemons]
      }
    }
    default: {
      return state
    }
  }
}
export const withGetPokemons = (limit: number, offset: number) => async (dispatch: any) => {
  const response = await pokemonsPageAPI.getPokemons(limit, offset);
  dispatch(setPokemons(response.data.results));
}
export const withGetPokemonsNavigation = (limit: number, offset: number, currentPage: number, maxCards: number) => async (dispatch: any) => {
  const response = await pokemonsPageAPI.getPokemons(limit, offset * maxCards);
  dispatch(setNavigation(offset * maxCards, currentPage, response.data.results));
}
export const withNext = () => async (dispatch: any) => {
  dispatch(setNext());
}
export const withPrev = () => async (dispatch: any) => {
  dispatch(setPrev());
}
export const withSetMaxCards = (maxCards: number) => async (dispatch: any) => {
  dispatch(setMaxCards(maxCards));
}

export default pokemonsReducer