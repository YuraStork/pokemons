import { mainPageAPI } from "../api";

enum CONST {
  SET_POKEMONS = 'SET_POKEMONS',
}
interface setPokemonsINT {
  type: typeof CONST.SET_POKEMONS,
  pokemons: [] | null
}
interface initialStateINT {
  maxCards: number,
  pokemons: null | []
}
export const setPokemons = (pokemons: any): setPokemonsINT => ({ type: CONST.SET_POKEMONS, pokemons });

const initialState: initialStateINT = {
  maxCards: 10,
  pokemons: null
}

const mainpage_reducer = (state: initialStateINT = initialState, action: any) => {
  switch (action.type) {
    case CONST.SET_POKEMONS:
      return {
        ...state,
        pokemons: [...action.pokemons]
      }
    default:
      return state
  }
}

export const withGetPokemons = (limit: number) => async (dispatch: any) => {
  const response = await mainPageAPI.getPokemons(limit);
  dispatch(setPokemons(response.data.results));
}

export default mainpage_reducer