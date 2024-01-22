import {Component, OnInit} from '@angular/core';
import {ShoppingList, User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {isUser} from "../../utils";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  shoppingList!:ShoppingList;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user=>{
      if (isUser(user)){
        this.shoppingList = user.currentShoppingList;
      }
    })
  }

  protected readonly faCirclePlus = faCirclePlus;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faCoins = faCoins;
}
