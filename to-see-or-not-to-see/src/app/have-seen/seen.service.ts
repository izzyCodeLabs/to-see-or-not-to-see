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
      imdbId: '4',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzMyMGI1N2UtNzc5YS00OGNkLTg1OTktMTNkMmY2Zjk1NTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg',
    },
    {
      title: 'Inception',
      releasedYear: 2010,
      stars: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
      imdbId: '5',
      poster:
        'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg',
    },
  ];

  private myFaveMovies: Movie[] = [
    {
      title: 'Eragon',
      releasedYear: 2006,
      stars: 'Ed Speleers, Sienna Guillory, Jeremy Irons',
      imdbId: '4',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzMyMGI1N2UtNzc5YS00OGNkLTg1OTktMTNkMmY2Zjk1NTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg',
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

    if (this.myFaveMovies.includes(this.mySeenMovies[idx])) {
      return;
    } else {
      let newFavorite = this.mySeenMovies[idx];

      this.myFaveMovies.push(newFavorite);
      this.faveListChange.next(this.myFaveMovies.slice());
      console.log(this.myFaveMovies);
    }
  }

  removeFavoriteMovie(idx) {
    if (idx < 0) return;

    this.myFaveMovies.splice(idx, 1);
    this.faveListChange.next(this.myFaveMovies.slice());
  }

  addNewMovie(movie: Movie) {
    this.mySeenMovies.push(movie);
    this.seenMovieChange.next(this.mySeenMovies.slice());
  }
}
