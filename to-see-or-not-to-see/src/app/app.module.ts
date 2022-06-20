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
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

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
    AuthComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
