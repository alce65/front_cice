import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludarComponent } from './saludar/saludar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    SaludarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
