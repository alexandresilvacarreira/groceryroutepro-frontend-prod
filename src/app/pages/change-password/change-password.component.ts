import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faArrowLeft, faArrowRightToBracket, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../services/auth.service";
import {ChangePasswordInterface} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {fadeAnimation} from "../../animations";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [fadeAnimation]
})
export class ChangePasswordComponent {
  showPassword = false;
  showPasswordConfirm = false;
  form!: FormGroup;
  showMessage = false;
  showToast = false;
  message = "";

  showError = false;
  errorMessage = "";

  toastMessage = "";


  header!:string;
  email!: string;
  token!: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,
              private route: ActivatedRoute, private userService: UserService) {
    this.header = this.route.snapshot.params['header'];
    let parts = this.header.split("-");
    this.email=parts[0];
    this.token=parts[1];
    console.log(this.email)
    console.log(this.token)
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

    if (password === confirmPassword) {
      return null;
    } else {
      group.get('confirmPassword')?.setErrors({mismatch: true});
      return {mismatch: true};
    }
  }

  submeter() {
    this.showToast = false;

    let passwordInput = this.form.get("password");
    let confirmPasswordInput = this.form.get("confirmPassword");

    if (passwordInput?.valid && confirmPasswordInput?.valid) {



      this.authService.changePassword(this.email, this.token, passwordInput.value) .pipe(catchError(err => {
        this.message = err.error.message;
        this.showToast = true;
        this.toastMessage = err.error?.message;

        return throwError(() => err);
      }))
        .subscribe(serverResponse => {
          this.router.navigate(['change-password-confirm'])
        })

    } else {
      passwordInput?.markAsTouched();
      passwordInput?.markAsDirty();
      confirmPasswordInput?.markAsTouched();
      confirmPasswordInput?.markAsDirty();

      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    }

  }

}
