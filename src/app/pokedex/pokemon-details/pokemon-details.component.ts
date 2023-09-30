import {Component, OnInit} from '@angular/core';
import {PokemonRequest} from "../../models/pokemon-request";
import {PokemonService} from "../../services/pokemon.service";
import {Species} from "../../models/pokemon-species";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon!: Pokemon;
  isLoading!: boolean;

  constructor(private _pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._pokemonService.pokemonSubject$.subscribe({
      next: (nameOrId: string | number) => {
        this._pokemonService.get(nameOrId)
          .subscribe({
            next: (pokemon: Pokemon) => {
              this.pokemon = pokemon
              console.log(pokemon)
            },
            complete: () => this.isLoading = false
          })
      },

    })
  }

  getDescription (pokemon: Pokemon, lang: string): string {
    return pokemon.species.genera.find(genera => genera.language.name === lang)?.genus ?? "";
  }

}
