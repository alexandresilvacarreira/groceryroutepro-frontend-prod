import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNotificationsComponent } from './shop-notifications.component';

describe('ShopNotificationsComponent', () => {
  let component: ShopNotificationsComponent;
  let fixture: ComponentFixture<ShopNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopNotificationsComponent]
    });
    fixture = TestBed.createComponent(ShopNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
