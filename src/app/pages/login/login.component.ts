import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {catchError, mergeMap, switchMap, throwError} from "rxjs";

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute, private userService: UserService) {
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

    this.route.queryParams.subscribe(params => {
      if (params['error']) {
        // Redirect to the login error page
        this.router.navigate(['/error']);
      }
    });

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

      let email = emailInput.value;
      let password = passwordInput.value;

      this.authService.login(email, password).subscribe(serverResponse => {
        // TODO usar códigos http
        if (serverResponse.user) {
          //this.userService.setCurrentUser(serverResponse.user);
          this.router.navigate(['/dashboard']);
        } else {
          console.log("Erro ao autenticar");
          this.router.navigate(['/login'])
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
