import { Component } from '@angular/core';
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-history-routes',
  templateUrl: './history-routes.component.html',
  styleUrls: ['./history-routes.component.scss']
})
export class HistoryRoutesComponent {

  protected readonly faCalendar = faCalendar;
  protected readonly faArrowLeft = faArrowLeft;
}
