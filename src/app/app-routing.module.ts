import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import {LoaderComponent} from "./components/loader/loader.component";

const routes: Routes = [
  { path: 'users', component: TableComponent },
  { path: 'realty', component: LoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
