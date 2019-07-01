import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosMookComponent } from './libros-mook.component';

describe('LibrosMookComponent', () => {
  let component: LibrosMookComponent;
  let fixture: ComponentFixture<LibrosMookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosMookComponent ]
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
