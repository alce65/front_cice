import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SaludarComponent } from './saludar.component';
import { FormsModule } from '@angular/forms';

describe('SaludarComponent', () => {
  let component: SaludarComponent;
  let fixture: ComponentFixture<SaludarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludarComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
