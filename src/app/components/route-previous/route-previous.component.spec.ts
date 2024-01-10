import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePreviousComponent } from './route-previous.component';

describe('RoutePreviousComponent', () => {
  let component: RoutePreviousComponent;
  let fixture: ComponentFixture<RoutePreviousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutePreviousComponent]
    });
    fixture = TestBed.createComponent(RoutePreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
