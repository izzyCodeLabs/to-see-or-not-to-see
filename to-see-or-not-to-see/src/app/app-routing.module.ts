import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/have-seen', pathMatch: 'full' },
  { path: 'have-seen', component: HaveSeenComponent },
  { path: 'search', component: SearchComponent },
  { path: 'to-see', component: MovieshelfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
