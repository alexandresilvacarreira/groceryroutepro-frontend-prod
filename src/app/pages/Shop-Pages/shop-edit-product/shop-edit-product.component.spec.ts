import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEditProductComponent } from './shop-edit-product.component';

describe('ShopEditProductComponent', () => {
  let component: ShopEditProductComponent;
  let fixture: ComponentFixture<ShopEditProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopEditProductComponent]
    });
    fixture = TestBed.createComponent(ShopEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
