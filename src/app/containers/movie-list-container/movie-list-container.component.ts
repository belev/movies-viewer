import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { LoadMoviesAction, MovieSelectedAction } from '../../store/actions/movies-actions';
import * as fromRootStore from '../../store';

@Component({
  selector: 'movie-list-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.less']
})
export class MovieListContainerComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private store: Store<fromRootStore.State>) {
    this.movies$ = this.store.select('movies', 'movies');
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadMoviesAction());
  }

  handleMovieSelected(movie: Movie) {
    this.store.dispatch(new MovieSelectedAction(movie));
  }
}
