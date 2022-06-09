import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HaveSeenComponent } from './have-seen/have-seen.component';
import { SeenListComponent } from './have-seen/seen-list/seen-list.component';
import { MovieComponent } from './movie/movie.component';
import { FavoriteListComponent } from './have-seen/favorite-list/favorite-list.component';

import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieViewComponent } from './search/movie-view/movie-view.component';
import { MovieSearchComponent } from './search/movie-search/movie-search.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ToSeeComponent } from './to-see/to-see.component';
import { SharedComponent } from './shared/shared.component';

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
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
