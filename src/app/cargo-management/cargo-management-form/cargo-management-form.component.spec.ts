import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoManagementFormComponent } from './cargo-management-form.component';

describe('CargoManagementFormComponent', () => {
  let component: CargoManagementFormComponent;
  let fixture: ComponentFixture<CargoManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoManagementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
