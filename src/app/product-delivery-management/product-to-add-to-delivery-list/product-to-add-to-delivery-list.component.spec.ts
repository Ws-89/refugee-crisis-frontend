import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToAddToDeliveryListComponent } from './product-to-add-to-delivery-list.component';

describe('ProductListDialogComponent', () => {
  let component: ProductToAddToDeliveryListComponent;
  let fixture: ComponentFixture<ProductToAddToDeliveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductToAddToDeliveryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToAddToDeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
