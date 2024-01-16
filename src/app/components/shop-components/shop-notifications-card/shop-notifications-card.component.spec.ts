import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNotificationsCardComponent } from './shop-notifications-card.component';

describe('ShopNotificationsCardComponent', () => {
  let component: ShopNotificationsCardComponent;
  let fixture: ComponentFixture<ShopNotificationsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopNotificationsCardComponent]
    });
    fixture = TestBed.createComponent(ShopNotificationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
