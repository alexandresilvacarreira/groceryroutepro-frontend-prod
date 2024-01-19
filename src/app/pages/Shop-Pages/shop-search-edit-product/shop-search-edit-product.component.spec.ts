import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSearchEditProductComponent } from './shop-search-edit-product.component';

describe('ShopSearchEditProductComponent', () => {
  let component: ShopSearchEditProductComponent;
  let fixture: ComponentFixture<ShopSearchEditProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopSearchEditProductComponent]
    });
    fixture = TestBed.createComponent(ShopSearchEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
