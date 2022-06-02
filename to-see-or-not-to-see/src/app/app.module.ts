import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HaveSeenComponent } from './have-seen/have-seen.component';
import { SeenListComponent } from './have-seen/seen-list/seen-list.component';
import { MovieComponent } from './movie/movie.component';
import { FavoriteListComponent } from './have-seen/favorite-list/favorite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HaveSeenComponent,
    SeenListComponent,
    MovieComponent,
    FavoriteListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
