import { TestBed } from '@angular/core/testing';

import { CargoActivityManagementService } from './cargo-activity-management.service';

describe('CargoActivityManagementService', () => {
  let service: CargoActivityManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoActivityManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
