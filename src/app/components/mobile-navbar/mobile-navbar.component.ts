import { Component } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent {

  protected readonly faUser = faUser;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faSearch = faSearch;
  protected readonly faRoute = faRoute;
}
