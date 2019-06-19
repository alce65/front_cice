import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';

@NgModule({
  declarations: [TareasComponent],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
