import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosGoogleComponent } from './libros-google.component';

describe('LibrosGoogleComponent', () => {
  let component: LibrosGoogleComponent;
  let fixture: ComponentFixture<LibrosGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
