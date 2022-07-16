import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportSpecificationDialogComponent } from './add-transport-specification-dialog.component';

describe('AddTransportSpecificationDialogComponent', () => {
  let component: AddTransportSpecificationDialogComponent;
  let fixture: ComponentFixture<AddTransportSpecificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransportSpecificationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransportSpecificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
