import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class toSeenService {
  toSeeListChange = new Subject<Movie[]>();

  private myToSeeMovie: Movie[] = [
    /*{
      title: 'Matrix',
      releasedYear: 1999,
      stars: ['Keanu Reeves', 'Laurence Fishburne'],
    },
    {
      title: 'DrugStore Cowboy',
      releasedYear: 1989,
      stars: ['Matt Dillion, Kelly Lynch']
    }*/
  ];

  getToSeeMovies() {
    return this.myToSeeMovie.slice();
  }

  addToSeeMovie(idx: number) {
    if (idx < 0) return;
    let newToSee = this.myToSeeMovie[idx];

    this.myToSeeMovie.push(newToSee);
    this.toSeeListChange.next(this.myToSeeMovie.slice());
    console.log(this.myToSeeMovie);
  }

  removeToSeeMovie(idx) {
    if (idx < 0) return;

    this.myToSeeMovie.splice(idx, 1);
    this.toSeeListChange.next(this.myToSeeMovie.slice());
  }
}

