import {Component, Input} from '@angular/core';
import {faUserGear} from "@fortawesome/free-solid-svg-icons/faUserGear";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {User} from "../../interfaces";

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent {

  protected readonly faUserGear = faUserGear;
  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;
  @Input() user?:User;

}
