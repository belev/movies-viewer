import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import * as fromRootStore from '../../store';

@Component({
  selector: 'movie-detail-container',
  templateUrl: './movie-detail-container.component.html',
  styleUrls: ['./movie-detail-container.component.less']
})
export class MovieDetailContainerComponent {
  movie$: Observable<Movie>;

  constructor(private store: Store<fromRootStore.State>) {
    this.movie$ = this.store.select('movies', 'selectedMovie');
  }
}
