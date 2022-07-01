import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportMovementListComponent } from './transport-movement-list.component';

describe('TransportMovementListComponent', () => {
  let component: TransportMovementListComponent;
  let fixture: ComponentFixture<TransportMovementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportMovementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportMovementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
