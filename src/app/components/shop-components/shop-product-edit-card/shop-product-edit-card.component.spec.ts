import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductEditCardComponent } from './shop-product-edit-card.component';

describe('ShopProductEditCardComponent', () => {
  let component: ShopProductEditCardComponent;
  let fixture: ComponentFixture<ShopProductEditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopProductEditCardComponent]
    });
    fixture = TestBed.createComponent(ShopProductEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
