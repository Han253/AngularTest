import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Author/add/add.component';
import { DeleteComponent } from './Author/delete/delete.component';
import { DetailComponent } from './Author/detail/detail.component';
import { ListComponent } from './Author/list/list.component';
import { UpdateComponent } from './Author/update/update.component';

const routes: Routes = [
  {    path: '', component:ListComponent},
  {    path: 'detail/:id', component:DetailComponent},
  {    path: 'new', component:AddComponent},
  {    path: 'update/:id', component:UpdateComponent},
  {    path: 'delete/:id', component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
