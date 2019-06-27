import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPostComponent } from './nuevo-post.component';
import { FormsModule } from '@angular/forms';

describe('NuevoPostComponent', () => {
  let component: NuevoPostComponent;
  let fixture: ComponentFixture<NuevoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPostComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
