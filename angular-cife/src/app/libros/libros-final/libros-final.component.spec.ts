import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosFinalComponent } from './libros-final.component';

describe('LibrosFinalComponent', () => {
  let component: LibrosFinalComponent;
  let fixture: ComponentFixture<LibrosFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
