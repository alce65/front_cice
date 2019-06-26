import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaBlogComponent } from './lista-blog/lista-blog.component';

const routes: Routes = [
  { path: '', component: ListaBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
