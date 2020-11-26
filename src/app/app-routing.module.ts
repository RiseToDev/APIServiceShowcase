import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { RealtyComponent } from './pages/realty/realty.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'realty', component: RealtyComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
