import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie/movie.model';

import { toSeenService } from './tosee.service';

@Component({
  selector: 'app-to-see',
  templateUrl: './to-see.component.html',
  styleUrls: ['./to-see.component.css']
})
export class ToSeeComponent implements OnInit {
  constructor(private toSeeService: toSeenService) {}


  ngOnInit(): void {
  }

}
