import { TestBed } from '@angular/core/testing';

import { GunshowsService } from './gunshows.service';

describe('GunshowsService', () => {
  let service: GunshowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GunshowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
