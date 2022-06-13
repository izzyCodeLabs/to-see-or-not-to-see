import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/movie/movie.model';

import { SeenService } from '../seen.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent implements OnInit {
  private faveListSub: Subscription;

  favoriteMovies: Movie[];
  constructor(private seenService: SeenService) {}

  ngOnInit(): void {
    this.favoriteMovies = this.seenService.getFaveMovies();

    // listen for change to favorite list
    this.seenService.faveListChange.subscribe((updatedList) => {
      this.favoriteMovies = updatedList;
    });
  }

  onRemoveFavorite(idx) {
    this.seenService.removeFavoriteMovie(idx);
  }
}
