import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent {
  @Input() movie: Movie;
}
