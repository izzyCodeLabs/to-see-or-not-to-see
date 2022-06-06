import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ImdbApiService {
  API_KEY:string = "k_69zqgrrv";

  constructor() { }

  async fetchMovies(form:NgForm) {
    console.log("Fetching search results for \"" + form.value.movie + "\"...");
    const res = await fetch('https://imdb-api.com/en/API/SearchMovie/' + this.API_KEY + '/' + form.value.movie);
    const data = await res.json();
    return data.results;
  }
}
