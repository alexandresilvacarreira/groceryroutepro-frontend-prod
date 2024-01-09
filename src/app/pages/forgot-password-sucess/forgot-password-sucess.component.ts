import { Component } from '@angular/core';
import {fadeAnimation} from "../../animations";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-forgot-password-sucess',
  templateUrl: './forgot-password-sucess.component.html',
  styleUrls: ['./forgot-password-sucess.component.scss'],
  animations: [fadeAnimation]
})
export class ForgotPasswordSucessComponent {
  constructor() {
  }



  ngOnInit(): void {
  }


  protected readonly faArrowLeft = faArrowLeft;
}

