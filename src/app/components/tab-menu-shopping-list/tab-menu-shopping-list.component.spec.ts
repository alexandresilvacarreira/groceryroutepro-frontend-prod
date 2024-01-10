import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuShoppingListComponent } from './tab-menu-shopping-list.component';

describe('TabMenuShoppingListComponent', () => {
  let component: TabMenuShoppingListComponent;
  let fixture: ComponentFixture<TabMenuShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabMenuShoppingListComponent]
    });
    fixture = TestBed.createComponent(TabMenuShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
