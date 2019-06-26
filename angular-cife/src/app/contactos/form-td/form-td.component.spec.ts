import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTdComponent } from './form-td.component';

describe('FormTdComponent', () => {
  let component: FormTdComponent;
  let fixture: ComponentFixture<FormTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
