import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDesktopNavbarComponent } from './shop-desktop-navbar.component';

describe('ShopDesktopNavbarComponent', () => {
  let component: ShopDesktopNavbarComponent;
  let fixture: ComponentFixture<ShopDesktopNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopDesktopNavbarComponent]
    });
    fixture = TestBed.createComponent(ShopDesktopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
