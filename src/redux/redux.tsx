import { applyMiddleware, combineReducers, createStore } from "redux";
import mainpage_reducer from "./mainpage-reducer";
import pokemons_reducer from "./pokemons-reducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  mainPage: mainpage_reducer,
  pokemonsPage: pokemons_reducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;