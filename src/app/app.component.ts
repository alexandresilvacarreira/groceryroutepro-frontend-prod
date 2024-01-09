import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'groceryroutepro-angular-frontend';

  currentRoute = '';
  previousRoute = '';
  hideNavbar?:boolean;
  pagesWithoutNavbar = ["/login", "/welcome","/confirm-registration","/signup","/verify-account","/","/request-new-password"];
  hideHeaderPage?:boolean;
  pagesWithoutHeader = ["/login", "/welcome","/confirm-registration","/signup","/verify-account","/", "/dashboard", "/product-details/", "request-new-password"];

  constructor(private userService:UserService, private router: Router) {
  }

  getRouterEvents(){
    return this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }

  ngOnInit(): void {

    this.getRouterEvents().subscribe(
      (event) => {
        if (event instanceof NavigationEnd){
          this.previousRoute = this.currentRoute;
          this.currentRoute = event.url;
          let productDetailsRoute = /^\/product-details\/\d+$/;
          this.hideNavbar = this.pagesWithoutNavbar.includes(this.currentRoute) /*|| productDetailsRoute.test(this.currentRoute)*/;
          this.hideHeaderPage = this.pagesWithoutHeader.includes(this.currentRoute) /*|| productDetailsRoute.test(this.currentRoute)*/;
        }
      }
    )

  }




}
