import { Component } from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";

@Component({
  selector: 'app-route-main-card',
  templateUrl: './route-main-card.component.html',
  styleUrls: ['./route-main-card.component.scss']
})
export class RouteMainCardComponent {

  showMap=true;

  protected readonly faCoins = faCoins;
  protected readonly faRoute = faRoute;
  protected readonly faPiggyBank = faPiggyBank;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faLocationArrow = faLocationArrow;
}
