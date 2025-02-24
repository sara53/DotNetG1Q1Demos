import { Component } from '@angular/core';
import { MovieCardComponent } from './movie/movie-card.component';

@Component({
  selector: 'app-movies',
  imports: [MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movie: { id: number; name: string; desc: string } = {
    id: 1,
    name: 'Frozen II',
    desc: 'Lorem Text For Frozen II',
  };
}
