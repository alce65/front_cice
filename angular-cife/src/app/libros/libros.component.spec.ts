import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrosComponent } from './libros.component';
import { LibrosMookComponent } from './libros-mook/libros-mook.component';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { LibrosFinalComponent } from './libros-final/libros-final.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LibrosComponent', () => {
  let component: LibrosComponent;
  let fixture: ComponentFixture<LibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibrosComponent,
        LibrosMookComponent,
        LibrosGoogleComponent,
        LibrosFinalComponent
       ],
       imports: [
        FormsModule,
        HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
