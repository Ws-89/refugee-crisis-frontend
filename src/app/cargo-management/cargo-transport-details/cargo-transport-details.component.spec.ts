import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTransportDetailsComponent } from './cargo-transport-details.component';

describe('CargoTransportDetailsComponent', () => {
  let component: CargoTransportDetailsComponent;
  let fixture: ComponentFixture<CargoTransportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoTransportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoTransportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
