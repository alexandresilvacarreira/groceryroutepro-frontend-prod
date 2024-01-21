import {Component, Input, OnInit} from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {ShoppingList} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {BehaviorSubject, catchError, throwError} from "rxjs";
import {isUser} from "../../utils";
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

    this.shoppingListService.getShoppingList()
      .pipe(catchError(err => {
        console.error(err);
        return throwError(() => err);
      }))
      .subscribe(shoppingListResponse => {
        this.shoppingList = shoppingListResponse.data.shoppingList;
      });

  }

  refreshList(updatedList:ShoppingList){
    this.shoppingList = updatedList;
  }

  protected readonly faCartShopping = faCartShopping;
  protected readonly faCirclePlus = faCirclePlus;
}
