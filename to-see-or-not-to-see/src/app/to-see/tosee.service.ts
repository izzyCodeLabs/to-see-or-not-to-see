import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class toSeenService {
  toSeeListChange = new Subject<Movie[]>();

  private myToSeeMovie: Movie[] = [
    {
      title: 'Matrix',
      releasedYear: 1999,
      stars: ['Keanu Reeves', 'Laurence Fishburne'],
    },
    {
      title: 'DrugStore Cowboy',
      releasedYear: 1989,
      stars: ['Matt Dillion, Kelly Lynch']
    }
  ];

  getToSeeMovies() {
    return this.myToSeeMovies.slice();
  }

  getToSeeMovies() {
    return this.mytoSeeMovies.slice();
  }

  addToSeeMovie(idx: number) {
    if (idx < 0) return;
    let newToSee = this.myTooSeeMovies[idx];

    this.toSeeMovies.push(newtoSee);
    this.toSeeListChange.next(this.myToSee.slice());
    console.log(this.myToSeeMovie);
  }

  removeToSeeMovie(idx) {
    if (idx < 0) return;

    this.myToSeeMovies.splice(idx, 1);
    this.toSeeListChange.next(this.myToSeeMovies.slice());
  }
}
