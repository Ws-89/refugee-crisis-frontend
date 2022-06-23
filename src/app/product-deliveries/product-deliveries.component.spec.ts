import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveriesComponent } from './product-deliveries.component';

describe('ProductDeliveriesComponent', () => {
  let component: ProductDeliveriesComponent;
  let fixture: ComponentFixture<ProductDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliveriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
