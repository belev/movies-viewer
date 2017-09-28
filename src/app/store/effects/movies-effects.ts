import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs/Observable';
import { LOAD_MOVIES_ACTION, LoadMoviesSuccessAction } from '../actions/movies-actions';
import { Action } from '@ngrx/store';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) { }

  @Effect() userThreads$: Observable<Action> = this.actions$
    .ofType(LOAD_MOVIES_ACTION)
    .switchMap(action => this.moviesService.loadMostPopular())
    .map(allUserData => new LoadMoviesSuccessAction(allUserData));
}
