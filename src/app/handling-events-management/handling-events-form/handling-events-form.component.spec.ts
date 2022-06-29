import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingEventsFormComponent } from './handling-events-form.component';

describe('HandlingEventsFormComponent', () => {
  let component: HandlingEventsFormComponent;
  let fixture: ComponentFixture<HandlingEventsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingEventsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
