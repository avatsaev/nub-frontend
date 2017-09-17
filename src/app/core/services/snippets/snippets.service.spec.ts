import { TestBed, inject } from '@angular/core/testing';

import { SnippetsService } from './snippets.service';

describe('SnippetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnippetsService]
    });
  });

  it('should be created', inject([SnippetsService], (service: SnippetsService) => {
    expect(service).toBeTruthy();
  }));
});
