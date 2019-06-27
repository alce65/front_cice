import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTdComponent } from './form-td.component';
import { FormsModule } from '@angular/forms';

describe('FormTdComponent', () => {
  let component: FormTdComponent;
  let fixture: ComponentFixture<FormTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTdComponent ],
      imports: [FormsModule]
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
