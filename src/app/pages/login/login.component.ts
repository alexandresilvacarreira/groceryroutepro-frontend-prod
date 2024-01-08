import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {BehaviorSubject, catchError, mergeMap, of, switchMap, throwError} from "rxjs";
import {User} from "../../interfaces";
import {fadeAnimation} from "../../animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeAnimation]
})
export class LoginComponent implements OnInit {


  showPassword = false;
  showPasswordConfirm = false;
  form!: FormGroup;
  showToast = false;
  toastMessage = "";
  showError =false;
  errorMessage="";



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
    this.showToast=false;

    let emailInput = this.form.get("email");
    let passwordInput = this.form.get("password");

    if (emailInput?.valid && passwordInput?.valid) {

      let email = emailInput.value;
      let password = passwordInput.value;

      this.authService.login(email, password).pipe(
        catchError(error => {
          this.toastMessage = error.error?.message;
          this.showToast = true;

          return throwError(() => error);
        })
      ).subscribe(serverResponse => {
          if (serverResponse.user) {
            this.userService.setCurrentUser(serverResponse.user);
            this.router.navigate(['/dashboard']);
          }
        });

    } else {
      emailInput?.markAsTouched();
      emailInput?.markAsDirty();
      passwordInput?.markAsTouched();
      passwordInput?.markAsDirty();

      this.errorMessage = "Verifique o preenchimento dos campos."
      this.showError = true;

      setTimeout(() => {
        this.showError = false;
      }, 2000);
    }


  }

}
