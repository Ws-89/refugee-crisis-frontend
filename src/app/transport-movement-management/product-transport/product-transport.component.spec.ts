import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTransportComponent } from './product-transport.component';

describe('ProductTransportComponent', () => {
  let component: ProductTransportComponent;
  let fixture: ComponentFixture<ProductTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
