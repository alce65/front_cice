import { TestBed } from '@angular/core/testing';

import { BooksMookService } from './books-mook.service';

describe('BooksMookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksMookService = TestBed.get(BooksMookService);
    expect(service).toBeTruthy();
  });
});
