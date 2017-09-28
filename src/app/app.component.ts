import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRootStore from './store';
import { LoadMoviesAction } from './store/actions/movies-actions';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';

@Component({
  selector: 'mv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  movies$: Observable<Movie[]>;

  constructor(private store: Store<fromRootStore.State>) {
    this.movies$ = this.store.select('movies', 'movies');
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadMoviesAction());
  }
}
