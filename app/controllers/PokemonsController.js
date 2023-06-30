import { AppState } from "../AppState.js";
import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawPokemons() {
  const pokemons = AppState.pokemons

  let template = ''

  pokemons.forEach(pokemon => {
    template += `
    <li onclick="app.PokemonsController.getPokemonDetails('${pokemon.index}')" class="mb-2 selectable fs-4" role"button">${pokemon.name}</li>
    `
  })
  setHTML('pokemonList', template)
}
export class PokemonsController {
  constructor() {
    console.log('pokemons controller loaded');
    this.getPokemons()

    AppState.on('pokemons', _drawPokemons)
  }

  async getPokemons() {
    try {
      await pokemonsService.getPokemons()
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }

  async getPokemonDetails(pokemonIndex) {
    try {
      await pokemonsService.getPokemonDetails(pokemonIndex)
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }
}