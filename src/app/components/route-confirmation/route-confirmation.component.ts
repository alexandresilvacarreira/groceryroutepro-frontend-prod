import { Component } from '@angular/core';
import {faCheck, faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faCar} from "@fortawesome/free-solid-svg-icons/faCar";
import {faShop} from "@fortawesome/free-solid-svg-icons/faShop";

@Component({
  selector: 'app-route-confirmation',
  templateUrl: './route-confirmation.component.html',
  styleUrls: ['./route-confirmation.component.scss']
})
export class RouteConfirmationComponent {

  protected readonly faCheck = faCheck;
  protected readonly faRoute = faRoute;
  protected readonly faLocationArrow = faLocationArrow;
  protected readonly faCoins = faCoins;
  protected readonly faPiggyBank = faPiggyBank;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faCar = faCar;
  protected readonly faShop = faShop;
}
