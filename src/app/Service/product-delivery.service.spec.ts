import { TestBed } from '@angular/core/testing';

import { ProductDeliveryService } from './product-delivery.service';

describe('ProductDeliveryService', () => {
  let service: ProductDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
