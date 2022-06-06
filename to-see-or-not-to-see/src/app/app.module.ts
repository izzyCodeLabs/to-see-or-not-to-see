import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieshelfComponent } from './movieshelf/movieshelf.component';
import { LibraryComponent } from './library/library.component';
import { ToseeListComponent } from './movieshelf/tosee-list/tosee-list.component';
import { MovieDetailsComponent } from './movieshelf/movie-details/movie-details.component';
import { MovieResultsComponent } from './library/movie-results/movie-results.component';
import { MovieSearchComponent } from './library/movie-search/movie-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MovieComponent } from './shared/movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieshelfComponent,
    LibraryComponent,
    ToseeListComponent,
    MovieDetailsComponent,
    MovieResultsComponent,
    MovieSearchComponent,
    NavigationComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
