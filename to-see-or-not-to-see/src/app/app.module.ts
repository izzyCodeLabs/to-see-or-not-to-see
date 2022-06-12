import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MovieComponent } from './movie/movie.component';
import { ToSeeComponent } from './to-see/to-see.component';
import { SharedComponent } from './shared/shared.component';
import { HaventSeenComponent } from './havent-seen/havent-seen.component';


@NgModule({
  declarations: [
    AppComponent,

    MovieComponent,
    ToSeeComponent,
    SharedComponent,
    HaventSeenComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
