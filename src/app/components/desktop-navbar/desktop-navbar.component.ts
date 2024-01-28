import {Component} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {User} from "../../interfaces";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {catchError, throwError} from "rxjs";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";
import {isUser} from "../../utils";

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss']
})
export class DesktopNavbarComponent {

  protected readonly faSearch = faSearch;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faRoute = faRoute;
  protected readonly faUser = faUser;
  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private router : Router, public userService: UserService, private authService : AuthService) {
  }


  logout() {
    this.authService.logout()
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.userService.clearCurrentUser();
        this.router.navigate(['/login']);
      });
  }

  protected readonly faCircle = faCircle;
  protected readonly isUser = isUser;
}
