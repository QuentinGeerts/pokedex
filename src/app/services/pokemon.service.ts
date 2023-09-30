import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, Subject} from "rxjs";
import {PokemonsRequest} from "../models/pokemons-request";
import {PokemonRequest} from "../models/pokemon-request";
import {Species} from "../models/pokemon-species";
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonSubject$: Subject<string | number> = new Subject<string | number>();
  private readonly BASE_URL: string = 'https://pokeapi.co/api/v2';

  constructor(private _httpClient: HttpClient) {
  }

  /**
   * Permet de récupérer la liste des 20 premiers pokémons
   * @param url
   */
  getAll(url: string = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"): Observable<PokemonsRequest> {
    return this._httpClient.get<PokemonsRequest>(url);
  }

  /**
   * Permet de récupérer les informations d'un pokémon
   * @param nameOrId Nom ou Id du pokémon
   */
  get(nameOrId: string | number): Observable<Pokemon> {
    const pokemonDetails$: Observable<PokemonRequest> = this._httpClient.get<PokemonRequest>(`${this.BASE_URL}/pokemon/${nameOrId}`);
    const speciesDetails$: Observable<Species> = this._httpClient.get<Species>(`${this.BASE_URL}/pokemon-species/${nameOrId}`);

    return forkJoin({pokemonDetails$, speciesDetails$})
      .pipe(
        map(results => {
          const pokemonDetails: PokemonRequest = results.pokemonDetails$;
          const speciesDetails: Species = results.speciesDetails$;

          return {details: {...pokemonDetails}, species: {...speciesDetails}}
        })
      )
  }

}
