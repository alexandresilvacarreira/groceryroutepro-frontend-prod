import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMainCardComponent } from './route-main-card.component';

describe('RouteMainCardComponent', () => {
  let component: RouteMainCardComponent;
  let fixture: ComponentFixture<RouteMainCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteMainCardComponent]
    });
    fixture = TestBed.createComponent(RouteMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
