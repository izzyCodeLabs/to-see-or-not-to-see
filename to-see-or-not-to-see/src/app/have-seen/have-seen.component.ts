import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie/movie.model';
import { SeenService } from './seen.service';

@Component({
  selector: 'app-have-seen',
  templateUrl: './have-seen.component.html',
  styleUrls: ['./have-seen.component.css'],
})
export class HaveSeenComponent implements OnInit {
  constructor(private seenService: SeenService) {}

  ngOnInit(): void {}
}
