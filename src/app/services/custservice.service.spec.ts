import { TestBed } from '@angular/core/testing';

import { CustserviceService } from './custservice.service';

describe('CustserviceService', () => {
  let service: CustserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
