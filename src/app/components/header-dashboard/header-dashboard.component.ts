import {Component, Input} from '@angular/core';
import {faUserGear} from "@fortawesome/free-solid-svg-icons/faUserGear";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {User} from "../../interfaces";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent {

  protected readonly faUserGear = faUserGear;
  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;
  @Input() user?:User;


  constructor(private router : Router, public userService: UserService, private authService : AuthService) {
  }

  logout() {
    this.authService.logout().subscribe(serverResponse => {
      if (serverResponse.success){
        // TODO logout
        this.router.navigate(["/login"]);
      }
    });
  }

  isUser(obj: any): obj is User {
    return obj !== false && obj !== null && typeof obj === 'object' && 'name' in obj;
  }

}
