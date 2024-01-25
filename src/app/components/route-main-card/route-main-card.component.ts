import { Component } from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";

@Component({
  selector: 'app-route-main-card',
  templateUrl: './route-main-card.component.html',
  styleUrls: ['./route-main-card.component.scss']
})
export class RouteMainCardComponent {

  protected readonly faCoins = faCoins;
}
