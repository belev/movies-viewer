import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromRootStore from './store';
import { MoviesEffects } from './store/effects/movies-effects';
import { environment } from '../environments/environment';
import { MovieListContainerComponent } from './containers/movie-list-container/movie-list-container.component';
import { MovieDetailContainerComponent } from './containers/movie-detail-container/movie-detail-container.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListContainerComponent,
    MovieDetailContainerComponent,
    MovieListItemComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(fromRootStore.reducers),
    EffectsModule.forRoot([MoviesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
