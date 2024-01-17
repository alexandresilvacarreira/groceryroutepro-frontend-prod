import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceComparisonComponent } from './product-price-comparison.component';

describe('ProductPriceComparisonComponent', () => {
  let component: ProductPriceComparisonComponent;
  let fixture: ComponentFixture<ProductPriceComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPriceComparisonComponent]
    });
    fixture = TestBed.createComponent(ProductPriceComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
