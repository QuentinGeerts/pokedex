import {PokemonRequest} from "./pokemon-request";
import {Species} from "./pokemon-species";

export interface Pokemon {
  details: PokemonRequest;
  species: Species;
}
