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
        }
      }
    )

    // this.userService.getCurrentUser().subscribe(user => {
    //   if (user === false) {
    //     this.router.navigate(["/login"]);
    //   }
    // })

  }




}
