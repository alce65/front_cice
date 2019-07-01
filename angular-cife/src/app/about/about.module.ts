import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    NgbModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
