import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {catchError, throwError} from "rxjs";
import {fadeAnimation} from "../../animations";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
  animations: [fadeAnimation]
})
export class VerifyAccountComponent implements OnInit {

  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faEyeSlash = faEyeSlash;
  protected readonly faEye = faEye;


  form!: FormGroup;
  showError = false;
  showSucess = false;
  errorMessage = "";


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,
              private route: ActivatedRoute, private userService: UserService) {
    this.form = this.formBuilder.group({
      token: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['error']) {
        // Redirect to the login error page
        this.router.navigate(['/error']);
      }
    });
  }


  submitToken() {
    let tokenControl = this.form.get("token");
    this.showError=false;
    if (tokenControl) {
      let tokenValue = tokenControl.value;

      this.authService.verifyAccount(tokenValue).pipe(catchError(err => {
        this.errorMessage = err.error.message;
        this.showError = true;
        this.form.reset();
        return throwError(() => err);
      }))
        .subscribe(serverResponse => {
          this.showSucess = true;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);

        })
    }


  }
}
