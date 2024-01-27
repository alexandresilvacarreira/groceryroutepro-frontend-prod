import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {NavigationService} from "./services/navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'groceryroutepro-angular-frontend';

  showSplash= true;

  currentRoute = '';
  previousRoute = '';
  hideNavbar?:boolean;
  pagesWithoutNavbar = ["/login", "/welcome","/confirm-registration","/signup","/verify-account","/",
    "/request-new-password", "/forgot-password", "/forgot-password-confirm", "/change-password",
    "/change-password-confirm", "/error", "/shop-dashboard", "/shop-new-product", "/shop-edit-product/", "/shop-search-edit-product"];
  hideHeaderPage?:boolean;
  productDetailsRoute = /^\/product-details\/.*/;
  changePasswordRoute = /^\/change-password\/.*/;
  verifyAccountRoute = /\/verify-account\/.*/;

  pagesWithoutHeader = ["/login", "/welcome","/confirm-registration","/signup","/verify-account","/",
    "/dashboard", "/product-details/", "request-new-password", '/forgot-password', '/change-password',
  '/change-password-confirm', "/error", "/create-route"];
  pageTitle?:string;


  constructor(private router: Router, private navigationService:NavigationService, private activatedRoute : ActivatedRoute) {
  }


  ngOnInit(): void {

    this.navigationService.getNavigationEnd().subscribe(
      (event) => {
        if (event instanceof NavigationEnd){
          this.previousRoute = this.currentRoute;
          this.currentRoute = event.url;
          let isShopRoute = this.currentRoute.startsWith('/shop-');
          this.hideNavbar = isShopRoute ||
              this.pagesWithoutNavbar.includes(this.currentRoute) || this.changePasswordRoute.test(this.currentRoute)
          || this.verifyAccountRoute.test(this.currentRoute); /*|| productDetailsRoute.test(this.currentRoute)*/;

          this.hideHeaderPage = this.pagesWithoutHeader.includes(this.currentRoute) || this.productDetailsRoute.test(this.currentRoute)
            || this.changePasswordRoute.test(this.currentRoute) || this.verifyAccountRoute.test(this.currentRoute);
          this.pageTitle = this.activatedRoute.firstChild?.snapshot.data['title'];
        }
      }
    )


    setTimeout(()=>{
      this.showSplash=false;
    }, 3000)

  }




}
