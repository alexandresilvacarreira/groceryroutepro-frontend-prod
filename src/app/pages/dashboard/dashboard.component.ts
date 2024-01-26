import {Component, OnInit} from '@angular/core';
import {ShoppingList, User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {catchError, lastValueFrom, throwError} from "rxjs";
import {isUser} from "../../utils";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  shoppingList!:ShoppingList;

  constructor(private userService: UserService, private router: Router, private shoppingListService : ShoppingListService) {
  }

  ngOnInit(): void {

    this.shoppingListService.shoppingList.subscribe(list => {
      if (list) {
        this.shoppingList = list;
      }
    })
  }

  protected readonly faCirclePlus = faCirclePlus;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faCoins = faCoins;
}
