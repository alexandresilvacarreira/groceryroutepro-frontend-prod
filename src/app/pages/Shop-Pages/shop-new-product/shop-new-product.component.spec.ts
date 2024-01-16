import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNewProductComponent } from './shop-new-product.component';

describe('ShopNewProductComponent', () => {
  let component: ShopNewProductComponent;
  let fixture: ComponentFixture<ShopNewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopNewProductComponent]
    });
    fixture = TestBed.createComponent(ShopNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
