import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
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
    if (tokenControl) {
      let tokenValue = tokenControl.value;
      console.log(tokenControl)
      this.authService.verifyAccount(tokenValue).subscribe(
        response => {
          console.log(tokenValue)
          this.showSucess = true;
          setTimeout(() => {
            this.showSucess = false;
          }, 2000);
          //this.router.navigate(['/login']);
        },
        (error) => {
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 2000);
          this.form.reset();
        }
      )
    }


  }
}
