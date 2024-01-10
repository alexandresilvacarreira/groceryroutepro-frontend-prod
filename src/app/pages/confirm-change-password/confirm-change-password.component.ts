import { Component } from '@angular/core';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-confirm-change-password',
  templateUrl: './confirm-change-password.component.html',
  styleUrls: ['./confirm-change-password.component.scss']
})
export class ConfirmChangePasswordComponent {

    protected readonly faArrowLeft = faArrowLeft;
}
