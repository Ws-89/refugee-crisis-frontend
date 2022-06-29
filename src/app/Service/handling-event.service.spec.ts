import { TestBed } from '@angular/core/testing';

import { HandlingEventService } from './handling-event.service';

describe('HandlingEventService', () => {
  let service: HandlingEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlingEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
