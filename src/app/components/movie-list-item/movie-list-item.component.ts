import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListItemComponent {
  @Input() movie: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();
}
