import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie/movie.model';

import { SeenService } from '../seen.service';

@Component({
  selector: 'app-seen-list',
  templateUrl: './seen-list.component.html',
  styleUrls: ['./seen-list.component.css'],
})
export class SeenListComponent implements OnInit {
  seenMovies: Movie[];
  constructor(private seenService: SeenService) {}

  ngOnInit(): void {
    this.seenMovies = this.seenService.getSeenMovies();

    this.seenService.seenMovieChange.subscribe((updatedList) => {
      this.seenMovies = updatedList;
    });
  }

  onAddFavorite(idx: number) {
    this.seenService.addFaveMovie(idx);
  }
}
