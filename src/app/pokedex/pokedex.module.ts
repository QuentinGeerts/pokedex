import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokedexRoutingModule} from './pokedex-routing.module';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokedexComponent} from './pokedex.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {PokemonService} from "../services/pokemon.service";
import {SharedModule} from "../shared/shared.module";
import {PokemonFiltreComponent} from './pokemon-filtre/pokemon-filtre.component';


@NgModule({
  declarations: [

    PokemonListComponent,
    PokedexComponent,
    PokemonDetailsComponent,
    PokemonFiltreComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule,
  ],
  providers: [PokemonService]
})
export class PokedexModule {
}
