import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHeaderDashboardComponent } from './shop-header-dashboard.component';

describe('ShopHeaderDashboardComponent', () => {
  let component: ShopHeaderDashboardComponent;
  let fixture: ComponentFixture<ShopHeaderDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopHeaderDashboardComponent]
    });
    fixture = TestBed.createComponent(ShopHeaderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
