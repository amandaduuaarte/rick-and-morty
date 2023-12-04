export interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  location: {
    name: string;
  };
}

export type Characters = Character[];

export interface CharacterDetails extends Character {
  episode: {
    id: string;
    name: string;
    air_date: string;
  }[];
  origin: {
    name: string;
  };
}
