import { Component } from '@angular/core';
import {faUserGear} from "@fortawesome/free-solid-svg-icons/faUserGear";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {catchError, throwError} from "rxjs";
import {User} from "../../../interfaces";
import {TruncateFirstWordPipe} from "../../../pipes/truncate-first-word-pipe";

@Component({
  selector: 'app-shop-header-dashboard',
  templateUrl: './shop-header-dashboard.component.html',
  styleUrls: ['./shop-header-dashboard.component.scss']
})
export class ShopHeaderDashboardComponent {

  chainId!: number;
  chainName!: string;
  currentUser!: User;


  protected readonly faUserGear = faUserGear;
  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private router: Router, public userService: UserService, private authService: AuthService) {
  }

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user as User;
      this.chainId = this.currentUser?.chain.id;
      this.chainName = this.currentUser?.chain.name;
    });
  }

  logout() {
    this.authService.logout()
      .pipe(catchError(error => {
        console.error(error);
        return throwError(() => error);
      }))
      .subscribe(serverResponse => {
        this.userService.clearCurrentUser();
        this.router.navigate(["/login"]);
      });
  }

  isUser(obj: any): obj is User {
    return obj !== false && obj !== null && typeof obj === 'object' && 'name' in obj;
  }

  protected readonly TruncateFirstWordPipe = TruncateFirstWordPipe;

}
