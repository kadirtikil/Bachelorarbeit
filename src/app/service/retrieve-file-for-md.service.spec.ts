import { TestBed } from '@angular/core/testing';

import { RetrieveFileForMDService } from './retrieve-file-for-md.service';

describe('RetrieveFileForMDService', () => {
  let service: RetrieveFileForMDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveFileForMDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
