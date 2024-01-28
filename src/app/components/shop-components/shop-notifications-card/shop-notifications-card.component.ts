import { Component } from '@angular/core';
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";

@Component({
  selector: 'app-shop-notifications-card',
  templateUrl: './shop-notifications-card.component.html',
  styleUrls: ['./shop-notifications-card.component.scss']
})
export class ShopNotificationsCardComponent {

  protected readonly faBell = faBell;
  protected readonly faCircleCheck = faCircleCheck;

}
