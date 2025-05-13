import { TestBed } from '@angular/core/testing';

import { HeadlessFormkitService } from './headless-formkit.service';

describe('HeadlessFormkitService', () => {
  let service: HeadlessFormkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadlessFormkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
