import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCurrentComponent } from './route-current.component';

describe('RouteCurrentComponent', () => {
  let component: RouteCurrentComponent;
  let fixture: ComponentFixture<RouteCurrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteCurrentComponent]
    });
    fixture = TestBed.createComponent(RouteCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
