import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddressListComponent } from './delivery-address-list.component';

describe('DeliveryAddressListComponent', () => {
  let component: DeliveryAddressListComponent;
  let fixture: ComponentFixture<DeliveryAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAddressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
