import { Component } from '@angular/core';
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {faUserGear} from "@fortawesome/free-solid-svg-icons/faUserGear";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header-subpage',
  templateUrl: './header-subpage.component.html',
  styleUrls: ['./header-subpage.component.scss']
})
export class HeaderSubpageComponent {

    protected readonly faArrowRightFromBracket = faArrowRightFromBracket;
    protected readonly faUserGear = faUserGear;
  protected readonly faArrowLeft = faArrowLeft;
}
