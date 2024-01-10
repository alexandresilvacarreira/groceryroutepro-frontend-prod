import {Component} from '@angular/core';

import {faChartLine} from "@fortawesome/free-solid-svg-icons/faChartLine";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faSquare} from "@fortawesome/free-solid-svg-icons/faSquare";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
  protected readonly faChartLine = faChartLine;
  protected readonly faRoute = faRoute;
  protected readonly faCartPlus = faCartPlus;
}
