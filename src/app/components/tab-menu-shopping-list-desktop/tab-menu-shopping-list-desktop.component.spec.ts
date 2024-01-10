import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuShoppingListDesktopComponent } from './tab-menu-shopping-list-desktop.component';

describe('TabMenuShoppingListDesktopComponent', () => {
  let component: TabMenuShoppingListDesktopComponent;
  let fixture: ComponentFixture<TabMenuShoppingListDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabMenuShoppingListDesktopComponent]
    });
    fixture = TestBed.createComponent(TabMenuShoppingListDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
