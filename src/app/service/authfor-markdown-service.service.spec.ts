import { TestBed } from '@angular/core/testing';

import { AuthforMarkdownServiceService } from './authfor-markdown-service.service';

describe('AuthforMarkdownServiceService', () => {
  let service: AuthforMarkdownServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthforMarkdownServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
