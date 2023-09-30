interface Abilities {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}

interface Forms {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface GameIndices {
  game_index: string;
  version: Version;
}

interface Move {
  name: string;
  url: string;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface Moves {
  move: Move;
  version_group_details: VersionGroupDetails[];
}

interface Species {
  name: string;
  url: string;
}

interface DreamWorld {
  front_default: string;
  front_female: string;
}

interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: Other;

}

interface Stat {
  name: string;
  url: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface Type {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

export interface PokemonRequest {
  abilities: Abilities[];
  base_experience: number;
  forms: Forms[];
  game_indices: GameIndices[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_type: any[];
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}

