import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {slideAnimationTabMenu} from "../../animations";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {ShoppingList} from "../../interfaces";

@Component({
  selector: 'app-tab-menu-shopping-list',
  templateUrl: './tab-menu-shopping-list.component.html',
  styleUrls: ['./tab-menu-shopping-list.component.scss'],
  animations: [slideAnimationTabMenu]
})
export class TabMenuShoppingListComponent {

  activeTab: string = 'tab1';
  @Input() shoppingList?: ShoppingList;
  @Output() updateShoppingList = new EventEmitter<ShoppingList>;

  onTabClick(tab: string) {
    this.activeTab = tab;
  }

  protected readonly faCoins = faCoins;

  refreshShoppingList(shoppingListEvent: ShoppingList) {
    this.updateShoppingList.emit(shoppingListEvent);
  }

}
