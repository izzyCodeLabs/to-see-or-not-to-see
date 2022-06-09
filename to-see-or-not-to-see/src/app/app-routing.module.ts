import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaveSeenComponent } from './have-seen/have-seen.component';
import { SearchComponent } from './search/search.component';
import { ToSeeComponent } from './to-see/to-see.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/have-seen', pathMatch: 'full' },
  { path: 'have-seen', component: HaveSeenComponent },
  { path: 'search', component: SearchComponent },
  { path: 'upcoming', component: ToSeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
