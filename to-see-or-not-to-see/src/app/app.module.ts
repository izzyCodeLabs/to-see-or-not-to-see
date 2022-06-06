import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MovieComponent } from './movie/movie.component';
import { ToSeeComponent } from './to-see/to-see.component';


@NgModule({
  declarations: [
    AppComponent,

    MovieComponent,
    ToSeeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  imports: [BrowserModule]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
