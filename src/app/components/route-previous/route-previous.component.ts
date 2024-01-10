import { Component } from '@angular/core';
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";
import {faClockRotateLeft} from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import {faLocationPin} from "@fortawesome/free-solid-svg-icons/faLocationPin";

@Component({
  selector: 'app-route-previous',
  templateUrl: './route-previous.component.html',
  styleUrls: ['./route-previous.component.scss']
})
export class RoutePreviousComponent {

    protected readonly faRoute = faRoute;
  protected readonly faCoins = faCoins;
  protected readonly faCalendar = faCalendar;
  protected readonly faClockRotateLeft = faClockRotateLeft;
  protected readonly faLocationPin = faLocationPin;
}
