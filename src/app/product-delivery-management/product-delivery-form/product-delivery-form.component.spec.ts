import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveryFormComponent } from './product-delivery-form.component';

describe('ProductDeliveriesComponent', () => {
  let component: ProductDeliveryFormComponent;
  let fixture: ComponentFixture<ProductDeliveryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliveryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeliveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
