import {Component, NgModule} from '@angular/core';
import {faCircle} from "@fortawesome/free-regular-svg-icons/faCircle";
import {range} from "rxjs";
import {faCheck} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],

})
export class HistoryComponent {

  protected readonly faCircle = faCircle;
  protected readonly range = range;

  protected readonly faCheck = faCheck;
}
