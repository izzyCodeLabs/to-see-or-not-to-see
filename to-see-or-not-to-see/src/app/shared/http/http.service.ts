import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SeenService } from 'src/app/have-seen/seen.service';
import { Movie } from '../movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  firebaseSeenURL =
    'https://movie-search-and-list-default-rtdb.firebaseio.com/seen.json';
  firebaseFaveURL =
    'https://movie-search-and-list-default-rtdb.firebaseio.com/fave.json';

  constructor(
    private http: HttpClient,
    private seenService: SeenService,
    private authService: AuthService
  ) {}

  saveMoviesToFirebase() {
    const seen = this.seenService.getSeenMovies();

    const fave = this.seenService.getFaveMovies();

    this.http.put(this.firebaseSeenURL, seen).subscribe((res) => {
      console.log('Firebase DB Response:', res);
    });

    this.http.put(this.firebaseFaveURL, fave).subscribe((res) => {
      console.log('Firebase DB Response:', res);
    });
  }

  fetchSeenMoviesFromFirebase() {
    return this.http.get(this.firebaseSeenURL, {}).pipe(
      tap((seen: Movie[]) => {
        this.seenService.setSeenMovies(seen);
      })
    );
  }

  fetchUpcomingMoviesFromFirebase() {
    return this.http.get(this.firebaseSeenURL, {}).pipe(
      tap((seen: Movie[]) => {
        this.seenService.setSeenMovies(seen);
      })
    );
  }
}
