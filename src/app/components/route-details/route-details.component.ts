import { Component } from '@angular/core';
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faCar} from "@fortawesome/free-solid-svg-icons/faCar";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent {

  protected readonly faRoute = faRoute;
  protected readonly faLocationArrow = faLocationArrow;
  protected readonly faCoins = faCoins;
  protected readonly faCar = faCar;
  protected readonly faPiggyBank = faPiggyBank;
  protected readonly faStopwatch = faStopwatch;
}
