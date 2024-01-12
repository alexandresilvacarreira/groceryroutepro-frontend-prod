import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {catchError, throwError} from "rxjs";
import {fadeAnimation} from "../../animations";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeAnimation]
})
export class ForgotPasswordComponent {

  form!: FormGroup;
  showToast = false;
  toastMessage = "";
  showError =false;
  errorMessage="";


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute, private userService: UserService) {
  }


  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faArrowRightToBracket = faArrowRightToBracket;


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['error']) {
        // Redirect to the login error page
        this.router.navigate(['/error']);
      }
    });

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  Submeter() {
    this.showToast=false;

    let emailInput = this.form.get("email");

    if (emailInput?.valid) {

      let email = emailInput.value;

      this.authService.requestPasswordLink(email).pipe(
        catchError(error => {
          this.toastMessage = error.error?.message;

          return throwError(() => error);
        })
      ).subscribe(serverResponse => {
        if (serverResponse.success) {
          this.router.navigate(['/forgot-password-confirm']);
        }
      });

    } else {
      emailInput?.markAsTouched();
      emailInput?.markAsDirty();

      this.errorMessage = "Verifique o preenchimento dos campos."
      this.showError = true;

      setTimeout(() => {
        this.showError = false;
      }, 2000);
    }


  }


}
