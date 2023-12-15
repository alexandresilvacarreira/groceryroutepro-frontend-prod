import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth.service";
import {Login, Signup} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate("200ms ease-in-out"),
      ]),
      transition(':leave', [
        animate("800ms ease-out", style({opacity: 0})),
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit {


  showPassword = false;
  showPasswordConfirm = false;
  form!: FormGroup;
  showMessage = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  login() {

    let emailInput = this.form.get("email");
    let passwordInput = this.form.get("password");

    if (emailInput?.valid && passwordInput?.valid) {

      let login: Login = {
        email: emailInput.value,
        password: passwordInput.value
      }

      this.authService.login(login).subscribe(serverMessage => {
        if (serverMessage.success) {
          this.router.navigate(['/dashboard'])
        } else {
          this.router.navigate(['/error'])
        }
      })

    } else {

      emailInput?.markAsTouched();
      emailInput?.markAsDirty();
      passwordInput?.markAsTouched();
      passwordInput?.markAsDirty();

      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    }


  }

}
