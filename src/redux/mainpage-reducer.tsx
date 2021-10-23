import { mainPageAPI } from "../api";

const SET_POKEMONS = 'SET_POKEMONS';
export const setPokemons = (results: any) => ({ type: SET_POKEMONS, 'pokemons': results });

const initialState = {
  maxCards: 10,
  pokemons:null
}

const mainpage_reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
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