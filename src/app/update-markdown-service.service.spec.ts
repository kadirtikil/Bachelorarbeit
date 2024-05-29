import { TestBed } from '@angular/core/testing';

import { UpdateMarkdownServiceService } from './update-markdown-service.service';

describe('UpdateMarkdownServiceService', () => {
  let service: UpdateMarkdownServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMarkdownServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
