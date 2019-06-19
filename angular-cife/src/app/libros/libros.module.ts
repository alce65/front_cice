import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';

@NgModule({
  declarations: [LibrosComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
