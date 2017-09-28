import { generateMockMovie } from '../../models/movie.model';

import * as fromMovies from './movies-reducer';
import { LoadMoviesSuccessAction, MovieSelectedAction } from '../actions/movies-actions';

describe('MoviesReducer', () => {
  const movie1 = generateMockMovie();
  const movie2 = Object.assign({}, movie1, {id: 2});
  const movie3 = Object.assign({}, movie1, {id: 3});

  it('should return the initial state', () => {
    const result = fromMovies.reducer(undefined, {} as any);

    expect(result).toEqual(fromMovies.INITIAL_MOVIES_STATE);
  });

  it('should set movies when none exists', () => {
    const payload = [movie1, movie2, movie3];

    const result = fromMovies.reducer(undefined, new LoadMoviesSuccessAction(payload));

    const expected = Object.assign({}, fromMovies.INITIAL_MOVIES_STATE, {movies: payload});
    expect(result).toEqual(expected);
  });

  it('should replace movies with payload movies', () => {
    const currentState: fromMovies.State = {
      movies: [movie1],
      selectedMovie: undefined
    };
    const payload = [movie2, movie3];

    const result = fromMovies.reducer(currentState, new LoadMoviesSuccessAction(payload));

    const expected = Object.assign({}, fromMovies.INITIAL_MOVIES_STATE, {movies: payload});
    expect(result).toEqual(expected);
  });

  it('should set selectedMovie when none exists', () => {
    const payload = movie1;

    const result = fromMovies.reducer(undefined, new MovieSelectedAction(payload));

    const expected = Object.assign({}, fromMovies.INITIAL_MOVIES_STATE, {selectedMovie: payload});
    expect(result).toEqual(expected);
  });

  it('should replace selectedMovie with payload movie', () => {
    const currentState = {movies: [], selectedMovie: movie1};
    const payload = movie2;

    const result = fromMovies.reducer(currentState, new MovieSelectedAction(payload));

    const expected = Object.assign({}, fromMovies.INITIAL_MOVIES_STATE, {selectedMovie: payload});
    expect(result).toEqual(expected);
  });
});
