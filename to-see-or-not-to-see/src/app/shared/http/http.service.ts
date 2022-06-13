import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeenService } from 'src/app/have-seen/seen.service';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  firebaseSeenURL =
    'https://movie-search-and-list-default-rtdb.firebaseio.com/seen.json';
  firebaseToSeeURL =
    'https://movie-search-and-list-default-rtdb.firebaseio.com/to-see.json';
  firebaseFaveURL =
    'https://movie-search-and-list-default-rtdb.firebaseio.com/fave.json';
  firebaseSkipURL =
    'https://movie-search-and-list-default-rtdb.firebaseio.com/skip.json';

  constructor(private http: HttpClient, private seenService: SeenService) {}

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
}
