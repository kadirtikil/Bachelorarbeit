import { TestBed } from '@angular/core/testing';

import { CheckAuthForMarkdownEditService } from './check-auth-for-markdown-edit.service';

describe('CheckAuthForMarkdownEditService', () => {
  let service: CheckAuthForMarkdownEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAuthForMarkdownEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
