import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTouchComponent } from './datepicker-touch.component';

describe('DatepickerTouchComponent', () => {
  let component: DatepickerTouchComponent;
  let fixture: ComponentFixture<DatepickerTouchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerTouchComponent]
    });
    fixture = TestBed.createComponent(DatepickerTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
