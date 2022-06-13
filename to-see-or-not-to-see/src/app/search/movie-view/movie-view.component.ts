import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/shared/movie/movie.model';
import { ImdbApiService } from 'src/app/shared/imdb-api.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css'],
})
export class MovieViewComponent implements OnInit {
  movie = {
    fullTitle: 'dummy name (year)',
    image:
      'https://imdb-api.com/images/original/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_Ratio0.6751_AL_.jpg',
    plot: 'Lorem ipsum and whatnot',
  };
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private imdbService: ImdbApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.onGetMovie(params['id']);
    });
  }

  async onGetMovie(id: string) {
    this.isLoading = true;
    this.movie = await this.imdbService.fetchMovieData(id);
    this.isLoading = false;
  }
}
