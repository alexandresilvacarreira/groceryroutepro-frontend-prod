import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEditFilterComponent } from './shop-edit-filter.component';

describe('ShopEditFilterComponent', () => {
  let component: ShopEditFilterComponent;
  let fixture: ComponentFixture<ShopEditFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopEditFilterComponent]
    });
    fixture = TestBed.createComponent(ShopEditFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
