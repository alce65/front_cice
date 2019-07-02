import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosMookComponent } from './libros-mook.component';
import { FormsModule } from '@angular/forms';

describe('LibrosMookComponent', () => {
  let component: LibrosMookComponent;
  let fixture: ComponentFixture<LibrosMookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosMookComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosMookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
