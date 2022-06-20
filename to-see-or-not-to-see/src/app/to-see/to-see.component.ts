import { Component, OnInit } from '@angular/core';
import { SeenService } from '../have-seen/seen.service';
import { Movie } from '../shared/movie/movie.model';

@Component({
  selector: 'app-to-see',
  templateUrl: './to-see.component.html',
  styleUrls: ['./to-see.component.css'],
})
export class ToSeeComponent implements OnInit {
  toSeeMovies: Movie[] = [];

  constructor(private seenService: SeenService) {}

  ngOnInit(): void {
    this.toSeeMovies = this.seenService.getToSeeMovies();
  }

  onHaveSeen(idx: number) {
    let newHaveSeen = this.toSeeMovies[idx];

    this.seenService.addNewMovie(newHaveSeen);
  }
}
