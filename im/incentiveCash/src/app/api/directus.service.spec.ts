import { TestBed } from '@angular/core/testing';

import { DirectusService } from './directus.service';

describe('DirectusService', () => {
  let service: DirectusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
