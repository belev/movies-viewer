import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

export const LOAD_MOVIES_ACTION = '[Movies] Load';
export const LOAD_MOVIES_SUCCESS_ACTION = '[Movies] Load Success';
export const MOVIE_SELECTED_ACTION = '[Movies] Movie Selected';

export class LoadMoviesAction implements Action {
  readonly type = LOAD_MOVIES_ACTION;

  constructor() { }
}

export class LoadMoviesSuccessAction implements Action {
  readonly type = LOAD_MOVIES_SUCCESS_ACTION;

  constructor(public payload?: Movie[]) { }
}

export class MovieSelectedAction implements Action {
  readonly type = MOVIE_SELECTED_ACTION;

  constructor(public payload?: Movie) { }
}

export type All = LoadMoviesAction | LoadMoviesSuccessAction | MovieSelectedAction;
