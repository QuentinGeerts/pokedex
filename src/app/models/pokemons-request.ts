export interface PokemonsRequest {
  count: number;
  next?: string;
  previous?: string;
  results: Results[];
}

interface Results {
  name: string;
  url: string;
}
