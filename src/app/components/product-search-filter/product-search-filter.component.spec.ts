import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchFilterComponent } from './product-search-filter.component';

describe('ProductSearchFilterComponent', () => {
  let component: ProductSearchFilterComponent;
  let fixture: ComponentFixture<ProductSearchFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSearchFilterComponent]
    });
    fixture = TestBed.createComponent(ProductSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
