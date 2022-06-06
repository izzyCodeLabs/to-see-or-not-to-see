import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImdbApiService } from '../shared/imdb-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isLoading = false;
  movies;

  constructor(private imdbService:ImdbApiService) { }

  ngOnInit(): void {
  }

  async searchMovies(form:NgForm) {
    this.movies = await this.imdbService.fetchMovies(form);
  }

}
