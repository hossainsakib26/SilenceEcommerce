import { TestBed } from '@angular/core/testing';

import { CommonPagesService } from './common-pages.service';

describe('CommonFrontsService', () => {
  let service: CommonPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
