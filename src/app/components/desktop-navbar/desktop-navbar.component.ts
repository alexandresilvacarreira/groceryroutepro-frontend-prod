import {Component, Input} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faUserGear} from "@fortawesome/free-solid-svg-icons/faUserGear";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {User} from "../../interfaces";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

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
  protected readonly faUserGear = faUserGear;
  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;

  @Input() user?:User;

  constructor(private router : Router, public userService: UserService, private authService : AuthService) {
  }

  logout() {
    this.authService.logout().subscribe(serverResponse => {
      if (serverResponse.success){
        //TODO logout
        // this.userService.clearCurrentUser();
        this.router.navigate(["/login"]);
      }
    });
  }

}
