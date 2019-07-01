import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMookComponent } from './libros-mook/libros-mook.component';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { HttpClientModule } from '@angular/common/http';
import { LibrosFinalComponent } from './libros-final/libros-final.component';


@NgModule({
  declarations: [LibrosComponent, LibrosMookComponent, LibrosGoogleComponent, LibrosFinalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
