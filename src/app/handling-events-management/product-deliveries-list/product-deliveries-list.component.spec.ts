import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveriesListComponent } from './product-deliveries-list.component';

describe('ProductDeliveriesListComponent', () => {
  let component: ProductDeliveriesListComponent;
  let fixture: ComponentFixture<ProductDeliveriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliveriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeliveriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
