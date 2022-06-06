import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ImdbApiService {
  API_KEY:string = "k_69zqgrrv";

  constructor() { }

  async fetchSearchedMovies(form:NgForm) {
    console.log("Fetching search results for \"" + form.value.movie + "\"...");
    const res = await fetch('https://imdb-api.com/en/API/SearchMovie/' + this.API_KEY + '/' + form.value.movie);
    const data = await res.json();
    console.log("Done!");
    return data.results;
  }

  async fetchNowPlaying() {
    console.log("Fetching movies playing in theaters...");
    const res = await fetch('https://imdb-api.com/en/API/InTheaters/' + this.API_KEY);
    const data = await res.json();
    console.log("Done!");
    return data.items;
  }

  async fetchComingSoon() {
    console.log("Fetching movies coming soon...");
    const res = await fetch('https://imdb-api.com/en/API/ComingSoon/' + this.API_KEY);
    const data = await res.json();
    console.log(data);
    console.log("Done!");
    return data.items;
  }

}
