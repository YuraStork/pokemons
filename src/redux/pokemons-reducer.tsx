import { pokemonsPageAPI } from "../api";

interface INITSTATE {
  pokemons: null | [],
  count: number,
  offset: number,
  maxCards: number,
  currentPage: number
}

const SET_POKEMONS = 'SET_POKEMONS';
const SET_NAVIGATION = 'SET_NAVIGATION';
const SET_NEXT = 'SET_NEXT';
const SET_PREV = 'SET_PREV';
const SET_MAX_CARDS = 'SET_MAX_CARDS';

export const setPokemons = (pokemons: any) => ({ type: SET_POKEMONS, pokemons });
export const setNavigation = (offset: number, currentPage: number, pokemons: any) => ({ type: SET_NAVIGATION, offset, currentPage, pokemons })
export const setNext = () => ({ type: SET_NEXT });
export const setPrev = () => ({ type: SET_PREV });
export const setMaxCards = (maxCards: number) => ({ type: SET_MAX_CARDS, maxCards })

const initialState: INITSTATE = {
  pokemons: null,
  count: 1118,
  offset: 0,
  maxCards: 10,
  currentPage: 1
}
const pokemonsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state, pokemons: [...action.pokemons]
      }
    case SET_MAX_CARDS:
      return {
        ...state, 
        maxCards: action.maxCards,
        offset: 0,
        currentPage: 1
      }
    case SET_NEXT: {
      if (state.offset <= state.count - state.maxCards) {
        return {
          ...state,
          currentPage: ++state.currentPage,
          offset: state.offset + state.maxCards
        }
      }
      else return state
    }
    case SET_PREV: {
      if (state.offset >= state.maxCards) {
        return {
          ...state,
          currentPage: --state.currentPage,
          offset: Number(state.offset -= state.maxCards)
        }
      }
      else return state
    }
    case SET_NAVIGATION: {
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