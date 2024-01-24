import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {catchError, throwError} from "rxjs";
import {User} from "../../../interfaces";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-shop-desktop-navbar',
  templateUrl: './shop-desktop-navbar.component.html',
  styleUrls: ['./shop-desktop-navbar.component.scss']
})
export class ShopDesktopNavbarComponent {
  chainId!: number;
  chainName: string[]=[];
  currentUser!: User;
  matriz: number[] = [];
  constructor(private router : Router, public userService: UserService, private authService : AuthService) {
  }

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user as User;
      this.matriz = this.currentUser?.stores.map(store => store.id);
      this.chainName= this.currentUser?.stores.map(store => store.name);
      this.chainId = Number(this.matriz[0]);
    });
  }
  logout() {
    this.authService.logout()
        .pipe(
            catchError(error => {
              console.error(error);
              return throwError(() => error);
            })
        )
        .subscribe(serverResponse => {
          this.userService.clearCurrentUser();
          this.router.navigate(['/login']);
        });
  }

  isUser(obj: any): obj is User {
    return obj !== false && obj !== null && typeof obj === 'object' && 'name' in obj;
  }



  protected readonly faRoute = faRoute;
  protected readonly faSearch = faSearch;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faUser = faUser;
  protected readonly faArrowRightFromBracket = faArrowRightFromBracket;
  protected readonly faCircle = faCircle;
    protected readonly faCartPlus = faCartPlus;
    protected readonly faPenToSquare = faPenToSquare;


}
