import { TestBed } from '@angular/core/testing';

import { ApiPagesService } from './api-pages.service';

describe('ApiPagesService', () => {
  let service: ApiPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
