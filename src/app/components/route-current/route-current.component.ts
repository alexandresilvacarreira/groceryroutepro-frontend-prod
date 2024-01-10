import { Component } from '@angular/core';
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faCheck, faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {faCar} from "@fortawesome/free-solid-svg-icons/faCar";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faShop} from "@fortawesome/free-solid-svg-icons/faShop";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";

@Component({
  selector: 'app-route-current',
  templateUrl: './route-current.component.html',
  styleUrls: ['./route-current.component.scss']
})
export class RouteCurrentComponent {

  protected readonly faLocationArrow = faLocationArrow;
  protected readonly faCoins = faCoins;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faPiggyBank = faPiggyBank;
  protected readonly faCar = faCar;
  protected readonly faRoute = faRoute;
  protected readonly faShop = faShop;
  protected readonly faCheck = faCheck;
  protected readonly faTrashCan = faTrashCan;
}
