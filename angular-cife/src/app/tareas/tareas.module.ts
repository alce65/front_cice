import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [TareasComponent, ListaSimpleComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
