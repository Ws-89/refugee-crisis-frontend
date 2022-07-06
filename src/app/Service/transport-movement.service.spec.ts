import { TestBed } from '@angular/core/testing';

import { TransportMovementService } from './transport-movement.service';

describe('TransportMovementService', () => {
  let service: TransportMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
