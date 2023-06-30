import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonsService {
  async getPokemonDetails(pokemonIndex) {
    const res = await pokeApi.get(`api/vs/pokemon/${pokemonIndex}`)
    console.log('got pokemon details', res.data.results);
  }
  async getPokemons() {
    const res = await pokeApi.get(`api/v2/pokemon/`)
    console.log('got pokemons', res.data)
    AppState.pokemons = res.data.results

  }
}
export const pokemonsService = new PokemonsService()