import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  { path: 'users', component: TableComponent },
  { path: 'users2', component: TableComponent },
  { path: 'users3', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
