import {Component, OnInit} from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {ShoppingList} from "../../interfaces";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {

  shoppingList!: ShoppingList;
  protected readonly faCoins = faCoins;

  constructor(private shoppingListService : ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListService.shoppingList.subscribe(list => {
      if (list)
        this.shoppingList = list;
    })
  }

  protected readonly faCartShopping = faCartShopping;
  protected readonly faCirclePlus = faCirclePlus;
}
