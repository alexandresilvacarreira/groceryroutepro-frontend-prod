import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-shop-navbar',
  templateUrl: './shop-navbar.component.html',
  styleUrls: ['./shop-navbar.component.scss']
})
export class ShopNavbarComponent {

    protected readonly faSearch = faSearch;
    protected readonly faCartShopping = faCartShopping;
    protected readonly faRoute = faRoute;
    protected readonly faUser = faUser;
  protected readonly faCartPlus = faCartPlus;
  protected readonly faPenToSquare = faPenToSquare;
}
