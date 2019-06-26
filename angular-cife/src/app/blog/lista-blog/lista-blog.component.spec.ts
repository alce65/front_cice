import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBlogComponent } from './lista-blog.component';

describe('ListaBlogComponent', () => {
  let component: ListaBlogComponent;
  let fixture: ComponentFixture<ListaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
