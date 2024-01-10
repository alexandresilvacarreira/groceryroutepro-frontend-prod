import { Component } from '@angular/core';
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft";
import {faCircleArrowRight} from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent {

  protected readonly faCalendar = faCalendar;
  protected readonly faCircleArrowLeft = faCircleArrowLeft;
  protected readonly faCircleArrowRight = faCircleArrowRight;
}
