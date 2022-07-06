import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportMovementFormComponent } from './transport-movement-form.component';

describe('TransportMovementFormComponent', () => {
  let component: TransportMovementFormComponent;
  let fixture: ComponentFixture<TransportMovementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportMovementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportMovementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
