import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveryListComponent } from './product-delivery-list.component';

describe('ProductDeliveryListComponent', () => {
  let component: ProductDeliveryListComponent;
  let fixture: ComponentFixture<ProductDeliveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliveryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
