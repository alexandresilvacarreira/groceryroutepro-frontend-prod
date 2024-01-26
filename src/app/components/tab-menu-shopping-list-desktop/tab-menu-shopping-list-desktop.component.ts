import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {ShoppingList} from "../../interfaces";

@Component({
  selector: 'app-tab-menu-shopping-list-desktop',
  templateUrl: './tab-menu-shopping-list-desktop.component.html',
  styleUrls: ['./tab-menu-shopping-list-desktop.component.scss']
})
export class TabMenuShoppingListDesktopComponent {

  protected readonly faCoins = faCoins;
  protected readonly faCirclePlus = faCirclePlus;

  @Input() shoppingList?: ShoppingList;


}
