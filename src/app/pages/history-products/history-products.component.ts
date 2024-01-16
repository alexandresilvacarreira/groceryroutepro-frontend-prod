import { Component } from '@angular/core';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";

@Component({
  selector: 'app-history-products',
  templateUrl: './history-products.component.html',
  styleUrls: ['./history-products.component.scss']
})
export class HistoryProductsComponent {

    protected readonly faArrowLeft = faArrowLeft;
  protected readonly faCalendar = faCalendar;
}
