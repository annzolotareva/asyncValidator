import { TestBed } from '@angular/core/testing';

import { ValidServiceService } from './valid-service.service';

describe('ValidServiceService', () => {
  let service: ValidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
