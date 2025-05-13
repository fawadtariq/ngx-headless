import { TestBed } from '@angular/core/testing';

import { HeadlessUiService } from './headless-ui.service';

describe('HeadlessUiService', () => {
  let service: HeadlessUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadlessUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
