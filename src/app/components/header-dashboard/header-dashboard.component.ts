import {Component} from '@angular/core';
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {User} from "../../interfaces";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {catchError, throwError} from "rxjs";
import {TruncateFirstWordPipe} from "../../pipes/truncate-first-word-pipe";
import {isUser} from "../../utils";

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss'],
})
export class HeaderDashboardComponent {


  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private router: Router, public userService: UserService, private authService: AuthService) {
  }

  logout() {
    this.authService.logout()
      .pipe(catchError(error => {
        console.error(error);
        return throwError(() => error);
      }))
      .subscribe(() => {
        this.userService.clearCurrentUser();
        this.router.navigate(["/login"]);
      });
  }

  protected readonly TruncateFirstWordPipe = TruncateFirstWordPipe;

  protected readonly isUser = isUser;
}
