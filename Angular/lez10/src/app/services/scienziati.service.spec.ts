import { TestBed } from '@angular/core/testing';

import { ScienziatiService } from './scienziati.service';

describe('ScienziatiService', () => {
  let service: ScienziatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScienziatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
