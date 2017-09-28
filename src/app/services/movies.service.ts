import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesService {
  private API_PATH = 'https://api.themoviedb.org/3';

  constructor(private http: Http) { }

  loadMostPopular(): Observable<Movie[]> {
    return this.http
      .get(`${this.API_PATH}/discover/movie?sort_by=popularity.desc&api_key=${environment.movieDbApiKey}`)
      .map(res => res.json().results);
  }
}
