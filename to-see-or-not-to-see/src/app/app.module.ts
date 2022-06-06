import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieViewComponent } from './search/movie-view/movie-view.component';
import { MovieSearchComponent } from './search/movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieViewComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
