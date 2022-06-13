import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeenService } from '../have-seen/seen.service';
import { Movie } from './movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class ImdbApiService {
  private API_KEY: string = 'k_69zqgrrv';

  constructor(private seenService: SeenService) {}

  async fetchSearchedMovies(form: NgForm) {
    console.log('Fetching search results for "' + form.value.movie + '"...');
    const res = await fetch(
      'https://imdb-api.com/en/API/SearchMovie/' +
        this.API_KEY +
        '/' +
        form.value.movie
    );
    const data = await res.json();
    console.log('Done!');
    return data.results;
  }

  async fetchNowPlaying() {
    console.log('Fetching movies playing in theaters...');
    const res = await fetch(
      'https://imdb-api.com/en/API/InTheaters/' + this.API_KEY
    );
    const data = await res.json();
    console.log('Done!');
    return data.items;
  }

  async fetchComingSoon() {
    console.log('Fetching movies coming soon...');
    const res = await fetch(
      'https://imdb-api.com/en/API/ComingSoon/' + this.API_KEY
    );
    const data = await res.json();
    console.log(data);
    console.log('Done!');
    return data.items;
  }

  async fetchMovieData(id: string) {
    console.log('Fetching movie data for id ' + id + '...');
    const res = await fetch(
      'https://imdb-api.com/en/API/Title/' + this.API_KEY + '/' + id
    );
    const data = await res.json();
    console.log(data);
    console.log('Done!');
    return data;
  }

  saveMovieToHaveSeen(movie) {
    const formattedMovie = new Movie(
      movie.Title.Title,
      movie.Title.Year,
      movie.TItle.Stars,
      movie.Id,
      movie.Title.Image
    );
    this.seenService.addNewMovie(formattedMovie);
  }
}
