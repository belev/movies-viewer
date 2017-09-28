import { Movie } from '../../models/movie.model';
import * as moviesActions from '../actions/movies-actions';

export interface State {
  movies: Movie[];
  selectedMovie: Movie;
}

export const INITIAL_MOVIES_STATE: State = {
  movies: [],
  selectedMovie: undefined
};

export function reducer(state: State = INITIAL_MOVIES_STATE, action: moviesActions.All): State {
  switch (action.type) {
    case moviesActions.LOAD_MOVIES_SUCCESS_ACTION: {
      return Object.assign(
        {},
        state,
        {movies: action.payload}
      );
    }

    case moviesActions.MOVIE_SELECTED_ACTION: {
      return Object.assign(
        {},
        state,
        {selectedMovie: action.payload}
      );
    }

    default:
      return state;
  }
}
