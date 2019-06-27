import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBlogComponent } from './lista-blog.component';
import { NuevoPostComponent } from '../nuevo-post/nuevo-post.component';
import { PostComponent } from '../post/post.component';
import { FormsModule } from '@angular/forms';

describe('ListaBlogComponent', () => {
  let component: ListaBlogComponent;
  let fixture: ComponentFixture<ListaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListaBlogComponent,
        NuevoPostComponent,
        PostComponent
       ],
       imports: [FormsModule]
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
