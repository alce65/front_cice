import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
});
