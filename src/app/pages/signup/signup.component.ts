import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  showPassword = false;
  showPasswordConfirm = false;

  constructor(private formBuilder: FormBuilder) {
  }

  toggleShowPassword(confirm = false){
    if (!confirm){
      this.showPassword ? this.showPassword = false : this.showPassword = true;
    } else {
      this.showPasswordConfirm ? this.showPasswordConfirm = false : this.showPasswordConfirm = true;
    }
  }


  protected readonly faEye = faEye;
  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faArrowRightToBracket = faArrowRightToBracket;
  protected readonly faEyeSlash = faEyeSlash;
}
