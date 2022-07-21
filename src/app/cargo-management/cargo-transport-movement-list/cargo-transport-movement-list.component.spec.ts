import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTransportMovementListComponent } from './cargo-transport-movement-list.component';

describe('CargoTransportMovementListComponent', () => {
  let component: CargoTransportMovementListComponent;
  let fixture: ComponentFixture<CargoTransportMovementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoTransportMovementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoTransportMovementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
