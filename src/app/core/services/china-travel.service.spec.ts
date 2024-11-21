import { TestBed } from '@angular/core/testing';

import { ChinaTravelService } from './china-travel.service';

describe('ChinaTravelService', () => {
  let service: ChinaTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChinaTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
