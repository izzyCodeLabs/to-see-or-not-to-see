import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../shared/movie/movie.model';

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
    return this.myFaveMovies.slice();
  }

  addFaveMovie(idx: number) {
    if (idx < 0) return;
    let newFavorite = this.mySeenMovies[idx];

    this.myFaveMovies.push(newFavorite);
    this.faveListChange.next(this.myFaveMovies.slice());
    console.log(this.myFaveMovies);
  }

  removeFavoriteMovie(idx) {
    if (idx < 0) return;

    this.myFaveMovies.splice(idx, 1);
    this.faveListChange.next(this.myFaveMovies.slice());
  }
}
