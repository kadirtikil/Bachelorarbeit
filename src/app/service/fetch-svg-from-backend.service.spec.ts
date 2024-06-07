import { TestBed } from '@angular/core/testing';

import { FetchSvgFromBackendService } from './fetch-svg-from-backend.service';

describe('FetchSvgFromBackendService', () => {
  let service: FetchSvgFromBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSvgFromBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
