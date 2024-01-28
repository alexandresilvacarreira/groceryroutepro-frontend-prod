import { Component } from '@angular/core';
import {fadeAnimation} from "../../animations";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-forgot-password-sucess',
  templateUrl: './forgot-password-sucess.component.html',
  styleUrls: ['./forgot-password-sucess.component.scss'],
  animations: [fadeAnimation]
})
export class ForgotPasswordSucessComponent {
  protected readonly faArrowLeft = faArrowLeft;
}

