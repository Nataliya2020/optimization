export interface info {
  count: number,
  pages: number,
  next: string,
  prev: string
}

export interface DataList {
  id: number
  name: string
}

export interface DataDetaileCharacter {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

export interface DataDetaileLocation {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string
}

export interface DataDetaileEpisode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}

export interface DataDetaileFull<T> {
  info: info,
  results: T[]
}

export interface ItemListProps {
  url: string,
  itemQueryUrl: string
}
