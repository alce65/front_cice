import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { ListaBlogComponent } from './lista-blog/lista-blog.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    ListaBlogComponent,
    NuevoPostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
