import {Component, OnInit} from '@angular/core';
import {PokemonsRequest} from "../../models/pokemons-request";
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonsRequest!: PokemonsRequest;
  pokemons: Pokemon[] = [];

  constructor(private _pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.loadAllPokemons();
  }

  load(url: string | undefined): void {
    this._pokemonService.getAll(url)
      .subscribe({
        next: (data: PokemonsRequest) => {
          this.pokemonsRequest = data;
          this.loadMore(data);
        },
        complete: () => this.select(this.pokemonsRequest.results[0].name),
      })
  }

  select(nameOrId: string | number) {
    this._pokemonService.pokemonSubject$.next(nameOrId);
  }

  private loadAllPokemons(): void {
    this._pokemonService.getAll()
      .subscribe({
        next: (data: PokemonsRequest) => {
          this.pokemonsRequest = data;
          this.loadMore(data);
        },
        complete: () => this.select(this.pokemonsRequest.results[0].name),
        error: (err) => console.error('Failed to load all pokemons:', err)
      });
  }

  private loadMore(data: PokemonsRequest) {
    this.pokemons = [];
    data.results
      .map(pokemon =>
        this._pokemonService
          .get(pokemon.name)
          .subscribe({
            next: (value: Pokemon) => this.pokemons.push(value)
          })
          .add(() => this.pokemons.sort((p1, p2) => p1.species.id - p2.species.id)))
  }


}
