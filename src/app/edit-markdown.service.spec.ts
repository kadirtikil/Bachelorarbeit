import { TestBed } from '@angular/core/testing';

import { EditMarkdownService } from './edit-markdown.service';

describe('EditMarkdownService', () => {
  let service: EditMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
