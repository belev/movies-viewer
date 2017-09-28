import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMovies from './reducers/movies-reducer';

export interface State {
  movies: fromMovies.State;
}

export const reducers: ActionReducerMap<State> = {
  movies: fromMovies.reducer
};

/// selectors
export const getMoviesState = createFeatureSelector<fromMovies.State>('movies');
