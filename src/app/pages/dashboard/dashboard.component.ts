import {Component, OnInit} from '@angular/core';
import {RouteObject, ShoppingList, User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {catchError, lastValueFrom, throwError} from "rxjs";
import {isUser} from "../../utils";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {ShoppingListService} from "../../services/shopping-list.service";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {GoogleApiService} from "../../services/google-api.service";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  shoppingList!:ShoppingList;

  routes?: RouteObject[];
  cheapestRoute?: RouteObject;
  fastestRoute?: RouteObject;
  savings?: number;
  showToast = false;
  toastMessage = "";
  previousRoute = '';

  constructor(private userService: UserService, private router: Router,
              private shoppingListService : ShoppingListService,
              private googleApiService: GoogleApiService,
              private navigationService: NavigationService
  ) {
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
    protected readonly faRoute = faRoute;
}
