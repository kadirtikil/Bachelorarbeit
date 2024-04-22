import { TestBed } from '@angular/core/testing';

import { DistributedSystemsService } from './distributed-systems.service';

describe('DistributedSystemsService', () => {
  let service: DistributedSystemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributedSystemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
