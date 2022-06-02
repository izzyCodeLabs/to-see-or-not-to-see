import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie/movie.model';
import { SeenService } from '../seen.service';

@Component({
  selector: 'app-seen-list',
  templateUrl: './seen-list.component.html',
  styleUrls: ['./seen-list.component.css'],
})
export class SeenListComponent implements OnInit {
  seenMovies: Movie[];
  favoriteMovies: Movie[];
  constructor(private seenService: SeenService) {}

  ngOnInit(): void {
    this.seenMovies = this.seenService.getSeenMovies();
    this.favoriteMovies = this.seenService.getFaveMovies();
  }

  onAddFavorite(movie: Movie) {
    this.seenService.addSeenMovie(movie);
  }
}
