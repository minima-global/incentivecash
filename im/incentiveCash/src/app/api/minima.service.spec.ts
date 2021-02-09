import { TestBed } from '@angular/core/testing';

import { MinimaService } from './minima.service';

describe('MinimaService', () => {
  let service: MinimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
