import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie/movie.model';

@Component({
  selector: 'app-tosee-list',
  templateUrl: './tosee-list.component.html',
  styleUrls: ['./tosee-list.component.css']
})
export class ToseeListComponent implements OnInit {
  moviesToSee: Movie[] = [
    new Movie(
      'Drugstore Cowboy',
      'Matt Dillion, Kelly Lynch',
      'Drama',
      'https://duckduckgo.com/i/9c3b66b1.png'),

      new Movie(
        'Matrix',
        'Keanu Reeves',
        'Action',
        'https://duckduckgo.com/i/afe1ef49.jpg'
    )

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
