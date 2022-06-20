import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HaveSeenComponent } from './have-seen/have-seen.component';
import { MovieViewComponent } from './search/movie-view/movie-view.component';
import { NoMovieComponent } from './search/no-movie/no-movie.component';
import { SearchComponent } from './search/search.component';
import { ToSeeComponent } from './to-see/to-see.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/have-seen', pathMatch: 'full' },
  { path: 'have-seen', component: HaveSeenComponent, canActivate: [AuthGuard] },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      { path: '', component: NoMovieComponent },
      { path: ':id', component: MovieViewComponent },
    ],
    canActivate: [AuthGuard],
  },
  { path: 'upcoming', component: ToSeeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
