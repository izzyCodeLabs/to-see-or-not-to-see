import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/movie/movie.model';
import { ImdbApiService } from 'src/app/shared/imdb-api.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  movie:Movie;
  isLoading:boolean = false;

  constructor(private route:ActivatedRoute, private imdbService:ImdbApiService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.onGetMovie(params['id'])
        })
  }

  async onGetMovie(id:string) {
    this.isLoading = true;
    this.movie = await this.imdbService.fetchMovieData(id);
    this.isLoading = false;
  }
}
