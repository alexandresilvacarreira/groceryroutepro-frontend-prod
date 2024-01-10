import { Component } from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faCar} from "@fortawesome/free-solid-svg-icons/faCar";
import {faCheck, faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faShop} from "@fortawesome/free-solid-svg-icons/faShop";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";

@Component({
  selector: 'app-route-suggestions',
  templateUrl: './route-suggestions.component.html',
  styleUrls: ['./route-suggestions.component.scss']
})
export class RouteSuggestionsComponent {

    protected readonly faCoins = faCoins;
    protected readonly faRoute = faRoute;
    protected readonly faCar = faCar;
    protected readonly faPiggyBank = faPiggyBank;
    protected readonly faStopwatch = faStopwatch;
    protected readonly faShop = faShop;
    protected readonly faLocationArrow = faLocationArrow;
  protected readonly faCheck = faCheck;
}
