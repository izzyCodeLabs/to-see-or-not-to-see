import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class SeenService {
  faveListChange = new Subject<Movie[]>();

  private mySeenMovies: Movie[] = [
    {
      title: 'Eragon',
      releasedYear: 2006,
      stars: ['Ed Speleers', 'Sienna Guillory', 'Jeremy Irons'],
    },
    {
      title: 'Inception',
      releasedYear: 2010,
      stars: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    },
  ];

  private myFaveMovies: Movie[] = [
    {
      title: 'Eragon',
      releasedYear: 2006,
      stars: ['Ed Speleers', 'Sienna Guillory', 'Jeremy Irons'],
    },
  ];

  getSeenMovies() {
    return this.mySeenMovies.slice();
  }

  getFaveMovies() {
    return this.mySeenMovies.slice();
  }

  addSeenMovie(movie: Movie) {
    this.myFaveMovies.push(movie);
    this.faveListChange.next(this.myFaveMovies.slice());
  }
}
