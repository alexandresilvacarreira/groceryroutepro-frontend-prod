import { Component } from '@angular/core';
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";
import {faClockRotateLeft} from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import {faLocationPin} from "@fortawesome/free-solid-svg-icons/faLocationPin";

@Component({
  selector: 'app-history-route-summary-card',
  templateUrl: './history-route-summary-card.component.html',
  styleUrls: ['./history-route-summary-card.component.scss']
})
export class HistoryRouteSummaryCardComponent {

  protected readonly faCalendar = faCalendar;
  protected readonly faCoins = faCoins;
  protected readonly faRoute = faRoute;
  protected readonly faCircle = faCircle;
  protected readonly faClockRotateLeft = faClockRotateLeft;
  protected readonly faLocationPin = faLocationPin;
}
