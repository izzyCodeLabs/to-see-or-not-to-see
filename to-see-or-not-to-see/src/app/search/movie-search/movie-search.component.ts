import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImdbApiService } from '../../shared/imdb-api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  isLoading = false;
  movies;

  constructor(private imdbService:ImdbApiService) { }

  ngOnInit(): void {
  }

  async searchMovies(form:NgForm) {
    this.movies = await this.imdbService.fetchMovies(form);
  }

}
