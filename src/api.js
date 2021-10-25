import * as axios from 'axios';

const main = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const pokemonsPageAPI = {
  getPokemons: async (limit, offset) => {
    return await main.get(`pokemon?limit=${limit}&offset=${offset}`);
  }
}

export const mainPageAPI = {
  getPokemons: async (limit) => {
    return await main.get(`pokemon?limit=${limit}&offset=0`);
  },
  getPokemon: async (id) => {
    return await main.get(`pokemon/${id}`);
  }
}


