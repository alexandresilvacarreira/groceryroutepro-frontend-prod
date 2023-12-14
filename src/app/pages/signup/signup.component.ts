import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showPassword = false;
  showPasswordConfirm = false;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  toggleShowPassword(confirm = false) {
    if (!confirm) {
      this.showPassword ? this.showPassword = false : this.showPassword = true;
    } else {
      this.showPasswordConfirm ? this.showPasswordConfirm = false : this.showPasswordConfirm = true;
    }
  }


  protected readonly faEye = faEye;
  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faArrowRightToBracket = faArrowRightToBracket;
  protected readonly faEyeSlash = faEyeSlash;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/)
      ]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {mismatch: true};
  }

}
