import { Component } from '@angular/core';
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {faUserGear} from "@fortawesome/free-solid-svg-icons/faUserGear";

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {

    protected readonly faArrowRightFromBracket = faArrowRightFromBracket;
    protected readonly faUserGear = faUserGear;
}
