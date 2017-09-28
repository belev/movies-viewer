export interface Movie {
  id: number;
  vote_average: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

export function generateMockMovie(): Movie {
  return {
    id: 1,
    vote_average: 5,
    title: 'movie title',
    poster_path: 'poster path',
    overview: 'overview',
    release_date: '2016-02-09'
  };
}
