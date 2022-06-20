import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../shared/movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class SeenService {
  faveListChange = new Subject<Movie[]>();
  seenMovieChange = new Subject<Movie[]>();

  private mySeenMovies: Movie[] = [
    {
      title: 'Eragon',
      releasedYear: 2006,
      stars: 'Ed Speleers, Sienna Guillory, Jeremy Irons',
      imdbId: 'tt0449010',
      poster:
        'https://imdb-api.com/images/original/MV5BNzMyMGI1N2UtNzc5YS00OGNkLTg1OTktMTNkMmY2Zjk1NTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.6751_AL_.jpg',
    },
    {
      title: 'Inception',
      releasedYear: 2010,
      stars: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
      imdbId: 'tt1375666',
      poster:
        'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg',
    },
  ];

  private myFaveMovies: Movie[] = [];

  private myToSeeMovies: Movie[] = [];

  getSeenMovies() {
    return this.mySeenMovies.slice();
  }

  getFaveMovies() {
    return this.myFaveMovies.slice();
  }

  getToSeeMovies() {
    return this.myToSeeMovies.slice();
  }

  addFaveMovie(idx: number) {
    if (idx < 0) return;

    if (this.myFaveMovies.includes(this.mySeenMovies[idx])) {
      return;
    } else {
      let newFavorite:Movie = this.mySeenMovies[idx];

      this.myFaveMovies.push(newFavorite);
      this.mySeenMovies.splice(idx, 1);
      this.seenMovieChange.next(this.mySeenMovies.slice());
      this.faveListChange.next(this.myFaveMovies.slice());
      console.log(this.myFaveMovies);
    }
  }

  removeFavoriteMovie(idx:number) {
    if (idx < 0) return;

    if (this.mySeenMovies.includes(this.myFaveMovies[idx])) {
      return;
    } else {
      let newSeen:Movie = this.myFaveMovies[idx];

      this.mySeenMovies.push(newSeen);
      this.myFaveMovies.splice(idx, 1);
      this.seenMovieChange.next(this.mySeenMovies.slice());
      this.faveListChange.next(this.myFaveMovies.slice());
    }
  }

  addNewMovie(movie: Movie) {
    this.mySeenMovies.push(movie);
    this.seenMovieChange.next(this.mySeenMovies.slice());
  }

  setSeenMovies(movieArr: Movie[]) {
    this.mySeenMovies = movieArr;
    this.seenMovieChange.next(this.mySeenMovies.slice());
  }
}
