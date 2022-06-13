import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HaveSeenComponent } from './have-seen/have-seen.component';
import { SeenListComponent } from './have-seen/seen-list/seen-list.component';

import { FavoriteListComponent } from './have-seen/favorite-list/favorite-list.component';

import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';

import { MovieViewComponent } from './search/movie-view/movie-view.component';
import { MovieSearchComponent } from './search/movie-search/movie-search.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ToSeeComponent } from './to-see/to-see.component';
import { SharedComponent } from './shared/shared.component';
import { NoMovieComponent } from './search/no-movie/no-movie.component';
import { MovieComponent } from './shared/movie/movie.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HaveSeenComponent,
    SeenListComponent,
    MovieComponent,
    FavoriteListComponent,
    SearchComponent,
    NavbarComponent,
    MovieViewComponent,
    MovieSearchComponent,
    LoadingSpinnerComponent,
    MovieComponent,
    ToSeeComponent,
    SharedComponent,
    NoMovieComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
