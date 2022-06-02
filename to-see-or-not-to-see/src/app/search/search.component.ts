import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isLoading = false;
  movies = [];

  constructor() { }

  ngOnInit(): void {
  }

  async fetchMovies(form:NgForm) {
    console.log("Fetching search results for \"" + form.value.movie + "\"...");
    const res = await fetch('https://imdb-api.com/en/API/SearchMovie/k_69zqgrrv/' + form.value.movie);
    const data = await res.json();
    this.movies = data.results;
    console.log(data);
  }

}
